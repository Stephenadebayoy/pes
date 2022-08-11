var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// let myName = "mike";
// console.log(myName);

// let js= "amazing";
// if(js === "amazing") alert ("javascript is fun!!");

// 40 + 8 + 23 -10;
//  console.log(40 + 8 + 23 -20 );

//  let met = "amazing";
// console.log(met);
//  console.log(6 + 5)

//  let javascriptIsFun = true;
//   console.log(javascriptIsFun)

// const now = 2028;
// const ageMike = now - 1997;
// const agePeter = now - 2018;
// console.log(ageMike, agePeter);

// console.log(ageMike );

// const firstName = "Michael";
//  const job = "Biologist";
//  const birthYear = 1996
//  const currentYear = 2022;
//  const michael = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old "+ job  + "!";
//  console.log(michael)

// const michaelNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
// console.log(michaelNew);
// const age = 18;
// const isOldEnough = age >= 17;
// if(isOldEnough)
// {console.log(`You can't start registration 👌`)}
//     // or
// const ages = 12;
// if (ages >= 17)
// {console.log(`You can start registration 👌`);}
// else{
//     const yearsLeft = 17 - ages;
//     console.log(` Not approved please wait till ${yearsLeft} years errors!!!`)
// }

// const cucumber = 25000;
// const apple = 18000;
// const totalPrice = 43000;
// if (totalPrice >= cucumber + apple){
//     console.log(`Their is an equality of price accumulation`)
// }
// else{
//     console.log(`Their is no price equality`)
//  }
//  const inputYear = "1991";
//  console.log(Number(inputYear) + 3);
//  console.log(String("23"))

// console.log(String(23), 3);
// console.log(String(23) + String(3));
// console.log(`23` - `10` -`3`);
// console.log(`23` / "3");

// const money = 3 - 3;
// if (money){
//     console.log("don't spend it all");
// }
// else{
//     console.log("you should get a job");
// }
// const money = 3;
// if (money){
//     console.log("don't spend it all");
// }
// else{
//     console.log("you should get a job");
// }

// const favourite = prompt("What's your favourite number?");
// console.log(favourite)
// console.log(typeof favourite)
// if (favourite == 23) {
//     console.log(`cool number i love it`)
// }

// if (favourite === 23) {
//         console.log(`cool number i love it`)
//     } else if (favourite === 8){
//         console.log(`8 is a cool number`)
//     } else{
//         console.log(`both is not cool number `)
//     }

// const favourite = Number(prompt("What's your favourite number?"));

//     if (favourite === 23) {
//         console.log(`cool number i love it`)
//     } else if (favourite === 8){
//         console.log(`8 is a cool number`)
//     } else{
//         console.log(`both is not cool number `)
//     }
//     if(favourite !== 23) console.log("why not 23?");

// const hasMoney = true;
// const hasGold = false ;
// console.log(hasMoney && hasGold);
// console.log(hasMoney || hasGold);
// console.log(!hasMoney)

// if(hasMoney && hasGold){
//     console.log(`i am happy`);
// }else{ console.log (`i need finance `)

// }
// if(hasMoney || hasGold){
//     console.log(`i am happy`);
// }else{ console.log (`i need finance `)

// }
// const amTired = true;
// console.log( hasMoney && hasGold && !amTired)
// if(hasMoney && hasGold && !amTired){
//     console.log(`i am happy`);
// }else{ console.log (`i need finance `)
// }

// const dolphins = (96 + 108 + 89) / 3;
// const koalas =(88 + 91 + 110) / 3;
// console.log(dolphins, koalas);

// if (dolphins > koalas){
//     console.log(`dolphins win the trophy`);
// } else if (koalas > dolphins){
//     console.log(`koalas win the trophy`) }
// else if (dolphins === koalas){
//     console.log(`both win the trophy`)
// }

// const dolphins = (97 + 112 + 101) / 3;
// const koalas =(109 + 95 + 106) / 3;
// console.log(dolphins, koalas);

// if (dolphins > koalas && dolphins >= 100){
//     console.log(`dolphins win the trophy`);
// } else if (koalas > dolphins && koalas >= 100){
//     console.log(`koalas win the trophy`) }
// else if (dolphins === koalas){
//     console.log(`both win the trophy`)
// }

// const dolphins = (97 + 112 + 81) / 3;
// const koalas =(109 + 95 + 86) / 3;
// console.log(dolphins, koalas);

// if (dolphins > koalas && dolphins >= 100){
//     console.log(`dolphins win the trophy`);
// } else if (koalas > dolphins && koalas >= 100){
//     console.log(`koalas win the trophy`) }
// else if (dolphins === koalas && dolphins >= 100 && koalas >= 100){
//     console.log(`both win the trophy`)
// }else {
//     console.log("No one win the trophy")
// }

// const dolphins = (97 + 112 + 101) / 3;
// const koalas =(109 + 95 + 106) / 3;
// console.log(dolphins, koalas);

// if (dolphins > koalas && dolphins >= 100){
//     console.log(`dolphins win the trophy`);
// } else if (koalas > dolphins && koalas >= 100){
//     console.log(`koalas win the trophy`) }
// else if (dolphins === koalas && dolphins >= 100 && koalas >= 100){
//     console.log(`both win the trophy`)
// }else {
//     console.log("No one win the trophy")
// }

// const day = "monday";

// switch (day) {
//     case "monday":
//             console.log("Plan course structure");
//             console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//             console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case " thursday":
//             console.log("write code examples");
//         break;
//     case "friday":
//             console.log("record videos");
//         break;
//     case "saturday":
//     case "sunday":
//             console.log("enjoy the weekend :D");
//         break;
//     default:
//         console.log("not a valid day!");
// }

//         if (day === "monday"){
//             console.log("Plan course structure");
//             console.log("Go to coding meetup")
//         } else if (day === "tuesday"){
//             console.log("Prepare theory videos")
//         }else if (day === "wednesday" || day === "thursday"){
//             console.log("write code examples");
//         } else if (day === "friday"){
//             console.log("record videos");
//         } else if (day === "saturday" || day === "sunday"){
//             console.log("enjoy the weekend :D")
//         } else {
//             console.log("not a valid day!");
//         }

//         // expression and statement

//     // expression produce a value
//     3 + 4
//     1991
//     true && false && !false

//     // statement doesnt produce a value
//     if (23 > 10)  {
//         const str = "23 is bigger";
//     }
//     const me = "stephen"
//     console.log (`i'm ${2037 - 1991 } years old ${me} `)

//     // conditional operator
//     const age = 23;
//     age >= 18 ? console.log(`i like to drink wine`) :
//     console.log(`i like to drink waters`);

//     const sabbath = "tueday";
//     sabbath === "sunday" ? console.log(`i like to drink wine`) :
//     console.log(`i like to drink waters`);

//     const drink = age >= 20 ? `wine` : `water`;
//     console.log(drink)

//     let drink2;
//     if(age >= 20){
//         drink2 = `wine`
//     } else{
//         drink2 = `water`;
//     }
//     console.log(drink2);
//     console.log(` i like to drink ${age >= 20 ? `wine` : `water`} `)

//     const bill = 275
//     const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
//     console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

//     let numbe = 2;
//     let result = ++numbe ;
//     console.log(result) ;

//     let numb = 5;
//     let ans = numb++ ;
//     if( result >= numb){
//         console.log(`excellent result`)
//     }
//     else if( result === 20 || !3){
//         console.log(`fair result`)
//     }
//     else( console.log(`poor result`))

// const totalDressAmount = 5000;
// let bosser = 3500;
// let singlet = 1500;
// if (totalDressAmount === (bosser + singlet + 300 )){
//    console.log(`same amount all spend in the market `);
// }else if (totalDressAmount < (bosser + singlet + 300)){
//     console.log(`Not same amount i added ${50 + totalDressAmount - (bosser + singlet - 300 )} `)
// }
// else( console.log(`still hav change with me `));

//  variable count length

// var tweet = prompt("compose your message:");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining. ");

// var firstName = "Ada";
// firstLetter = firstName[0]
// console.log(firstLetter)
// console.log(firstName[1])

// var secondName = firstName [firstName.length - 2];
// console.log(secondName)

// to change Array

// var myArray = [10,20,30];
// myArray[1] = 15;
// console.log(myArray)

