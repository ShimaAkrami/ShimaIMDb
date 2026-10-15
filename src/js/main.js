import { swiper } from "./swiper.js";
import { bigMenu } from "./bigMenu.js";
import { categoryOne } from "./categoryOne.js";
import { featuredToday } from "./featuredToday.js";
import { tedLasso } from "./tedLasso.js";
import { trendingPeaple } from "./trendingpeaple.js";
import { topPicks } from "./topPicks.js";
let { swiperCover, getDataLeft, getDataRight, swiperNextUp } = swiper();
let { getCategoryOne } = categoryOne();
let { getDataFeatured, swiperFeaturedToday } = featuredToday();
let { getDataTedLasso, swipertedLasso, selectSeason } = tedLasso();
let { swipertrend, getpeopleTrending } = trendingPeaple();
let {
  getTopPicks,
  swiperTopPicks,
  createInfoModal,
  infoClick,

} = topPicks();
bigMenu();
getCategoryOne();

async function startSwiper() {
  await getDataLeft();
  await getDataRight();
  let swiperLeft = swiperCover();

  let swiperRight = swiperNextUp();

  swiperRight.slideTo(swiperLeft.activeIndex + 1);

  swiperLeft.on("slideChange", function () {
    swiperRight.slideTo(swiperLeft.activeIndex + 1);
  });
}

async function secondSwiper() {
  await getDataFeatured();
  swiperFeaturedToday();
}

async function thirdSwiper() {
  await getDataTedLasso();
  swipertedLasso();
  selectSeason();
}
async function forthSwiper() {
  await getpeopleTrending();
  swipertrend();
}
async function fifthSwiper() {
  await getTopPicks();
  await swiperTopPicks();
  await infoClick();
 
  
}
startSwiper();
secondSwiper();
thirdSwiper();
forthSwiper();
fifthSwiper();
