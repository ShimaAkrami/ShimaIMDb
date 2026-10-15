function categoryOne(){
async function getCategoryOne() {
let bildCategory=""
    let data = await fetch("https://shimaakrami.github.io/ShimaIMDb/db.json");
    let res= await data.json()
   /*  console.log(res) */
   bildCategory = res.categoryOne?.map((item) => {
     return `
   <div class="categoriOneInside" >
    <a href=${item.href}>
        <span>${item.title}</span>
        <img src=${item.src} alt="">
    </a>
    </div>
`;
   });
   document.querySelector("#categoryOne").insertAdjacentHTML("beforeend",bildCategory.join(""))

   
    
}
return{getCategoryOne}
}
export {categoryOne}