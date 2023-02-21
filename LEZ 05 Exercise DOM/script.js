const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];


let raw = document.createElement("tr");
for (let j = 0; j < Object.keys(MOUNTAINS[0]).length; j++) {
  let val = document.createTextNode(Object.keys(MOUNTAINS[0])[j]);
  let cell = document.createElement("th")
  cell.appendChild(val);
  raw.appendChild(cell);
}


document.getElementById("mountains_table").appendChild(raw);
for (let i = 0; i < MOUNTAINS.length; i++) {
  let raw = document.createElement("tr");
  for (let j = 0; j < Object.keys(MOUNTAINS[0]).length; j++) {
      let val = document.createTextNode(MOUNTAINS[i][Object.keys(MOUNTAINS[i])[j]]);
  let cell = document.createElement("td")
  cell.appendChild(val);
  raw.appendChild(cell);
  }
  document.getElementById("mountains_table").appendChild(raw);
}

