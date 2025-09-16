const rulesBtn = document.querySelector(".btn");
const rulesModal = document.querySelector('.rules-modal');
const closeBtn = document.querySelector(".close")
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const result = document.querySelector(".result")
const scoreEl = document.querySelector("#score")

rulesBtn.addEventListener("click", ()=>{
    rulesModal.classList.remove('rules');
})

closeBtn.addEventListener("click", ()=>{
    rulesModal.classList.add('rules');
})


// GAME
let score = 0;

rock.addEventListener("click",()=>{
    const random = Math.ceil (Math.random () * 3)

    if(random == 1){
        result.textContent = "Draw"
    }
    else if (random == 2){
        result.textContent = "You Lose"
    }
    else {
        result.textContent = "You Win"
        score = score = +1;
    }

    scoreEl.textContent = score;
})

scissors.addEventListener("click",()=>{
    const random = Math.ceil (Math.random () * 3)

    if(random == 1){
        result.textContent = "You Lose"
    }
    else if (random == 2){
        result.textContent = "You Win"
        score = score = +1;
    }
    else {
        result.textContent = "Draw"
    }

    scoreEl.textContent = score;
})

paper.addEventListener("click",()=>{
    const random = Math.ceil (Math.random () * 3)

    if(random == 1){
        result.textContent = "You win"
        score = score = +1;
    }
    else if (random == 2){
        result.textContent = "draw"
    }
    else {
        result.textContent = "You Lose"
    }

    scoreEl.textContent = score;
})