function swiper() {
  async function getDataLeft() {
    let swiperItem = "";
    let data = await fetch("https://shimaakrami.github.io/ShimaIMDb/db.json");
    let res = await data.json();
    swiperItem = res.movie?.map((item) => {
      return `
     
     <div class="swiper-slide">
           <img src=${item.image.src1} alt=${item.image.alt}>
   
                    <div class="background-slide"></div>
            <div class="slider-down">

                <div class="left">
                    <div class="image">
                        <img src=${item.image.src2}
                            alt="">
                    </div>
                    <div class="bookmarkImg">
                        <img src="../public/images/coverImage/coverSvg/bookmark.svg" alt="">

                    </div>

                    <div class="plus">
                        <img src="../public/images/coverImage/coverSvg/plus .svg" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="left">
                       <a>
                        <img src="../public/images/coverImage/coverSvg/video.svg" alt="">
                       </a>
                    </div>
                    <div class="right">
                        <div class="up">
                            <div>
                                <h2>${item.name}</h2>
                            </div>
                            <div>
                                <span>${item.timetrailer}</span>
                            </div>
                        </div>
                        <div class="down">
                            <div>
                                <span>${item.trailerMovie}</span>
                            </div>
                            <div class="rating">

                                <div>
                                    <img src="../public/images/coverImage/coverSvg/tum finger.svg" alt="">
                                </div>

                                <span>${item.rating.coutOflike}</span>

                                <img src=${item.rating.imojiCount.src1} class="img-close1" alt="">
                                <img src=${item.rating.imojiCount.src2} class="img-close2" alt="">


                                <span>${item.rating.imojiCount.count}</span>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>

         
     `;
    });
    document
      .querySelector("#swiper-left-image-cover")
      .insertAdjacentHTML("afterbegin", swiperItem.join(""));
  }

  function swiperCover() {
    let swiper = new Swiper(".sliderCover", {
      spaceBetween: 30,
      centeredSlides: true,
     
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
    });
    return swiper;
  }

   async function getDataRight(){
    let swiperRight="";
    let data = await fetch("https://shimaakrami.github.io/ShimaIMDb/db.json");
    let res=await data.json();
    swiperRight = res.movie?.map((item) => {
      return `
          
                 
        

                    <div class="swiper-slide " >

                        <div class="imgBox">
                            <img src=${item.image.src2} alt="">
                        </div>
                        <div class="information">

                            <div class="video">
                                <img src="../public/images/coverImage/coverSvg/video.svg" alt="">
                                <span>${item.timetrailer}</span>
                            </div>
                            <div class="name">
                                <span>${item.name}</span>
                                <span class="grey-span">Watch Our Interview</span>
                            </div>
                            <div class="ratingBox">
                                <div class="finger-img">
                                    <img src="../public/images/coverImage/coverSvg/tum finger.svg" alt="">

                                </div>
                                <span>${item.rating.coutOflike}</span>
                                <div class="imageclose1">
                                    <img src=${item.rating.imojiCount.src1} alt="">
                                </div>
                                <img src=${item.rating.imojiCount.src2}  class="img-close2" alt="">
                                <span>${item.rating.imojiCount.count}</span>

                            </div>
                        </div>
                    </div>

                




                   
        

        `;
    });
      document
        .querySelector("#swiperRight")
        .insertAdjacentHTML("beforeend", swiperRight.join(""));
} 

  function swiperNextUp() {
   
    let swiperRight = new Swiper(".sliderUpNext", {
      direction: "vertical",

      slidesPerView: 3,
      spaceBetween: 10,
   
    });
    return swiperRight;
  }

  return { swiperCover, getDataLeft,getDataRight, swiperNextUp };
}

export { swiper };