// var me = [10,20,30,40]
// myFirst = me[3]
// console.log(myFirst)

//             not gotten
// var ourName = [[1,2,3], [4,5,6] [7,8,9] [[10,11,12], 13, 14]];

// var myData = ourName[2][1];
// console.log(myData);

//         push
// var mArray = ["stephen", "j", "cat"];
// mArray.push("happy", "love");
// console.log(mArray);

// var meArray = [["stephen", 23], ["cat", 2]];
// meArray.push(["dog", 3]);
// console.log(meArray);

//     pop
// var fruits = ["banana", "apple","mango"]
// fruits.pop()
// console.log(fruits);

// var numbers = [1,2,3,4];
// numbers.pop()
// console.log(numbers)

//     shift
// var fruits = ["banana", "apple","mango"]
// fruits.shift()
// console.log(fruits)
//         // unshift
// var fruits = ["banana", "apple","mango"]
// fruits.shift()
// fruits.unshift("orange")
// console.log(fruits);

// var meArray = [["stephen", 23], ["cat", 2]];
// meArray.shift;
// meArray.unshift(["dog", 3])
// console.log(meArray);

// function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
//     var result = ""
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
//     return result;
// }console.log(wordBlanks("dog", "big", "ran", "quickly"))
// console.log(wordBlanks.length)

// function greetings(){
//     console.log("hey, steve")
// } greetings()

// function local(){
//     var local = 5;
//     console.log(local)
// } local()

// function numbers(a, b){
//     console.log(a - b)
// } numbers(10,6)

// var myGlobal = 10;
// function fun1(){
//      oopsGlobal = 5;
// }

// function fun2(){
//     var output = " ";
//     if (typeof myGlobal != "undefined"){
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined"){
//         output += " oopsGlobal: " + oopsGlobal
//     }
//     console.log(output)
// }
// fun1()
// fun2()

// var outerWear = "T-shirt";
// function myOutfit(){
//     var outerWear = "sweater";

//     return outerWear;
// } console.log(myOutfit())
// console.log(outerWear)

// not understtod yet

// function nextInline (arr, item){
//     arr.push(item);
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr));
//  console.log(nextInline(testArr, 6));
//  console.log("After: " + JSON.stringify(testArr));

//  function testLogicAnd(val) {
//      if (val <= 50 && val <= 25){
//          return "Yes";
//      }
//       return "No"
//  }
//     console.log(testLogicAnd(10))

//     function testLogicAnd(val) {
//         if (val <= 50 || val >= 25){
//             return "Yes";
//         }
//          return "No"
//     }
//        console.log(testLogicAnd(10))

// function testSize(balls){
//     if(balls < 5){
//         return "tiny";
//     } else if (balls < 10){
//         return "Small";
//     } else if (balls < 15){
//         return "Medium"
//     }else if (balls < 20){
//         return "Large";
//     }else{
//         return "Huge"
//     }
// }
//     console.log(testSize(7))

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Double Bogey", "Go home"]
// function golfScore(par, strokes) {
//     if (strokes == 1){
//         return "Hole-in-one!";
//     }else if ( strokes <= par - 2){
//         return "Eagle";
//     } else if ( strokes == par - 1){
//         return "Birdie";
//     } else if ( strokes == par){
//         return "Par";
//     } else if  ( strokes == par + 1){
//         return "Bogey";
//     }else if  ( strokes == par + 2){
//         return "Double Bogey";
//     }else if  ( strokes >= par + 3){
//         return "Go Home!";
//     }
// }
// console.log(golfScore(5, 4))

// also the same using array

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Double Bogey", "Go home"]
// function golfScore(par, strokes) {
//     if (strokes == 1){
//         return names[0];
//     }else if ( strokes <= par - 2){
//         return names[1];
//     } else if ( strokes == par - 1){
//         return names[2];
//     } else if ( strokes == par){
//         return names[3];
//     } else if  ( strokes == par + 1){
//         return names[4];
//     }else if  ( strokes == par + 2){
//         return names[5];
//     }else if  ( strokes >= par + 3){
//         return names[6];
//     }
// }
// console.log(golfScore(5, 3))

