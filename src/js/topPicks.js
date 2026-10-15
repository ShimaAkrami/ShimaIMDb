function topPicks() {
  let getTopMovies = [];
  async function getTopPicks() {
    let getData = "";
    let data = await fetch("https://shimaakrami.github.io/IMDb/db.json");
    let res = await data.json();
    getTopMovies = res.topPicks;
    getData = res.topPicks?.map((item) => {
      return `
    
  <div class="swiper-slide">

                        <div class="imageTop">
                            <img src=${item.src} alt="">
                            <div class="plusBookmarkbox">
                                <div class="bookMark">
                                    <img src="../public/images/tedLasso/bookmarkdark.svg" alt="">
                                </div>
                                <div class="plusMark">
                                    <img src="../public/images/tedLasso/pluswhite.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="info">
                            <div class="rankingBox">
                                <div class="part1">
                                    <img src="../public/images/topPicks/goldStar.svg" alt="">

                                    <span>${item.rank}</span>
                                </div>
                                <div class="part2">
                                    <button>
                                        rating
                                    </button>
                                </div>

                            </div>


                            <div class="title">
                                <a href="">${item.name}</a>
                            </div>

                            <div class="watchListBtn">
                                <button>
                                    <span>watchlist</span>
                                    <img src="../public/images/topPicks/bluePlus.svg" alt="">
                                </button>
                            </div>
                            <div class="trailer">
                                <div class="left">
                                    <img src="../public/images/topPicks/playwithOutCircle.svg" alt="">
                                    <span>trailer</span>
                                </div>
                                <div class="right infoBtn"  data-id="${item.id}">
                                <img src="../public/images/topPicks/info.svg" alt="">
                                </div>
                            </div>

                        </div>

                    </div>
                          
    `;
    });
    document
      .querySelector("#topPicksSwiperId")
      .insertAdjacentHTML("beforeend", getData.join(""));
  }
  function createInfoModal(findId) {
    let movie = getTopMovies.find(function (item) {
      return String(item.id) === String(findId);
    });

    return `
       <div class="backGroundBox"></div>
    <div class="closeBtn" id="closeBtn">
        <span>&times;</span>
    </div>
    <div class="infoModal" id='infoModalVisibility' >
    

        <div class="topBox">
            <div class="left">
                <img src=${movie.src} alt="">
            </div>
            <div class="right">
                <div class="topic">
                    <h4> ${movie.name} </h4>
                    <img src="../public/images/coverImage/coverSvg/right-angel.svg" alt="">
                </div>
                <div class="movieDate">
                    <div class="top">
                        <ul>
                            <li>${movie.year} </li>
                            <li>${movie.hours} </li>
                            <li>${movie.code}</li>

                        </ul>
                    </div>
                    <div class="down">
                        <ul>
                            <li>${movie.type.one}</li>
                            <li>${movie.type.two}</li>
                        </ul>
                    </div>
                </div>
                <div class="rankingBox">
                    <div class="part1">
                        <img src="../public/images/topPicks/goldStar.svg" alt="">

                        <span>${movie.rabkOutOfTen}</span>
                    </div>
                    <div class="part2">
                        <button>
                            rating
                        </button>
                    </div>

                </div>
            </div>
        </div>
        <div class="downBox">
            <div class="briefStory">
                <p>
                   ${movie.brief}
                </p>
            </div>
            <div class="moreInterest">
                <span>Because of your interest in</span>
                <ul class="moviesBox">
                    <li>${movie.moreMovie.one}</li>
                    <li>${movie.moreMovie.two}</li>
                </ul>
            </div>
        </div>
        <div class="buttonBoxes">
            <div class="watchListBtn1">
                <button>
                    <span>watchlist</span>
                    <img src="../public/images/topPicks/bluePlus.svg" alt="">
                </button>
            </div>
            <div class="watchListBtn2">
                <button>
                    <span>.</span>
                    <img src="../public/images/topPicks/disLikeBlue.svg" alt="">
                </button>
            </div>
        </div>
        <div class="setUpBox">
            <img src="../public/images/topPicks/settingBlue.svg" alt="">
            <span>Set your preferred services</span>

        </div>
   
       </div> `;
      
      
  }
  
 

  async function infoClick() {
    let btnInfo = document.querySelectorAll(".infoBtn");
    btnInfo.forEach((item) => {
      item.addEventListener("click", function () {
document.querySelector(".modaltopPicksBoxes").classList.add('active');
      let clickedId = item.dataset.id;
      
    let modalHtml =createInfoModal(clickedId);
     document
       .querySelector(".modaltopPicksBoxes")
       .insertAdjacentHTML("beforeend", modalHtml);
      
      infoClickDelete();
      
      });

     
    
    });
     
  }
     function infoClickDelete() {
      let closeBtn= document.querySelector(".closeBtn");
     closeBtn.addEventListener("click",function(){
        document.querySelector("#infoModalVisibility").remove();
        document.querySelector(".backGroundBox").remove();
        closeBtn.remove();

     })
    }
 
  function swiperTopPicks() {
    let topPicksSwiper = new Swiper(".topPicksSwiper", {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 6,
      speed: 1000,
      navigation: {
        nextEl: ".topPicksSwiper .swiper-button-next",
        prevEl: ".topPicksSwiper .swiper-button-prev",
      },
    });
    return topPicksSwiper;
  }

  return {
    getTopPicks,
    swiperTopPicks,
    infoClick,
    createInfoModal,
infoClickDelete
  };
}
export { topPicks };
