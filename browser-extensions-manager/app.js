// Select all the necessary elements from the DOM

const themeBtn = document.querySelector(".theme");
const body = document.querySelector("body");
const icon = document.querySelector("i");
const container = document.querySelector(".extension");
const allBtn = document.querySelector(".all-btn");
const inactiveBtn = document.querySelector(".inactive-btn");
const activeBtn = document.querySelector(".active-btn");

// Function to apply the theme based on localStorage
function theme() {
  const themeValue = localStorage.getItem("theme");

  if (themeValue == "light") {
    body.classList.add("light");
  } else {
    body.classList.remove("light");
  }
}

theme();

// Toggle between dark and light theme on button click
themeBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    localStorage.setItem("theme", "dark");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    body.classList.add("light");
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
    
    localStorage.setItem("theme", "light");
  }
});

// Fetch data from the data.json file
async function fetchData() {
  const response = await fetch("/data.json");
  const data = await response.json();
  renderData(data);
  return data;
}
fetchData();

// Render the data to the page
function renderData(data, currentData) {
  container.textContent = "";
  if (!currentData) {
    currentData = data;
  }
  allBtn.addEventListener("click", () => {
    renderData(currentData);
  });

  // When the active button is clicked, render only the active items
  activeBtn.addEventListener("click", () => {
    const filtered = currentData.filter((item) => item.isActive);
    renderData(filtered, currentData);
  });

  // When the inactive button is clicked, render only the inactive items
  inactiveBtn.addEventListener("click", () => {
    const filtered = currentData.filter((item) => !item.isActive);
    renderData(filtered, currentData);
  });

  // Map over the data and create the elements for each item
  data.map((item, index) => {
    console.log(item.logo);
    //Create the parent div
    const parent = document.createElement("div");
    parent.className = "list";

    //Create the top section
    const top = document.createElement("div");
    top.className = "top";
    //Create the logo
    const logo = document.createElement("img");
    logo.className = "logo";
    logo.src = item.logo;

    //Create the title section
    const titleSect = document.createElement("div");
    titleSect.className = "top-1";
    //Create the name
    const name = document.createElement("h1");
    name.className = "name";
    name.textContent = item.name;

    //Create the description
    const description = document.createElement("p");
    description.className = "description";
    description.textContent = item.description;

    //Append the name and description to the title section
    titleSect.append(name, description);
    //Append the logo and title section to the top section
    top.append(logo, titleSect);
    //Create the bottom section
    const bottom = document.createElement("div");
    bottom.className = "bottom";

    //Create the delete button
    const delbtn = document.createElement("button");
    delbtn.textContent = "Remove";

    //When the delete button is clicked, remove the item from the data
    delbtn.addEventListener("click", () => {
      const filtered = currentData.filter((item, i) => i != index);
      renderData(filtered, filtered);
    });

    //Create the active toggle
    const toggleBtn = document.createElement("div");
    //If the item is active, give it the active class
    if (item.isActive) {
      toggleBtn.className = "active";
    } else {
      //If the item is inactive, give it the inactive class
      toggleBtn.className = "inactive";
    }

    //When the toggle button is clicked, toggle the active state of the item
    toggleBtn.addEventListener("click", () => {
      const updated = currentData.map((item, i) => {
        if (i == index) {
          return { ...item, isActive: !item.isActive };
        } else {
          return item;
        }
      });
      renderData(updated, updated);
    });

    //Append the delete button and toggle button to the bottom section
    bottom.append(delbtn, toggleBtn);
    //Append the top and bottom sections to the parent div
    parent.append(top, bottom);
    //Append the parent div to the container
    container.append(parent);
  });
}

//fetch = data
// data is mapped
// in each item we create elements
// we pass the elements into extension div
