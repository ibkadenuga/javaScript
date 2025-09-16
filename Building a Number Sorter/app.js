const selects = Array.from(document.querySelectorAll("select"));
const btn = document.querySelector('button');
const spans = Array.from(document.querySelectorAll("span"));

const myArr = [0, 0, 0, 0, 0];

selects.map((select,i)=>{
    select.addEventListener("change",(e)=>{
        myArr[i] = Number(e.target.value)
    })
})

btn.addEventListener('click', ()=>{
    myArr.sort((a,b)=>a-b)

    spans.map((span,i)=>{
        span.textContent = myArr[i]
    })
})