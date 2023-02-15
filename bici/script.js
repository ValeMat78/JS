let bikeCatalog = {
    text: "A full day is between 8am-5pm (open business hours) or a full 24 hour term.",
    struttura: ["type", "priceHalfDay", "priceFullDay", "priceFourDay", "priceWeek", "extra"],
    nomeArray: "bikeArray",
    nomeCampoBici: "name",
    category: [
        bikeCategory = {
            type: "electric",
            priceHalfDay: 60,
            priceFullDay: 85,
            priceFourDay: 250,
            priceWeek: 350,
            bikeArray: [
                bike = {
                    name: "Rad Rover"
                },
                bike = {
                    name: "Rad Rover Step-thru"
                },
                bike = {
                    name: "Rad City Step-over"
                },
                bike = {
                    name: "Rad City Step-thru"
                },
                bike = {
                    name: "Rad Runner"
                },
                bike = {
                    name: "Rad Mini Step-thru"
                }
            ]
        },
        bikeCategory = {
            type: "standard pedal",
            priceHalfDay: 25,
            priceFullDay: 35,
            priceFourDay: 80,
            priceWeek: 130,
            bikeArray: [
                bike = {
                    name: "7 Speed Cruiser"
                },
                bike = {
                    name: "7 Speed Step-Thru Cruiser"
                },
                bike = {
                    name: "Hybrid"
                },
                bike = {
                    name: "Hybrid Step-thru"
                }
            ]
        },
        bikeCategory = {
            type: "premium",
            priceHalfDay: 70,
            priceFullDay: 90,
            priceFourDay: 195,
            priceWeek: 225,
            extra: "Our bikes are equipped with standard pedals, you may bring in your own pedals you wish. Please be advised there is a nominal charge of $10.00 for this. The reason for the charge is that we have had many guests ruin the crank arms by stripping them, therefore it became a policy that we must do it in house.",
            bikeArray: [
                bike = {
                    name: "Premium Road Bike"
                }
            ]
        },
        bikeCategory = {
            type: "kids",
            priceHalfDay: 20,
            priceFullDay: 25,
            priceFourDay: 70,
            priceWeek: 100,
            extra: "CHILDREN MUST BE ACCOMPANIED BY A PARENT OR GUARDIAN. \n\t" + "Kid’s rates will be applied only if the child is assigned a kid’s bike 20” wheel size and under. Anything above a 20” wheel size is considered a small adult bike and will be priced accordingly.",
            bikeArray: [
                bike = {
                    name: "Kid’s Step-over Bike"
                },
                bike = {
                    name: "Kid’s Step-thru Bike"
                }
            ]
        },
        bikeCategory = {
            type: "add on",
            priceHalfDay: 25,
            priceFullDay: 35,
            priceFourDay: 80,
            priceWeek: 130,
            bikeArray: [
                bike = {
                    name: "Child seat add-on"
                },
                bike = {
                    name: "Child carrier/trailer add-on"
                }
            ]
        }
    ]
}
function toJSON() {
    return JSON.stringify(bikeCatalog);
}
function inserisciJSON(jsonString) {
    bikeCatalog = JSON.parse(jsonString);
    console.log("caricamento avvenuto con successo tramite JSON");
}

function stampa() {
    let s = "";
    if (confirm("vuoi stampare in JSON? premere annulla per stampare un elenco")) {
        console.log(toJSON());
    } else {
        s += bikeCatalog.text + "\n";
        for (let tipoBici of Object.keys(bikeCatalog.category)) {
            let tmp = bikeCatalog.category[tipoBici];
            s += tmp[bikeCatalog.struttura[0]].toUpperCase() + "\n";
            for (let i = 1; i < Object.keys(tmp).length - 1; i++) {
                s += "\t" + bikeCatalog.struttura[i] + " : " + tmp[bikeCatalog.struttura[i]] + "\n";
            }
            s += "\t" + bikeCatalog.nomeArray + " :\n";
            for (let bici of Object.keys(tmp[bikeCatalog.nomeArray])) {
                s += "\t\t" + bikeCatalog.nomeCampoBici + " : " + tmp[bikeCatalog.nomeArray][bici][bikeCatalog.nomeCampoBici] + "\n";
            }
        }
    }
    console.log(s);
}

function aggiungi(nome, category) {
    let controllo = false;
    let i = 0;
    let bike;
    do {
        if (bikeCatalog.category[i][bikeCatalog.struttura[0]] == category) {
            controllo = true;
        } else {
            i++;
        }
    } while (i < Object.keys(bikeCatalog.category) && controllo == false)
    if (controllo == true) {
        bike = {
            name: nome
        }
        bikeCatalog.category[i][bikeCatalog.nomeArray].push(bike);
        console.log("caricamento avvenuto con successo in una categoria già esistente");
        console.log(bikeCatalog.category[i][bikeCatalog.nomeArray])
        return true;
    } else {
        return false;
    }
}
function aggiungiECrea(nome, category, nPriceHalfDay, nPriceFullDay, nPriceFourDay, nPriceWeek, nExtra) {
    if (nExtra == "") {
        let bikeCategory = {
            type: category,
            priceHalfDay: nPriceHalfDay,
            priceFullDay: nPriceFullDay,
            priceFourDay: nPriceFourDay,
            priceWeek: nPriceWeek,
            bikeArray: [
                bike = {
                    name: nome
                }
            ]
        };
        bikeCatalog.category.push(bikeCategory);
    }else{
        let bikeCategory = {
            type: category,
            priceHalfDay: nPriceHalfDay,
            priceFullDay: nPriceFullDay,
            priceFourDay: nPriceFourDay,
            priceWeek: nPriceWeek,
            extra: nExtra,
            bikeArray: [
                bike = {
                    name: nome
                }
            ]
        };
        bikeCatalog.category.push(bikeCategory);
    }
    console.log("caricamento avvenuto con successo in una nuova categoria");

}
function inserisci() {
    if (confirm("vuoi inserire tramite JSON? premere annulla per l'inserimento manuale")) {
        inserisciJSON(prompt("inserire il codice JSON"));
    } else {
        let name = prompt("inserire il nome della bici da aggiungere");
        let category = prompt("inserire la categoria della bici da aggiungere");
        if (aggiungi(name, category) == false) {
            let priceHalfDay = parseInt(prompt("inserire il prezzo per mezza giornata (max 4 h)"));
            let priceFullDay = parseInt(prompt("inserire il prezzo per un giorno"));
            let priceFourDay = parseInt(prompt("inserire il prezzo per 4 giorni"));
            let priceWeek = parseInt(prompt("inserire il prezzo per una settimana"));
            let extra = prompt("inserire precisazioni");
            aggiungiECrea(name, category, priceHalfDay, priceFullDay, priceFourDay, priceWeek, extra);
        }
    }
}