// instead of long else if statement i can use switch

// function caseSwitch(val){
//     var answer = "";
//     switch(val){
//         case 1:
//             answer = "alpha";
//             break;
//         case 2 :
//             answer = "Beta";
//             break;
//         case 3 :
//             answer = "gamma";
//             break;
//         case 4 :
//             answer = "delta";
//             break;

//     }
//     return answer;
// }
//     console.log(caseSwitch(1));

// for default statement

// function caseSwitch(val){
//     var answer = "";
//     switch(val){
//         case 1:
//             answer = "alpha";
//             break;
//         case 2 :
//             answer = "Beta";
//             break;
//         case 3 :
//             answer = "gamma";
//             break;
//         case 4 :
//             answer = "delta";
//             break;
//         default:
//             answer = "curse";
//             break

//     }
//     return answer;
// }
//     console.log(caseSwitch(4));

// function caseSwitch(val){
//     var answer = "";
//     switch(val){
//         case 1:
//         case 2:
//         case 3:
//             answer = "fail";
//             break;
//         case 4:
//         case 5:
//             answer = "pass";
//             break;
//         case 6:
//             answer = "third class";
//             break;
//         case 7:
//         case 8:
//         case 10:
//             answer = "second class lower";
//             break;
//         default:
//             answer = "second class upper";
//             break

//     }
//     return answer;
// }
//     console.log(caseSwitch(5));

// function isOldEnough (a, b){
//     return a < b;
// } console.log(isOldEnough(10, 15))

//     function isOldEnough (a, b){
//         if (a < 0 || b < 0) {
//         return undefined
//     }

//         return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
//         console.log(isOldEnough(3, 2))

// var count = 0;

// function cc(card) {
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }

//     var holdbet = 'Hold'
//     if (count > 0) {
//         holdbet = 'Bet';
//     }

//     return count + " " +  holdbet
// }
//     cc(2); cc(3); cc(4); cc('K'); cc('A');
//     console.log(cc(7))

// var testobj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };

// var hatValue = testobj.hat;
// var shirtValue = testobj.shirt

// console.log(hatValue)

// var testobj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };
// var playerNumber = 16;
// var player = testobj[playerNumber];

// console.log(playerNumber)
// console.log(player);

// to change to a new value or add to it

// var myDog ={
//     "name": "coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// }
// myDog.name = "Good coder";
// console.log(myDog.name)
// myDog.legs = 2 + 3
// console.log( myDog.legs)

// adding properties to obejcet

//  var myDog ={
//      "name": "coder",
//    "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// }
// myDog["bark"] = "woof!!!";
// console.log(myDog["bark"])

// to delete a Object

// var myDog ={
//     "name": "coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "bow-bow",
// }
// delete myDog.bark;
// console.log(myDog.bark)

// we can use object for switch cases like a dictionary

// function caseSwitch(val){
//        var answer = "";

//        var switchBotton = {
//             1: "alpha",
//             2: "Beta",
//             3: "gamma",
//             4: "delta",
//             default: "curse"

//        };
//        answer = switchBotton[val];
//        return answer

// }
// console.log(caseSwitch(3))

// switch(val){
//     case 1:
//         answer = "alpha";
//         break;
//     case 2 :
//         answer = "Beta";
//         break;
//     case 3 :
//         answer = "gamma";
//         break;
//     case 4 :
//         answer = "delta";
//         break;
//     default:
//         answer = "curse";
//         break

// }

// testing object for properties if it their
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };

// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty (checkProp)){
//         return myObj[checkProp];
// } else {
//     return "Not found"
// }
// }
// console.log(checkObj("gift"));

// not understandable

// var myMusic = [
//     {
//         "artist": "Billy Jael",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP"
//         ],
//         "gold" : true
//     },

//     {
//         "artist": "dyey Jael",
//         "title": "Cereal Man",
//         "release_year": 2003,
//         "formats": [
//             "youtube"
//         ]
//     }
// ]
// console.log(myMusic("artist"))

// var myStorage = {
//     "car":{
//         "inside":{
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents)

// var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tuilp",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];

// var secondTree = myPlants[1].list[1];
// console.log (secondTree)

