const toggleBtn = document.querySelector('.toggle');
const navbarMenu = document.querySelector('.navbar');

const sliderContainer = document.querySelector("#sliderTrack")
const apiUrl = 'https://dummyjson.com/products';

// const swiperDiv = document.querySelector('.swiper')


async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderData(data.products);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



// HERO
// function renderData(products){
//   swiperDiv.textContent ="";
//   console.log(data);
//   data.map((item) =>{
//     const swiperSlide = document.createElement('div');
//     swiperSlide.className = 'swiper-slide'

//     const left = document.createElement('div');
//     left.className = 'left'

//     const title = document.createElement('h2')
//     title.textContent = "Protect Your Skin";
//     title.className = "fff"

//     const right = document.createElement('div');
//     left.className = 'right'

//     const image = document.createElement('img');
//     image.src = item.images[0];
//     image.className ="img"

//     right.append(image)
//     left.append(title)
//    swiperSlide.append(left, right)
//     swiperDiv.append(swiperSlide);
//   })
// }

// FUNCTION
function renderData(products) {
  const sliderTrack = document.getElementById('sliderTrack');
  sliderTrack.innerHTML = ''; 

  products.slice(0, 5).forEach((item) => {
    const slide = document.createElement('div');
    slide.className = 'slide';

    const slideContent = document.createElement('div');
    slideContent.className = 'slide-content';

    const image = document.createElement('img');
    image.src = item.images[0];
    image.className = 'content-img'
    image.style.marginTop = '10px';

    const title = document.createElement('p');
    title.textContent = item.title;
    title.className = 'content-name'

    const bottom = document.createElement('div');
    bottom.className = 'bottom'

    const price = document.createElement('p');
    price.textContent = `$${item.price}`;

    const returnPolicy = document.createElement("p");
    returnPolicy.textContent = item.returnPolicy;


    bottom.append(price, returnPolicy)
    slideContent.append(title, image, bottom);
    slide.appendChild(slideContent);
    sliderTrack.appendChild(slide);
  });
}
fetchData();





// HERO SLIDER
const slides = document.querySelectorAll('.swiper-slide');
let currentIndex0 = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function moveSlider(direction) {
  currentIndex0 = (currentIndex0 + direction + slides.length) % slides.length;
  showSlide(currentIndex0);
  resetAutoSlide();
}

function autoSlide() {
  currentIndex0 = (currentIndex0 + 1) % slides.length;
  showSlide(currentIndex0);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 3000);
}

showSlide(currentIndex0);
autoSlideInterval = setInterval(autoSlide, 5000);






// slider
const track = document.getElementById('sliderTrack');
    const slideWidth = track.children[0].offsetWidth;
    let currentIndex = 0;

    function moveSlide(direction) {
      const maxIndex = track.children.length - 3; // 3 slides per view
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }


