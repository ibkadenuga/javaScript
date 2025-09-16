const options = Array.from(document.getElementsByClassName("option"));
const submitBtn = document.querySelector(".submit")
const ratingVal = document.querySelector(".rating-value")
const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")

let rating = null

options.map((button,index)=>{
    button.addEventListener("click",()=>{

        options.map((option,i)=>{
            if(i == index){
                option.classList.add("selected")
            }
            else{
                option.classList.remove("selected")
            }
        })

        rating = index + 1
    })   
})

submitBtn.addEventListener('click',()=>{
    if(rating != null){
        switchPage()
    }
    else(
        alert("you need to select a rating")
    )
})


function switchPage(){
    page1.classList.add("hidden")
    page2.classList.remove("hidden")
    ratingVal.textContent = rating
}