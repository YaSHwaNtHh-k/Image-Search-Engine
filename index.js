let searchform=document.querySelector(".search-form");
let searchbox=document.querySelector(".search-box");
let searchbtn=document.querySelector(".search-btn");
let showmore=document.querySelector(".show-more");
let searchresult=document.querySelector(".search-result");

let keyword="";
let page=1;

const searchengine=async()=>{
    let keyword=searchbox.value
    acesskey="7b4n84Qum7b52JuEfvyjLRdgfLv5diTI8XSxYLVUUi0";
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acesskey}&per_page=${12}`;
    const reponse=await fetch(url);
    const data=await reponse.json();
    console.log(reponse)

    if(page===1){
        searchresult.innerHTML="";
    }

    const results=data.results;


    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";


        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    })
    showmore.style.display="block";
}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchengine();
})
showmore.addEventListener("click",()=>{
    page++
    searchengine();
})