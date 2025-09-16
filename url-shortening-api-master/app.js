const input = document.querySelector("input");
const form = document.querySelector("form");
const shortenedDiv = document.querySelector(".shortened");

// MOBILE
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

menu.addEventListener('click', () => {
  if (menuOpen == false) {
    navLinks.style.display = "block";
    menuOpen = true;
  }
  else if (menuOpen == true){
    navLinks.style.display = "none"
    menuOpen = false;
  }
})



const shortenedUrls = [];

const token = "5nMe8PIrkubvjXjcWGVQBRMkGc9kPD0XYVhAEOuy0MA4U3LRqNM8m0Dj4ZsM";

async function getShortUrl(longUrl) {
  try {
    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: longUrl,
      }),
    });
    const res = await response.json();
    shortenedUrls.push(res.data);
    render();
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getShortUrl(input.value);
});

function render() {
  shortenedDiv.textContent = ""
  shortenedUrls.map((item,i)=>{
    const shortenedLink = document.createElement("div")
    const link = document.createElement("a")
    link.textContent = item.tiny_url
    const button = document.createElement("button")
    button.textContent = "copy"
    button.addEventListener("click",()=>{
      navigator.clipboard.writeText(item.tiny_url)
      button.textContent = "copied"
    })

    shortenedLink.className = "test"
    shortenedLink.append(link,button)
    shortenedDiv.append(shortenedLink)
  })
}


