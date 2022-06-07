const a=[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]
let text="";
for (let i = 0; i <a.length; i++) {
  text +='<div class="flex">';
  text+=`<span class=${a[i].day} style=height:${a[i].amount}px;></span>`
  text+=`${a[i].day}`
  text+=`</div>`
}
document.getElementById("chart").innerHTML = text;