// not understandable
// var collection = {
//     "2548":{
//         "album": "Slippery When Wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let it Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468":{
//         "album": "1999",
//         "artist": "Prince",
//         "tracks":[
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist": "Robert Palmer",
//         "tracks":[ ]
//     },
//     "5439":{
//         "album": "ABBA Gold"
//     }
// };

// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {
//     if (value === ""){
//         delete collection[id] [prop];
//     } else if (prop === "tracks") {
//         collection[id] [prop] = collection[id] [prop] || [];
//         collection[id] [prop] .push(value);
//     }else{
//         collection[id] [prop] = value;
//     }
//     return collection;
// }

// console.log(updateRecords(5439,"artist", "ABBA"));

// const friends = ['Michael', 'Steven', 'Peter']
// friends[2] = 'Jay';
// console.log (friends)

// console.log(friends[friends.length - 1])

// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3);

// Loops now

// var ourArray = [];
// for (var i = 0; i < 5; i++) {
//     ourArray.push(i);
// } console.log(ourArray)

// var ourArray = [];
// for (var i = 1; i < 7; i++) {
//     ourArray.push(i);
// } console.log(ourArray)

// var ourArray = [];
// for (var i = 0; i < 10; i +=2) {
//     ourArray.push(i);
// } console.log(ourArray)

// var ourArray = [];
// for (var i = 1; i < 10; i +=2) {
//     ourArray.push(i);
// } console.log(ourArray)
// backward count
// var ourArray = [];
// for (var i = 10; i > 0; i -= 2) {
//     ourArray.push(i);
// } console.log(ourArray)

// var ourArray = [];
// for (var i = 9; i > 0; i -= 2) {
//     ourArray.push(i);
// } console.log(ourArray)

// var ourArray = [9, 10, 11, 12];
// var total = 0;

// for (var i = 0; i < ourArray.length; i++){
//     total += ourArray[i]
// }
// console.log(total)

// function multiplyAll(ourArray) {
//     var product = 1;

//     for (var i = 0; i < ourArray.length; i++) {
//         for (var j=0 ; j < ourArray[i].length; j++){
//             product *= ourArray[i][j]
//         }
//     }
//     return product;
// }
// var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

// console.log(product);

// function fruitProcessor(apples, oranges){
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice ;
// }
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function myName () {
//     console.log ("my name is steve");
// }
// myName();

// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);
// or
// function calcAge1(birthYear) {
//     const myAge = `My age is ${birthYear} years old `;
//     return myAge;
// }
// const age = calcAge1(2036 - 1996)
// console.log(age)
// or
// const calcAge1 = function(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

//                 // arrow function
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = birthYear =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age ;
//     return retirement ;
// }
// console.log (yearsUntil Retirement(1991));

//     const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age ;
//     return `${firstName} retires in ${retirement} years` ;
// }
// console.log (yearsUntilRetirement(1991, 'jonas'));
// console.log (yearsUntilRetirement(1980, 'bob'));

// expression function
// const yearsUntilRetirement = function(birthYear){
//     const age = 2037 - birthYear;
//     const retirement = 65 - age ;
//     return retirement;
// }
// const age1 = yearsUntilRetirement(1991);
// console.log(age1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5))

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)
// console.log(scoreDolphins, scoreKoalas)

// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = 2037 - birthYear;
//     const retirement = 65 - age ;
//     return `${firstName} retires in ${retirement} years` ;
// }
// const retirementAge = yearsUntilRetirement(1991, 'Stephen');
// console.log(retirementAge);

// function cutPieces (fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutPieces(apples);
//     const orangesPieces = cutPieces(oranges);
//     const juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges.`;
//     return juice ;
// }
// const allCut = (fruitProcessor(3, 4));
// console.log(allCut)

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// const yearsRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log (`${firstName} retired in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }
// console.log(yearsRetirement(1991, "stephen"))
// console.log(yearsRetirement(1950, 'stephen'));

