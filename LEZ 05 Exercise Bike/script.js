let bikeCatalog = {
    categoryArray: [ {
        categoryBike1: {
            name : "tricicli",
            bikesArray: [{
                bike1:{
                    marca: "marca1",
                    ruote: 3,
                    colore: "viola",
                    bambini:"si",
                },
                bike2:{
                    marca: "marca2",
                    ruote: 3,
                    colore: "verde",
                    bambini:"no",
                }
            }]
        },

        categoryBike2:{
            name : "monocicli",
            bikesArray: [{
                bike1:{
                    marca: "marca1",
                    ruote: 1,
                    colore: "blu",
                    bambini:"no",
                },
                bike2:{
                    marca: "marca2",
                    ruote: 1,
                    colore: "giallo",
                    bambini:"no",
                }
            }]
        }
    }
    ]
};


function stamp() {
    let jsonString = JSON.stringify(bikeCatalog, null, 2);
    console.log(jsonString);
    alert(jsonString);
}

function add(){
    let string ={bike3:{marca:"marca3",ruote:1, colore:"arancione", bambini:"no"}}
  
    stamp();
}