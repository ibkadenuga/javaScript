const container = document.querySelector(".container");

async function fetchData() {
  const response = await fetch("data.json");
  const data = await response.json();
  renderData(data);
  return data;
}
fetchData();

// function renderData(data) {
//   container.textContent = " ";
//   data.map((item) => {
//     console.log(item);
//     parent = document.createElement("div");
//     parent.classList = "card";

//     const activity = document.createElement("div");
//     activity.classList = "activity";

//     const top = document.createElement("div");
//     top.className = "top";

//     const title = document.createElement("h3");
//     title.className = "title";
//     title.textContent = item.title;
//     const icon = document.createElement("i");
//     icon.className = "icon";
//     icon.insertAdjacentHTML("beforeend",
//       '<i class="fa-solid fa-ellipsis"></i>'
//     );

//     const timeFrames = document.createElement("div");
//     timeFrames.className = "timeframes";
//     const current = document.createElement("p");
//     current.className = "current";
//     current.textContent = `${item.timeframes.weekly.current}hrs`;
//     const previous = document.createElement("p");
//     previous.className = "previous";
//     previous.textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`;

//     timeFrames.append(current, previous);
//     top.append(title, icon);
//     activity.append(top,timeFrames);
//     parent.append(activity);
//     container.append(parent);
//   });
// }
