function tedLasso() {
  let tedLassoData = [];
  let swiperTed;

  function updatePrevButton() {
    let activeSlide = swiperTed.slides[swiperTed.activeIndex];

    let slideSeason = activeSlide.dataset.season;
    let slideEpisode = activeSlide.dataset.episode;

    let seasonData = tedLassoData.find(function (item) {
      return item.season === slideSeason;
    });

    let episodeIndex = seasonData.episodes.findIndex(function (episode) {
      return episode.name === slideEpisode;
    });

    let prevButton = document.querySelector(
      ".swiperEpisode .swiper-button-prev",
    );

    let nextButton = document.querySelector(
      ".swiperEpisode .swiper-button-next",
    );

    // کنترل دکمه Prev
    if (episodeIndex === 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "flex";
    }

    // کنترل دکمه Next
    if (episodeIndex === seasonData.episodes.length - 1) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "flex";
    }
  }
  async function getDataTedLasso() {
    let getData = "";
    let data = await fetch("https://shimaakrami.github.io/ShimaIMDb/db.json");
    let res = await data.json();
    tedLassoData = res.tedLasso;
    let firstSeason = tedLassoData.find(function (item) {
      return item.season === "S1";
    });

    renderEpisodeRanking(firstSeason);
    renderSeasonAverage(firstSeason);
    getData = res.tedLasso
      ?.map((item) => {
        return item.episodes
          .map((episode) => {
            return `
      
                        <div class="swiper-slide" data-season="${item.season}" data-episode="${episode.name}">
                            <div class="up">
                                <div class="left">
                                    <img src="${episode.src}" alt="">

                                </div>
                                <div class="right">
                                    <div>
                                        <ul>
                                            <li>${item.season}.${episode.name}</li>
                                            <li>.  ${episode.date}</li>
                                        </ul>
                                    </div>
                                    <div class="textHome">
                                        <h3> ${episode.titleText}</h3>
                                        <img src="../public/images/coverImage/coverSvg/right-angel.svg" alt="">
                                    </div>
                                    <div class="rankepi">
                                        <img src="../public/images/tedLasso/starGold.svg" alt="">
                                        <span>${episode.rate.rating}</span>
                                        <span>${episode.rate.countNumber}</span>
                                    </div>
                                    <div class="paraph">
                                        <p>${episode.paragraph}</p>
                                    </div>

                                </div>
                            </div>
                            <div class="down">
                                <span>Your rating:</span>
                                <div>
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">
                                    <img src="../public/images/tedLasso/emtyStar.svg" alt="">

                                </div>

                            </div>
                        </div>

       `;
          })
          .join("");
      })
      .join("");
    document
      .querySelector("#swiperTedl")
      .insertAdjacentHTML("beforeend", getData);
  }

  function swipertedLasso() {
    swiperTed = new Swiper(".swiperTed", {
      slidesPerView: 1,

      navigation: {
        nextEl: ".swiperEpisode .swiper-button-next",
        prevEl: ".swiperEpisode .swiper-button-prev",
      },
    });

    swiperTed.on("slideChange", function () {
      let activeSlide = swiperTed.slides[swiperTed.activeIndex];

      let slideSeason = activeSlide.dataset.season;
      let slideEpisode = activeSlide.dataset.episode;

      let seasonData = tedLassoData.find(function (item) {
        return item.season === slideSeason;
      });

      let selectedSeason = document
        .querySelector(".seasonName span")
        .textContent.replace(" Episodes", "");

      if (slideSeason !== selectedSeason) {
        let seasons = document.querySelectorAll(".seasons span");

        seasons.forEach(function (season) {
          season.classList.remove("active");
        });

        seasons.forEach(function (season) {
          if (season.dataset.season === slideSeason) {
            season.classList.add("active");
          }
        });

        renderSeasonAverage(seasonData);
        renderEpisodeRanking(seasonData);
      }

      let episodeIndex = seasonData.episodes.findIndex(function (episode) {
        return episode.name === slideEpisode;
      });
      updatePrevButton();

      let rankBoxes = document.querySelectorAll("#rankBoxes .rankBox");

      rankBoxes.forEach(function (box) {
        box.classList.remove("active");
      });

      let activeBox = document.querySelector(
        `#rankBoxes .rankBox[data-index="${episodeIndex}"]`,
      );

      if (activeBox !== null) {
        activeBox.classList.add("active");
      }
    });

    updatePrevButton();

    return swiperTed;
  }

  function selectSeason() {
    let seasons = document.querySelectorAll(".seasons span");

    seasons.forEach(function (season) {
      season.addEventListener("click", function () {
        let selectedSeason = season.dataset.season;
        seasons.forEach(function (item) {
          item.classList.remove("active");
        });

        season.classList.add("active");
        let seasonData = tedLassoData.find(function (item) {
          return item.season === selectedSeason;
        });
        renderSeasonAverage(seasonData);
        renderEpisodeRanking(seasonData);
        let seasonIndex = tedLassoData.findIndex(function (item) {
          return item.season === selectedSeason;
        });

        let firstEpisodeIndex = 0;

        for (let i = 0; i < seasonIndex; i++) {
          firstEpisodeIndex += tedLassoData[i].episodes.length;
        }

        swiperTed.slideTo(firstEpisodeIndex);
        updatePrevButton();
      });
    });
    let firstSeason = document.querySelector('.seasons span[data-season="S1"]');

    firstSeason.classList.add("active");
  }

  function renderSeasonAverage(seasonData) {
    let averageHTML = `
    <div class="avarageSeasonEpesode">
      <div class="seasonName">
        <span>${seasonData.season} Episodes</span>
      </div>

      <div class="dashBox">
        <span></span>
      </div>

      <div class="ratingBox">
        <img src="../public/images/tedLasso/starGold.svg" alt="">
        <span>${seasonData.avarageRate}</span>
      </div>

      <div class="avarageBox">
        <span>Average</span>
      </div>

      <div class="detailRatingBox">
        <span>from ${seasonData.avarageFrom} episode ratings</span>
      </div>
    </div>
  `;

    document.querySelector("#seasonAverage").innerHTML = averageHTML;
  }

  function renderEpisodeRanking(seasonData) {
    let rankingHTML = "";

    let chartHeight = 72.95;
    let average = Number(seasonData.avarageRate);

    // محاسبه موقعیت خط میانگین
    let averagePosition = chartHeight - (average / 10) * chartHeight;

    seasonData.episodes.forEach(function (episode, index) {
      let rating = Number(episode.rate.rating);
      let isAboveAverage = rating >= average;

      // ارتفاع ستون بر اساس امتیاز
      let height = (rating / 10) * chartHeight;

      // تعیین موقعیت عمودی ستون
      let top = chartHeight - height;

      rankingHTML += `
      <div
       class="rankBox" data-index="${index}"
        style="
          height: ${height}px;
          top: ${top}px;
          left: ${index * 63.63}px;
        "
      >
        <span>${rating}</span>
        <span class="eName">${episode.name}</span>
      </div>
    `;
    });

    let rankBoxes = document.querySelector("#rankBoxes");
    rankBoxes.innerHTML = rankingHTML;
    let firstBox = rankBoxes.querySelector(".rankBox");

    if (firstBox !== null) {
      firstBox.classList.add("active");
    }
    rankBoxes.onclick = function (event) {
      let clickedBox = event.target.closest(".rankBox");

      if (clickedBox === null) {
        return;
      }

      let boxes = rankBoxes.querySelectorAll(".rankBox");

      boxes.forEach(function (box) {
        box.classList.remove("active");
      });

      clickedBox.classList.add("active");

      let index = Number(clickedBox.dataset.index);

      let selectedSeason = document
        .querySelector(".seasonName span")
        .textContent.replace(" Episodes", "");

      let globalIndex = 0;

      for (let i = 0; i < tedLassoData.length; i++) {
        if (tedLassoData[i].season === selectedSeason) {
          globalIndex += index;
          break;
        }

        globalIndex += tedLassoData[i].episodes.length;
      }

      swiperTed.slideTo(globalIndex);
    };

    let averageLine = document.querySelector(".avarageLine");
    averageLine.style.top = averagePosition + "px";
  }

  return {
    getDataTedLasso,
    swipertedLasso,
    selectSeason,
    renderSeasonAverage,
    renderEpisodeRanking,
  };
}
export { tedLasso };
