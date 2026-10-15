function featuredToday() {
  async function getDataFeatured() {
    let getDataFeatured = "";
    let data = await fetch("https://shimaakrami.github.io/IMDb/db.json");
    let res = await data.json();
    getDataFeatured = res.featuredToday?.map((item) => {
      return `

                       <div class="swiper-slide">
                            <div class="image">
                                    <div class="background-slide"></div>
                                <img src=${item.src} alt="">
                                <div class="boxLink">
                                   
                                      <img src=${item.categoryimage} alt="">
                                      <span>${item.categoryname}</span>
                                 
                                 </div>
                            </div>

                            <div class="detailsLink">
                                <a href=${item.href}>
                                <span>
                                ${item.detail1}
                                </span>

                                </a>
                                <a  href=${item.href}>
                                <span  class="blueLink" >
                                 ${item.detail2}
                                </span>
                        

                                </a>
                             </div>
                  
                  
                         </div>


`;
    });

    document
      .querySelector("#featuredToday")
      .insertAdjacentHTML("afterbegin", getDataFeatured.join(""));
  }
  function swiperFeaturedToday() {
    let swiperFeatured = new Swiper(".swiperfeaturedToday", {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    return swiperFeatured;
  }

  return { swiperFeaturedToday, getDataFeatured };
}
export { featuredToday };
