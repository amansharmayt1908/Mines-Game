let mines = document.querySelectorAll(".mine");
const restart = document.querySelector(".restart")
const cl = document.querySelector(".change-luck")
const result = document.querySelector("#wlcm")


let mineidx;
const rndmmine = Math.floor(Math.random() * 9);
const genrandommine = () => {
//   mines[rndmmine].disabled = true;
//   console.log(rndmmine);
};

const putmine = () => {
  genrandommine();
};


const r = rndmmine
const stgame = () => {
    putmine();
let i = 0    
mines.forEach((mine, index) => {
  mine.addEventListener("click", () => {
    i = i+1
    // console.log(i)
    mine.style.backgroundImage = "url(diamond.jpg)";
    mine.disabled = true;
    // console.log("clicked");
    const mineidx = index;
    // console.log("Index of box clicked: ", mineidx);
    if (mineidx === r) {
        mine.style.backgroundImage = "url(bomb.png)";
        const a = document.querySelectorAll(".mine");
        a.forEach((b) =>{
            b.disabled = true;
        })
        result.innerHTML = "You Lost";
        // console.log("Lost");
      }
      while (mineidx !== r){
        result.innerHTML = "WELCOME TO MINES";
        if(i===8){
            result.innerHTML = "You Won";
            break;
        }else{
            // result.innerHTML = "You Lost";
            break;
        }
        
      }
  
  });
});  
}

stgame()

restart.addEventListener("click", () => {
    window.location.reload();
})

cl.addEventListener("click", () => {
    window.location.reload();
})
