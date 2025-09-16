const themeBtn = document.querySelector('.theme')
const body = document.querySelector('body')
const icon = document.querySelector('i')
const countPara = document.querySelector('p')
const click = document.querySelector('.click')



themeBtn.addEventListener('click',()=>{
    if(body.classList.contains('dark')){
        body.classList.remove('dark');

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    else{
        body.classList.add('dark')
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    }
})

let count = 0 
countPara.textContent = count

click.addEventListener('click',()=>{
    count++
    countPara.textContent = count
})
