const chart = document.querySelector(".barchart");

async function fetchData() {
  const res = await fetch("./data.json");
  const data = await res.json();
  renderData(data);
}

function renderData(data) {
  chart.textContent = " ";
  let highest = 0;
  
  for(i = 0;i < data.length;i++){
    if(data[i].amount >= highest){
        highest = data[i].amount
    }
  }


  data.map((item) => {
    const day = document.createElement("div");
    day.className = "day";
    const bar = document.createElement("div");
    const value = document.createElement("div");
    value.className = "value";
    bar.className = "bar";
    const barHeight = (item.amount / 80) * 100;
    if(item.amount == highest){
        value.classList.add("highest")
    }
    value.style.height = `${barHeight}%`;
    const name = document.createElement("span");
    name.textContent = item.day;
    bar.append(value);
    day.append(bar, name);
    chart.append(day);
  });
}

fetchData();
