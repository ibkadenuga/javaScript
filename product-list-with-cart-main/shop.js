const main = document.querySelector(".container");
const apiUrl = "https://dummyjson.com/products";

const headerCart = document.querySelector("header .carttt");

const cartContaier = document.querySelector(".cart-container");
const cartCount = document.querySelector(".cartCount");
const cartList =  document.querySelector(".cart-list")

async function fetchData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  renderData(data.products);
}

let cart = [];

function renderData(data) {
  main.textContent = "";
  console.log(data);
  data.map((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const imageDiv = document.createElement('div')
    imageDiv.className = "imagediv";
    const image = document.createElement('img');
    image.src = item.images[0];
    image.className ="img"

    const bottom = document.createElement('div');
    bottom.className = 'bottom';

    const tagsDiv = document.createElement("div");
    tagsDiv.className = "tagsdiv";
    item.tags.map((tag) => {
      const tagElement = document.createElement("span");
      tagElement.textContent = tag;
      tagElement.className = "tag";
      tagsDiv.append(tagElement);
    });

    const title = document.createElement('h1');
    title.textContent = item.title
    title.className = 'title';

    const price = document.createElement('p');
    price.textContent = `$${item.price}`;
    price.className ='price';

    const cartBtn = document.createElement("button");
    cartBtn.className = 'cartbtn'
    const icon = document.createElement('i');
    icon.className = 'icon fa-solid fa-cart-arrow-down'
    const btnSpan = document.createElement('span');
    btnSpan.textContent = 'Add to Cart';
    btnSpan.className = 'btnspan'
    cartBtn.addEventListener('click',()=>{
      cart.push(item);
      cartCount.textContent = cart.lenght;
      renderCart();
    })
    


    cartBtn.append(icon, btnSpan)
    bottom.append(tagsDiv, title, price)
    imageDiv.append(image)
    card.append(imageDiv, bottom, cartBtn);
    main.append(card);
  });
}

function renderCart(){
  cartList.textContent = "";
  cart.map((item) =>{
    const cartItem = document.createElement('div');
    cartItem.classList = 'cartitem'

    const title = document.createElement('h2');
    text.textContent = item.title;
    title.className = 'title'




    cartItem.append(title);
    cartList.append(cartItem)
  })
}


fetchData();
