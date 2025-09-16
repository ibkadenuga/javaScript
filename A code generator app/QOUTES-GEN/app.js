const btn = document.querySelector("button")
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

btn.addEventListener('click',getData)

function getData (){
    const test = new Promise((resolve,reject)=>{
        try{
            resolve(fetch('https://dummyjson.com/quotes/random'))
        }
        catch (error){
            reject(error)
        }
    })

    test
    .then ((res)=>{
        return res
    })
    .then((data)=>{
        return data.json()
    })
    .then((result)=>{
        console.log(result)
        quote.textContent = result.quote
        author.textContent = result.author
    })
    .catch((err)=>{
        console.log(err)
    })
}