function bigMenu() {
  async function getBigMenu() {
    let data = await fetch("https://shimaakrami.github.io/ShimaIMDb/db.json");

    let res = await data.json();
    let resfinal = res.bigMenu;
   console.log("res:", res);
   console.log("resfinal:", resfinal);
   console.log(
     "movies:",
     resfinal.find((item) => String(item.id) === "1"),
   );
   console.log(
     "tvShows:",
     resfinal.find((item) => String(item.id) === "2"),
   );
   console.log(
     "awards:",
     resfinal.find((item) => String(item.id) === "3"),
   );
   console.log(
     "celebs:",
     resfinal.find((item) => String(item.id) === "4"),
   );
   console.log(
     "watch:",
     resfinal.find((item) => String(item.id) === "5"),
   );
   console.log(
     "community:",
     resfinal.find((item) => String(item.id) === "6"),
   );
    let movies = resfinal.find(function (item) {
      return item.id === 1;
    });
    let tvShows = resfinal.find(function (item) {
      return item.id === 2;
    });
    let awards = resfinal.find(function (item) {
      return item.id === 3;
    });
    let celebs = resfinal.find(function (item) {
      return item.id === 4;
    });
    let watch = resfinal.find(function (item) {
      return item.id === 5;
    });
    let community = resfinal.find(function (item) {
      return item.id === 6;
    });

    /* console.log("movies:", movies);
console.log("tvShows:", tvShows);
console.log("awards:", awards);
console.log("celebs:", celebs);
console.log("watch:", watch);
console.log("community:", community); */

    let bigMenu = `<div class="bigMenuBoxes">
        <div class="headerMenu">
            <div class="logoImg">
                <img src="../public/images/menu/IMDb_Logo_Square.svg.webp" alt="">
            </div>
            <div class="closeBtn" id="closeBtn">
                <span>&times;</span>
            </div>
        </div>
     <div class="mainMenu">

      <div class="left">
        ${createSection(movies)}
        ${createSection(celebs)}
      </div>

      <div class="middle"> 
      ${createSection(tvShows)}
      ${createSection(watch)}
       
        
      </div>

      <div class="right">
        ${createSection(awards)}
        ${createSection(community)}
      </div>

    </div>

  </div>
    `;
    document.querySelector("#bigMenuBoxes").innerHTML = bigMenu;
    document.querySelector("#closeBtn").addEventListener("click", function () {
      document.querySelector(".bigMenuBoxes").remove();
    });
    /*  console.log("BIG MENU HTML:", bigMenu);
    console.log("CONTAINER:", document.querySelector("#bigMenuBoxes"));
 */
    function createSection(item) {
      let list = "";
      for (let i = 1; i <= 10; i++) {
        let value = item["item" + i];
        if (value) {
          list += `<li>${value}</li> `;
        }
      }
      return `
<div class="menuSection">
    <div class="headerMain">
        <img src="${item.src}" alt="">
        <h2>${item.label}</h2>
    </div>
    <ul>
        ${list}
    </ul>
</div>
`;
    }
  }

  document
    .querySelector("#hambergerMenu")
    .addEventListener("click", function () {
      getBigMenu();
    });

  return {
    getBigMenu,
  };
}

export { bigMenu };
