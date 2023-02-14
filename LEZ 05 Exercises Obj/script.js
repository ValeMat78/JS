//primo esercizio
let obj = {
    value: null,
    rest: {
        value2: null,
        rest: {
            value3: null,
            rest: null
        }
    }
};

let obj2 = {
    value: 5,
    rest: {
        value2: 8,
        rest: {
            value3: 4,
            rest: null
        }
    }
};

let arrayObj = [];

function arrayToList(array) {
    obj.value=array[0];
    obj.rest.value2=array[1];
    obj.rest.rest.value3=array[2];

    let jsonString = JSON.stringify(obj);
    console.log(jsonString);
    alert(jsonString);
}

function listToArray() {
    arrayObj.push(obj2.value);
    arrayObj.push(obj2.rest.value2);
    arrayObj.push(obj2.rest.rest.value3);

    console.log(arrayObj);
    alert(arrayObj);

}