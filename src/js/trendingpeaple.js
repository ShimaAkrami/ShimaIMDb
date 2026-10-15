function trendingPeaple() {
  async function getpeopleTrending() {
    let getPeople = "";
    let data = await fetch("https://shimaakrami.github.io/ShimaIMDb/db.json");
    let res = await data.json();
    getPeople = res.trendingPeople?.map((item) => {
      return `
      <div class="swiper-slide">
                        <div class="textUp">
                            <span>${item.title}</span>
                        </div>
                        <div class="imageBox">
                            <img src=${item.src} alt="">
                            <div class="plusab">
                                <img src="../public/images/trendingPeaple/pluss.svg" alt="">
                            </div>
                        </div>
                        <div class="textDown">
                            <div class="up">
                                <span>${item.currentRank}( <span> .. </span>${item.peopleCount})</span>
                                <img src="../public/images/trendingPeaple/fleshgreen.svg" alt="">

                            </div>
                            <div class="down">
                                <span>${item.name}</span>
                            </div>
                        </div>

                    </div>
        
                  `;
    });
    document
      .querySelector("#trendingSwiper")
      .insertAdjacentHTML("beforeend", getPeople.join(""));
  }

  function swipertrend() {
    let trendswiper = new Swiper(".trendingSwiper", {
      slidesPerView: 6,
      spaceBetween: 16,
      slidesPerGroup: 6,
      speed: 1000,
      navigation: {
        nextEl: ".trendingSwiper .swiper-button-next",
        prevEl: ".trendingSwiper .swiper-button-prev",
      },
    });
    return trendswiper;
  }

  return { swipertrend, getpeopleTrending };
}
export { trendingPeaple };