// Array
/* const friends = ['Michael', 'Steven', 'Peter']
            friends[2] = 'Jay';
            console.log (friends)
            
            console.log(friends[friends.length - 1])
            
            
            const calcAge = function(birthYear) {
                return 2037 - birthYear
            }
            const years = [1990, 1967, 2002, 2010, 2018];
            
            const age1 = calcAge(years[0])
            const age2 = calcAge(years[1])
            const age3 = calcAge(years[years.length - 1])
            console.log(age1, age2, age3);

        const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
        console.log(ages)

            const y = ['bob', 'steve', 'mike']
            y.push('jay');
            y.push(23)
            console.log(y)
            console.log(y.includes('bob'))
            console.log(y.includes('bit'))
            console.log(y.includes('23'))
            console.log(y.includes(23))

            if (y.includes('jay')) {
                console.log('You have a new friend')
            }
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1])
, calcTip(bills[2])]

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals)
console.log (bills, tips)

const x = {
    firstName: 'Jonas',
    lastName: 'Steve',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Kali',]
};
 let newFrd = x.friends.push('Israel')
console.log(x.friends)
console.log(x.friends[1])
console.log(`My name is ${x.friends[1]} ${x['lastName']} , i am a ${x.job} and ${x.age} years old `)

const interestedIn = prompt('What do you want to know about x? Choose between firstName, LastName, age, job, and friends');
if (x[interestedIn]){
console.log(x[interestedIn]);
} else {
    console.log('Error request !!! Please Choose between firstName, LastName, age, job, and friends');
}*/

// x.location = 'Portugal';
// x['instagram'] = '@i_am_stephanos'
// console.log(x)
// console.log(`${x.firstName} has ${x.friends.length - 1} friends, and his best friend is called ${x.friends[0]}`)

// const x = {
//     firstName: 'Jonas',
//     lastName: 'Steve',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Kali',],
//     hasDriversLicense: true,

//     calcAge: function(birthYear) {
//         return 2037 - birthYear;
//     }
// };

// console.log(x.calcAge(1991))
// console.log(x['calcAge'](1991))

// const x = {
//     firstName: 'Jonas',
//     lastName: 'Steve',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Kali',],
//     hasDriversLicense: true,

//     calcAge: function() {
//         return this.age;

//     }
// };

// console.log(x.calcAge(x.age))
// console.log(x['calcAge'](1991))

// another method
// const x = {
//     firstName: 'Jonas',
//     lastName: 'Steve',
//     ageYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Kali',],
//     hasDriversLicense: true,

//     calcAge: function() {
//         console.log(this)
//         return 2037 - this.ageYear;
//     }
// };

// console.log(x.calcAge(x.ageYear))

// const k = {
//   firstName: "Jonas",
//   lastName: "Steve",
//   ageYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Kali"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.ageYear = 2037 - this.ageYear;
//     return this.ageYear;
//   },
// };

// console.log(k.calcAge());
// console.log(k.ageYear);
// console.log(k.ageYear);
// console.log(k.ageYear);

// console.log(`${x.firstName} is a ${(2037 - x.calcAge())} year old ${x.job}, and he has ${x.hasDriversLicense ? 'a' : 'no'} driver's License.`)

// get summary another style

// const x = {
//   firstName: "Jonas",
//   lastName: "Steve",
//   ageYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Kali"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.ageYear = 2037 - this.ageYear;
//     return this.ageYear;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };
// console.log(x.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };
// console.log(mark.calcBMI());
// console.log(john.calcBMI());
// // console.log(`${mark.fullName} BMI (${mark.BMI}) is higher than ${john.fullName} (${john.BMI}) `)

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
//   );
// } else if (john.calcBMI() > mark.calcBMI()) {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`
//   );
// }

// loop instead of console.log repetition .
// for(let rep = 5; rep <= 10; rep++){
//     console.log (`I am clever ${rep} ${typeof rep}`)
// }

const y = [
  "jonas",
  "steve",
  2037 - 1991,
  "teacher",
  ["Michael", "peter", "steven"],
  true,
  24,
];
const types = [];
for (let i = 0; i < y.length; i++) {
  console.log(y[i], typeof y[i]);
}

//         // to get the type of each one
//         // types[i] = typeof y[i] or
//         types.push(typeof y[i])
//     }
//     console.log(types)

//     const years = [1991, 2007, 1969, 2020];
//     const ages = [];

