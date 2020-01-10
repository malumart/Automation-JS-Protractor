// Conditional Statements

function compareNumbers  (number1, number2) {

if (number1 > number2){
    alert(`number_1 is greater than number_2`);
}else{
    if(number2 > number1){
        alert(`number_1 is smaller than number_2`);
    } else{
        alert(`number_1 is equal to number_2`)
    }
}
}

let number_1 = 34;
let number_2 = 4;

compareNumbers(number_1, number_2)
/*
Functions
1) Write a function named “helloWord”. 
When the function is called then it will print the message “Hello World”

2) Write a function named “addNumbers”. The function takes two arguments (integer numbers). Then it adds the numbers and returns the addition when the function is called.
*/
function helloWorld () {
    alert ("Hello World!")
}

helloWorld();

function addNumbers(num1,num2){
    let suma = 0;
    suma = num1 + num2;
    return suma;
}

console.log(addNumbers(3,5));

/*
Arrays
1) Create an array named “fruits” and add the items “banana” and “apple”. 
Then add a new item “orange” at the end of the array (using push()). 
Then remove the first item “banana” (using slice())

2) For the following array “numbers = [0, 1, 2, 3, 4]” iterate and print each item with the array method forEach()
*/

let fruits = ["banana", "apple"];

fruits.push("orange");
console.log(fruits)
console.log(fruits.slice(1))

let numbers =[0,1,2,3,4];
numbers.forEach(element => console.log(element));


/*
For loop
1) Write a function including a for loop to iterate from 0 to 4, 
when number is Even then prints the message “number is even”
*/

function numberIsEven () {
    for (let i =0; i<5; i++){
        if (i % 2 == 0){
            alert(`${i} is even`)
        }
    }
}

numberIsEven();

/*
While loop
1) Write a function including a while loop to add numbers from 0 to 5, the function should return the result of the addition

2) Compare the elements from the following arrays:
*If the elements on any index do not match: stop the iteration process and return the index number.
expectedElementsArray = ["Pull requests", "Issues", "Marketplace", "Explore" ];
currentMenuElements = ["Pull requests", "Issues", "Resources", "Explore" ];
*/

function add0to5 () {
    let i=1;
    let suma = 0;
    while(i<6){
        suma += i;
        i++
    }
    return suma;
}

console.log(add0to5());


let expectedElementsArray = ["Pull requests", "Issues", "Marketplace", "Explore" ];
let currentMenuElements = ["Pull requests", "Issues", "Resources", "Explore" ];

function compareElementsArray (arr1, arr2) {
 let found = false;   
    while(found == false){
        for (let i=0; i<arr1.length ; i++) {
            if( arr1[i] != arr2[i]){
                found =true;
                return i;
            }
        }
    }
}

console.log(compareElementsArray(expectedElementsArray, currentMenuElements));