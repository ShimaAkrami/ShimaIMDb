
/* function header() {
  async function header1() {
    let menuItem = "";
    let data = await fetch("http://localhost:3000/header1");
    let res = await data.json();
    menuItem = res?.map((item) => {
      return `
     <li>
        <a href=${item.href}>            
        <img src=${item.src} alt=${item.alt}>
        </a>
    </li>
    `;
    });
    document
      .querySelector("#ulbox")
      .insertAdjacentHTML("afterbegin", menuItem.join(""));
  }

  async function header2() {
    let menuItem = "";
    let data = await fetch("http://localhost:3000/header2");
    let res = await data.json();
    menuItem = res?.map((item) => {
      return `

                <li>
                    <a href=${item.href}>
                        <div class="hambergerMenu">

                            <span>
                            ${item.title}
                            </span>


                        </div>
                    </a>
                </li>
    `;
    });
    document
      .querySelector("#ulbox")
      .insertAdjacentHTML("beforeend", menuItem.join(""));
  }
  async function header3() {
    let menuItem = "";
    let data = await fetch("http://localhost:3000/header3");
    let res = await data.json();
    menuItem = res?.map((item) => {
      return `

                <li>
                    <div class="searchInput">

                        <input type="text" placeholder="${item.placeholder}">
                        <span class="clearIcon"></span>


                    </div>
                </li>
    `;
    });
    document
      .querySelector("#ulbox")
      .insertAdjacentHTML("beforeend", menuItem.join(""));
  }

  async function header4() {
    let menuItem = "";
    let data = await fetch("http://localhost:3000/header4");
    let res = await data.json();
    menuItem = res?.map((item) => {
      return `
               <li>
                    <a href=${item.href}>
                        <img src=${item.src} alt=${item.alt}>

                    </a>
                </li>
               
    `;
    });
    document
      .querySelector("#ulbox")
      .insertAdjacentHTML("beforeend", menuItem.join(""));
  }

  async function header5() {
    let menuItem = "";
    let data = await fetch("http://localhost:3000/header5");
    let res = await data.json();
    menuItem = res?.map((item) => {
      return `
        <li id="watchList">
                    <a href=${item.href}>
                        <div class="watchList">
                          <img src=${item.src} alt=${"item.alt"}>
                            <span>${item.title}</span>
                        </div>
                    </a>
                </li>
    `;
    });

    document
      .querySelector("#ulbox")

      .insertAdjacentHTML("beforeend", menuItem.join(""));
  }

  async function header6() {
    let menuItem = "";
    let data = await fetch("http://localhost:3000/header6");
    let res = await data.json();
    menuItem = res?.map((item) => {
      return `
             <li>
                    <a href=${item.href}>
                        <div class="signIn">
                            <span> ${item.title}</span>
                        </div>

                    </a>
                </li>
    `;
    });

    document
      .querySelector("#ulbox")

      .insertAdjacentHTML("beforeend", menuItem.join(""));
  }

  async function header7() {
    let menuItem = "";
    let data = await fetch("http://localhost:3000/header7");
    let res = await data.json();
    menuItem = res?.map((item) => {
      return `
         
                <li>
                    <a href=${item.href}>
                        <div class="lanPart">
                            <span>${item.title}</span>

                        </div>
                    </a>

                </li> 
    `;
    });

    document
      .querySelector("#ulbox")

      .insertAdjacentHTML("beforeend", menuItem.join(""));
  }
  return {
    header1,
    header2,
    header3,
    header4,
    header5,
    header6,
    header7,
  };
}
export { header }; */

/* 



db.json:
{
  "header1": [
    {
      "id": 1,
      "href": "#",
      "src": "../public/images/menu/IMDb_Logo_Square.svg.webp",
      "alt": "logo"
    }
  ],

  "header2": [
    {
      "id": 2,
      "href": "#",
      "title": "Menu"
    }
  ],
  "header3": [
    {
      "id": 3,
      "placeholder": "Search IMDb"
    }
  ],
  "header4": [
    {
      "id": 4,
      "href": "#",
      "src":"../public/images/menu/imdb_icon_231935.png",
      "alt":"imdb pro"
    }
  ],
  "header5": [
    {
      "id": 5,
      "href": "#",
      "src": "../public/images/menu/svgexport-25.svg",
      "alt": "plus svg for watchlist",
      "title": "WatchList"
    }
  ],
  "header6": [
    {
      "id": 6,
      "href": "#",
      "title": "Sign in"
    }
  ],
  "header7": [
    {
      "id": 7,
      "href": "#",
      "title": "EN"
    }
  ]
} */
