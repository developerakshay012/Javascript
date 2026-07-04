// question 1 find the avarage of the 3 number

// let num = [10 , 15 ,20];
// let sum = 0
// // find the sum of all the values

// num.forEach(element => {
//     element + sum
// });
// console.log(sum);


// function averageOfThree(a , b , c){
//     let max;
//     if(a > b &&  a>c){
//         max = a;
//     }else if(b>a && b > c){
//         max = b
//     }else if(c>a && c> b){
//         max = c
//     }

//     return max
// }

// let result = averageOfThree(10 , 15 , 20)
// console.log(result);


// function averageofThreeNum(a , b, c){
//     let sum = a + b + c;

//     let avearage = sum/3;

//     return avearage
    
// }

// let result1 = averageofThreeNum(5 , 10 , 15)
// console.log(result1);


// find the minimum average of three number


// function minimumAvg(a, b, c){
    
//     let minimum;
//     if(a<b && a<c){
//         minimum = a;
//     }else if(b<a && b<c){
//         minimum = b;
//     }else if(c<a && c<b){
//         minimum = c
//     }

//     return minimum;

// }

// let result = minimumAvg(2 , 4 , 6);
// console.log(result);

// function miinimumavg(a , b , c){
//     let sum = a - b - c
//     let min = sum/3

//     return min
// }

// let result = miinimumavg(2 , 4 , 6)
// console.log(result);


//check the number is positive or negative or zero

// let num = 10

// if(num > 0){
//     console.log("number is positive");
// }else if(num < 0){
//     console.log("number is negative");
// }else if(num === 0){
//     console.log("number is zero");
// }

// let num = [10 , 34,656,786,876,870 , 0 , -8]

// let result = num.map((element , index) => {
//     if(element > 0){
//         console.log(`element is positive ${element}`);
//     }else if(element < 0){
//          console.log(`element is negative ${element}`);
//     }else if(element === 0){
//          console.log(`element is zero ${element}`);
//     }
// })


// function postNegzer(num)
// function posNegZero(arr) {
//     arr.forEach((element) => {
//         if (element > 0) {
//             console.log(`Element is positive: ${element}`);
//         } else if (element < 0) {
//             console.log(`Element is negative: ${element}`);
//         } else {
//             console.log(`Element is zero: ${element}`);
//         }
//     });
// }

// let num = [10, 34, 656, 786, 876, 870, 0, -8];

// posNegZero(num);


// calculthe bill of electricity if
// unit price is 0 - 100 5 per unit 
// 100 - 200 units 7 per units
// 201 - 300 units 10 per units
// above 300 123 per units
// function calculateBills(units) {

//     let total = 0;

//     if (units <= 100) {
//         total = units * 5;
//     } else if (units <= 200) {
//         total = (100 * 5) + (units - 100) * 5;
//     } else if (units <= 300) {
//         total = (100 * 5) + (100 * 5) + (units - 200) * 10;
//     } else {
//         total = (100 * 5) + (100 * 5) + (100 * 10) + (units - 300) * 12;
//     }

//     return total;
// }

// console.log(calculateBills(250)); // 1500

// function calculateBill(units) {
//     const rates = [5, 7, 10, 12];
//     const slabs = [100, 100, 100];

//     let total = 0;

//     for (let i = 0; i < slabs.length; i++) {
//         let currentUnits = Math.min(units, slabs[i]);

//         total += currentUnits * rates[i];
//         units -= currentUnits;

//         if (units <= 0) {
//             return total;
//         }
//     }

//     // Remaining units (above 300)
//     total += units * rates[rates.length - 1];

//     return total;
// }

// console.log(calculateBill(250));   // 1700
// console.log(calculateBill(350));   // 2560
// console.log(calculateBill(2000));  // 22460


//check the given consonent or vowel

// let names = "akshayKumar"

// if(names.includes('a' || 'e' || 'i' || 'o' || 'u')){
//     console.log("this is vowewl names");
// }


// function checkVowels(char){

//     if(
//         char === 'a' ||
//         char === 'e' ||
//         char === 'i' ||
//         char === 'o' ||
//         char === 'u' 
//     ){
//         return 'Voewels'
//     }else{
//         return 'Consonents'
//     }

// }

// let results = checkVowels('a')
// console.log(results);


// function checkVowels(word) {
//     let vowels = [];
//     let consonants = [];

//     for (let char of word.toLowerCase()) {
//         if ("aeiou".includes(char)) {
//             vowels.push(char);
//         } else if (char >= 'a' && char <= 'z') {
//             consonants.push(char);
//         }
//     }

//     console.log("Vowels:", vowels);
//     console.log("Total Vowels:", vowels.length);

//     console.log("Consonants:", consonants);
//     console.log("Total Consonants:", consonants.length);
// }

// checkVowels("Akshay");

// function vowelsFind(word){

//     const vowel = [];
//     const consonent = [];

//     for(let char of word.toLowerCase()){
//         if('aeiou'.includes(char)){
//             vowel.push(char)
//         }else if(char >= 'a' && char<= 'z'){
//             consonent.push(char)
//         }
        
//     }

//     console.log("Vowels" , vowel);
//     console.log("Total Vowels" , vowel.length);

//     console.log("Consonents" , consonent);
//     console.log("Total onsonents" , consonent.length);

// }

// vowelsFind('akshaya')


//check the leap if year 

// function findLeapYear(year){
//     if(year % 400 === 0){
//             return true
//     }else if(year % 4 === 0){
//         return false 
//     }else if(year % 100 !== 0){
//         return false
//     }

//     return false
// }

// const result = findLeapYear(1997);
// console.log(result);