let inputVal=document.querySelector(".input")
let searchBtn=document.querySelector(".searchIcon")
let languages=document.querySelectorAll(".languagesName span")
let timerCount=document.querySelector(".timerCount")
let main=document.querySelector(".main")
let scores=document.querySelector("#actualScore")
let gameOver=document.querySelector(".gameOverContainer")
let mainHeadings=document.querySelector(".mainHeadings")
let mainContainer=document.querySelector(".mainContainer")
let finalScores=document.querySelector(".finalScore")
let time=60;
let scoreCount=0;
document.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){
        searchBtn.click()
    }
})
function scoreCounter(){
    scoreCount+=10;
    scores.textContent=scoreCount;
}
function endGame(){
    mainHeadings.style.display="none"
    mainContainer.style.display="none"
    finalScores.innerHTML=`Score:${scores.textContent}`
    gameOver.style.display="flex"
}

   let interval= setInterval(()=>{
        if(time>0){
        time--;
        timerCount.textContent=time+"s" ;
        }else{
clearInterval(interval)
endGame()

}
        },1000)
  

searchBtn.addEventListener("click",()=>{
    checkLanguage(inputVal)
})
let totalLanguages = languages.length; // Total number of languages
let correctlyGuessed = 0; 
function checkLanguage(inputVal){
    let inputValue=inputVal.value.toLowerCase()
     if(inputValue===""){
         alert("Please Type a language First")
         return
     }
 
 for(let i=0;i<languages.length;i++){
    if(languages[i].textContent.toLowerCase()===inputValue){
     languages[i].style.transform="scale(1)"
     scoreCounter()
     inputVal.value=""
     correctlyGuessed++;
     if (correctlyGuessed === totalLanguages) {
        time=0;
         endGame();
     }
     return
    }
    }
    alert("That is not in our List")
    inputVal.value=""
    return
 }

 
 
