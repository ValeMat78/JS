let bikeCatalog = {
  nomeArray: "bikeArray",
  nomeCampoBici: ["name","ruote","colore","bambini"],
  category: [
      bikeCategory = {
          type: "tricicli",
          bikeArray: [
              bike = {
                name: "triciclo1",
                ruote: 3,
                colore: "viola",
                bambini:"si"
              },
              bike = {
                name: "triciclo2",
                ruote: 3,
                colore: "verde",
                bambini:"no"
              },
              bike = {
                name: "triciclo3",
                ruote: 3,
                colore: "verde",
                bambini:"no"
              }
          ]
      },
      bikeCategory = {
          type: "standard",
          bikeArray: [
              bike = {
                name: "standard1",
                ruote: 2,
                colore: "blu",
                bambini:"no",
              },
              bike = {
                name: "standard2",
                ruote: 2,
                colore: "giallo",
                bambini:"no",
              }
          ]
      },
      bikeCategory = {
          type: "tandem",
            bikeArray: [
              bike = {
                  name: "tandem1",
                  ruote: 2,
                  colore: "rosso",
                  bambini: "no",
              },
              bike = {
                name: "tandem2",
                ruote: 2,
                colore: "giallo",
                bambini: "no",
            }
          ]
      }
  ]
}

let row="";
let cell="";
for(let i=0; i<bikeCatalog.category.length; i++){
    row = document.createElement("tr");
    cell = document.createElement("th");
    cell.appendChild(document.createTextNode(bikeCatalog.category[i].type))
    row.appendChild(cell);
    console.log(bikeCatalog.category[i].type);
    for(let y=0; y<bikeCatalog.category[i].bikeArray.length;y++){
        cell = document.createElement("td");
        for(let g=0;g<bikeCatalog.nomeCampoBici.length;g++){
            let val = document.createTextNode(bikeCatalog.nomeCampoBici[g]+": "+bikeCatalog.category[i].bikeArray[y][bikeCatalog.nomeCampoBici[g]]+"\n");
            document.body.style = "white-space: pre;"
            cell.appendChild(val);
            row.appendChild(cell);
        }
        
    }
    document.getElementById("bike_table").appendChild(row);
}