let bikeCatalog = {
  nomeArray: "bikeArray",
  nomeCampoBici: ["name","ruote","colore","bambini","prezzo"],
  category: [
      bikeCategory = {
          type: "tricicli",
          bikeArray: [
              bike = {
                name: "triciclo1",
                ruote: 3,
                colore: "viola",
                bambini:"si",
                prezzo: 25,
              },
              bike = {
                name: "triciclo2",
                ruote: 3,
                colore: "verde",
                bambini:"no",
                prezzo: 20,
              },
              bike = {
                name: "triciclo3",
                ruote: 3,
                colore: "verde",
                bambini:"no",
                prezzo: 20,
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
                prezzo: 30,
              },
              bike = {
                name: "standard2",
                ruote: 2,
                colore: "giallo",
                bambini:"no",
                prezzo: 30,
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
                  prezzo: 35,
              },
              bike = {
                name: "tandem2",
                ruote: 2,
                colore: "giallo",
                bambini: "no",
                prezzo: 35,
            }
          ]
      }
  ]
}

let s="";
for(let i=0; i<bikeCatalog.category.length; i++){
  s=document.createElement("optgroup");
      s.id=bikeCatalog.category[i].type;
      s.label=bikeCatalog.category[i].type;
    for(let y=0; y<bikeCatalog.category[i].bikeArray.length;y++){
      let o=document.createElement("option");
          let name=bikeCatalog.category[i].bikeArray[y].name;
          o.id=name;
          o.value=name;
          o.appendChild(document.createTextNode(name));
          s.appendChild(o);
    }
    document.getElementById("sele").appendChild(s);
}

//multiple
function price(){
  let name=document.getElementById("sele").value
  for(let i=0; i<bikeCatalog.category.length; i++){
      for(let y=0; y<bikeCatalog.category[i].bikeArray.length;y++){
        if(bikeCatalog.category[i].bikeArray[y].name==name){
          let prezzo=bikeCatalog.category[i].bikeArray[y].prezzo;
          let time=document.querySelector('input[name="price"]:checked').value;
          let s="";
          if(time==0.5){
            s="hai scelto "+name+" con un prezzo di "+prezzo+" al giorno per mezza giornata,\nper un totale di "+prezzo*time+" euro";
          }
          else{
            s="hai scelto "+name+" con un prezzo di "+prezzo+" al giorno per "+time+" giorni,\nper un totale di "+prezzo*time+" euro";
          }
          document.getElementById("price").innerText=s;
          
        }
      }
  }
}