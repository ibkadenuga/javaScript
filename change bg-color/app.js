// const button = document.querySelector('button');
// const body = document.querySelector('body');
// const colors=['red',  'yellow', 'green', 'purple', 'orange', 'blue',
//     'grey', 'brown', 'gold', 'cyan', 'magneta', 'teal', 'indigo', 'maroon'
// ];

// body.style.backgroundColor='pink';

// button.addEventListener('click', ()=> {
//     const index = Math.floor(Math.random() * colors.length)
//     body.style.backgroundColor = colors[index]
// })

//https://picsum.photos/1000/1000
const images = [
    'https://fastly.picsum.photos/id/648/1000/1000.jpg?hmac=dC3BrMEduRv3L3u2cjxGarojUqe3677cWDMzlISpbwY' , 
    'https://fastly.picsum.photos/id/157/1000/1000.jpg?hmac=p-PoibNT_a20MxUJwPNRZvxXKyYaH9PjiE_x9n9EsBI',
    'https://fastly.picsum.photos/id/1075/1000/1000.jpg?hmac=Q9LDdAr3uxzwNyoPHukgOWWrmZnQutCtGBU2lMErfdc',
    'https://fastly.picsum.photos/id/35/1000/1000.jpg?hmac=sijkgMRjhqYamTmfpkxf-VDZnJmx_h4PDwhgEwBoGqM'
]
const body = document.querySelector('body')
let current = 0
body.style.backgroundImage = `url(${images[current]})`

const btn = document.querySelector('button')

btn.onclick = ()=>{
    current = (current + 1) % images.length
    body.style.backgroundImage = `url(${images[current]})`
}