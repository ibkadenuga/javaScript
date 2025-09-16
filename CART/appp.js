const main = document.querySelector(".container");
const headerCart = document.querySelector("header button");
const cartCount = document.querySelector(".cartCount");
const cartList = document.querySelector(".cart-list");
const apiUrl = "https://dummyjson.com/products";

async function fetchData() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  renderData(data.products);
}

let cart = [];

function renderData(data) {
  main.textContent = "";
  console.log(data);
  data.map((item) => {
    const card = document.createElement("div");
    card.className =
      "relative flex flex-col /hover:[&>button]:block shadow-[0px_0px_10px] shadow-gray-400 cursor-pointer";
    const image = document.createElement("img");
    image.src = item.images[0];
    image.className = "hover:scale-115 duration-500 hover:duration-500";

    const bottom = document.createElement("div");
    bottom.className =
      "w-full text-white h-fit min-h-14 bg-gray-500 p-1 font-semibold";

    const title = document.createElement("p");
    title.textContent = item.title;
    title.className = "text-white text-[12px] font-bold";

    const price = document.createElement("p");
    price.textContent = `$${item.price}`;
    price.className = "text-red-300 text-[12px] font-bold";

    const rateDiv = document.createElement("div");
    rateDiv.className = "flex justify-between items-center";

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${item.rating}`;
    rating.className = "text-yellow-300 text-[10px]";

    const returnPolicy = document.createElement("p");
    returnPolicy.textContent = item.returnPolicy;
    returnPolicy.className = "text-red-400 text-[10px]";

    const tagsDiv = document.createElement("div");
    tagsDiv.className = "absolute w-47 justify-between top-2 left-2 flex gap-1 text-xs capitalize";
    item.tags.map((tag) => {
      const tagElement = document.createElement("span");
      tagElement.textContent = tag;
      tagElement.className = "bg-blue-400 p-1 font-semibold text-white";
      tagsDiv.append(tagElement);
    });

    const CartButton = document.createElement("button");
    CartButton.className = 
    "absolute hover:bg-blue-500 text-white flex items-center duration-500 cursor-pointer active:scale-90 active:bg-gray-300 top-46 bg-blue-400 p-1 rounded-full px-3 right-12";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-cart-shopping text-xs";
    const btnSpan = document.createElement("span");
    btnSpan.textContent = "Add To Cart";
    btnSpan.className = "text-xs font-semibold ml-1";
    CartButton.append(icon, btnSpan);
    CartButton.addEventListener("click", () => {
      cart.push(item);
      cartCount.textContent = cart.length;
      renderCart();
    });

    // card.appendChild(tag);
    rateDiv.append(rating, returnPolicy);
    bottom.append(title, price, rateDiv);
    card.append(image, bottom, tagsDiv, CartButton);
    main.append(card);
  });
}

function renderCart() {
  cartList.textContent = "";
  cart.map((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "border p-3 flex gap-2 justify-between items-center";

    const image = document.createElement("img");
    image.src = item.images[0];
    image.className = "w-8 h-8 object-cover";

    const title = document.createElement("h2");
    title.textContent = item.title;

    const amount = document.createElement("div");
    amount.className = "flex items-center justify-center gap-1 text-2xl";
    
    const plus = document.createElement("button");
    plus.textContent = "+";
    const span = document.createElement("span");
    span.textContent = 1;
    const minus = document.createElement("button");
    minus.textContent = "-";
    amount.append(plus, span, minus);

    const price = document.createElement("h2");
    price.textContent = `$ ${item.price}`;

    plus.addEventListener("click", () => {
      span.textContent = Number(span.textContent) + 1;
      price.textContent = `$ ${(item.price * Number(span.textContent)).toFixed(
        2
      )}`;
    });

    minus.addEventListener("click", () => {
      if (span.textContent != 1) {
        span.textContent = Number(span.textContent) - 1;
        price.textContent = `$ ${(
          item.price * Number(span.textContent)
        ).toFixed(2)}`;
      }
    });

    amount.className =
      "flex gap-1 text-2xl [&>button]:cursor-pointer [&>button]:w-6 [&>button]:flex [&>button]:justify-center [&>button]:items-center   [&>button]:h-6 [&>button]:rounded-full  [&>button]:border font-semibold items-center";

    cartItem.append(image, title, amount, price);
    cartList.append(cartItem);
  });
}

fetchData();
