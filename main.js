'use strict';




     function getNambersOfTrains(){
        return document.getElementById("selectNambersOfTrains").value;
     }
     var NambersOfTrains = +getNambersOfTrains();
     document.getElementById("btn").onclick = getNambersOfTrains();

var cities = ["Київ","Харків","Львів","Одеса","Дніпро"];

var randomCity1 = Math.floor(Math.random() * cities.length);
var randomCity2 = Math.floor(Math.random() * cities.length);
while (randomCity1 == randomCity2) {
    randomCity2 += Math.floor(Math.random() * cities.length);
}


var startCity = cities[randomCity1];
var endCity = cities[randomCity2];

console.log(startCity);
console.log(endCity);

var randomTime = Math.floor(Math.random() * 23);
console.log("randomTime: "+randomTime);

var   distance =[[0,500,600,475,450],
                [500,0,1000,720,220],
                [600,1000,0,800,1025],
                [475,720,800,0,580],
                [450,220,1025,580,0]];

var myDistance =  distance [randomCity1][randomCity2];
console.log("myDistance: "+myDistance);


var day=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

var randomDayNumber = Math.floor(Math.random() * day.length);
var randomDayString = day[randomDayNumber];


var N = cities.length;
var n=2*(N*(N-1)/2);

console.log("max n:" + n);


function trainSpeed(min, max) {
    min=80;
    max=120;
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(trainSpeed() );

var timeMovement =  myDistance / trainSpeed() ^ 0;
console.log(timeMovement);
var timeEnd = timeMovement + randomTime;

if (timeEnd > 23) {
    var nextDay = +randomDayNumber + 1;
    if (nextDay > day.length) {
        nextDay = nextDay - day.length
    }
    timeEnd = day[nextDay] + " :" + (timeEnd - 23);
}

var ticketPrice = Math.ceil((timeMovement * 40.251 ^ 2)*100)/100;


var numberTrain = Math.floor(Math.random() * 100) + 100;

function  characterOfTrain() {
    var  character = "";
    var possible = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

    for ( var i = 0; i < 1; i++ ) {
        character += possible.charAt(Math.floor(Math.random() * possible.length));
        return  character;
    }
}
  console.log( numberTrain +  characterOfTrain() );




// var train = {
//     startDay = day[randomDay],
//     // letter
// }

// document.getElementById("btn").onclick = function() {
    // for (var i = 1; i < 5; i++ ) {

    function generateTrains() {
        var table = document.getElementById('table').children[1];
        var tr = document.createElement("tr");
        table.appendChild(tr);
        console.log('<tr>');
        tr.innerHTML = "<td>" + numberTrain + characterOfTrain() + "</td>"+"<td>" + startCity + "</td>"+
        "<td>" + endCity + "</td>"+"<td>" + randomDayString + "</td>"+"<td>" + randomTime + ":00</td>"+
        "<td>" + timeEnd + ":00</td>"+"<td>" + ticketPrice + "грн</td>" ;
    }
    generateTrains();

    // }
// }