//     for (let i = 0; i < years.length; i++) {
//         ages.push(2037 - years[i], typeof years[i]);
//     }
//     console.log(ages)

//     // continue and break statement
//     for(let i = 0; i < y.length ; i++) {
//         if (typeof y[i] !== 'string') continue;

//         console.log(y[i], typeof y[i]);
//     }

//     for(let i = 0; i < y.length ; i++) {
//         if (typeof y[i] === 'number') break;

//         console.log(y[i], typeof y[i]);
//     }

// how to reverse a string
// var str = "sample string";
// var arr = str.split(" ");

// arr.reverse();
// str = arr.join(" ");

// console.log(str);

// // reverse letter
// function wordreverse(strings) {
//   return strings.split("").reverse().join("");
// }
// console.log(wordreverse(`Welcome to this javascript Guide!`));
// // how to empty an array
// var numebr = [3, 5, 8, "bed", true];
// // numebr = [];
// // console.log(numebr);
// numebr.length = 0;
// numebr.push("I love myself");
// console.log(numebr);

// const y = [
//   "jonas",
//   "steve",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "peter", "steven"],
// ];

// // for(let i = y.length - 1; i >= 0; i--) {
// //     console.log(i, y[i], typeof y[i])
// // }

// // for (let exercise = 1; exercise < 4; exercise++) {
// //     console.log(`-------- Starting exercise ${exercise}`)

// //     for(let rep = 1; rep < 3; rep++){
// //         console.log(`I am clever ${rep}😎`)
// //     }
// //     for(let rep = 1; rep < 3; rep++){
// //         console.log(`Please ${exercise}:if you dont get it ${rep}.😴`)
// //     }
// // }
// //         // while loop
// // for (let rep = 1; rep <= 10; rep++) {
// //         console.log(`-------- Starting exercise ${rep}`)
// // }

// // let rep = 1;
// // while(rep <= 10) {
// //     console.log(`please for God sake ${rep}`);
// //     rep++

// // }

// // let dice = Math.trunc(Math.random() * 6) + 1
// // while(dice !== 6){
// //     console.log (`you rolled a ${dice}`)
// //     dice = Math.trunc(Math.random() * 6) + 1
// //     if (dice === 6) console.log (`loop is about to end `)
// // }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 276, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverag = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   // console.log(sum);
//   return sum / arr.length;
// };
// console.log(calcAverag([2, 3, 7]));
// console.log(calcAverag(totals));
// console.log(calcAverag(tips));

// declaration function
// function steveAge(birYear) {
//      const age = 2022 - birYear;
//     return age;
// }
// const age = steveAge(1996)
// console.log(age)

//     // or
// function steveAge(birYear) {
//     return 2022 - birYear
// }
// const age1 = steveAge(1996);
// console.log(age1)

// expression function
// const steveAge = function (birYear) {
//     return 2022 - birYear;
// }
// const age1 = steveAge(1996)
// console.log(age1)

// arrow function
// const steveAge = (birYear) => 2022 - birYear;

// exam
// to get the min and max of temperature and a two answer in array by using concat
// const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperature2 = [4, 3, 5, 3];
// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   let amplitude = [];

//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (temps[i] < min) min = curTemp;
//   }

//   console.log(max, min);
//   return (amplitude = max - min);
// };

// const amplitude = calcTempAmplitude(temperature, temperature2);
// console.log(amplitude);

// to get the min and max of temperature and a single answer in array
// const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   let amplitude = [];

//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;
//     if (temps[i] < min) min = curTemp;
//   }

//   console.log(max, min);
//   return (amplitude = max - min);
// };

// const amplitude = calcTempAmplitude(temperature);
// console.log(amplitude);

// getting the anagram
// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const result = {};
//   for (let i = 0; i < str1.length; i++) {
//     let char = str1[i];
//     result[char] = result[char] ? (result[char] += 1) : (result[char] = 1);
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];
//     if (!result[char]) {
//       return false;
//     } else {
//       result[char] = -1;
//     }
//   }
//   return true;
// }
// console.log(anagram("mary", "army"));

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("degrees celsius")),
//   };
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

const mTemps = [17, 21, 23];
if (mTemps.length !== mTemps[2]) {
  console.log(`approved`);
}
