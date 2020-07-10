// Toggling Themes
document.getElementById("redTheme").addEventListener("click", ()=>{
   document.getElementsByClassName("header")[0].style.background = "rgb(137,4,4)";
   document.getElementById("logo").setAttribute("src", "static/img/logo.png")
})
document.getElementById("blackTheme").addEventListener("click", ()=>{
   document.getElementsByClassName("header")[0].style.background = "rgb(0,0,0)";
   document.getElementById("logo").setAttribute("src", "static/img/logo3.png")
   document.querySelectorAll("i").style.background = "rgb(0,0,0)"

 })
 document.getElementById("whiteTheme").addEventListener("click", ()=>{
    document.getElementById("logo").setAttribute("src", "static/img/logo2.png")
    document.getElementsByClassName("header")[0].style.background = "rgb(137,4,4)";
 })

 let date = new Date()
 const options = {
   year: 'numeric',
   month: 'long',
   day: 'numeric'
 };
 let n = date.toLocaleDateString("tr-TR", options )
 .replace( / /g, '-' )
 let hours = date.getHours();
 let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0'+ minutes : minutes;
let time = hours + ':' + minutes ;
 document.getElementById("date").innerHTML = n + "-" + time
 let date2 = document.getElementsByClassName("date2")
 for(let i=0; i < date2.length; i++){
   document.getElementsByClassName("date2")[i].innerHTML = n + "-" + time
 }
let comments = document.getElementsByClassName("comment-item")
for(let i=0; i<comments.length; i++){
   comments[i].addEventListener("click", ()=>{
      for(let j=0; j < comments.length; j++){
         comments[j].classList.remove("comment-background")
      }
      comments[i].classList.add("comment-background")
   })
}


   let coinItem = document.getElementsByClassName("bitcoin-item")

for(let i=0; i<coinItem.length; i++){
      coinItem[i].addEventListener("click", ()=>{
      for(let j=0; j<coinItem.length; j++){
         coinItem[j].classList.remove("coin-active")
      }
      coinItem[i].classList.add("coin-active")
   })
   
}
