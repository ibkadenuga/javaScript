// how to add and push to git
// git add .
// git commit -m "test"
// git push


//prettier
  
  //STRING
//EXAMPLE OF STRING
//string values "567"; "@%$#"; "Samu"
console.log(typeof('hello'))


//NUMBER is a numerical value

12
10
76.7
76667
console.log(typeof(76/7))


//BIGINT
//bigint -  reps big interger numbers 476868696979
12345678891234567894321n
console.log(typeof(45n))



//BOOLEAN is true or false value
//its derived from a condition
console.log(2 == 500)// when we are trying to comapre two values we use the double or tripple equal
console.log(2 > 5)
console.log(2 < 5)


//UNDEFINED
let car 
console.log(car) //it has no value

let phone = "red"
console.log(phone) 




//NULL is a data typr for empty value
let book = null




//OBJECT data type can contain both built-in objects and user-define objects
//types
//array
//object
//date
//map
//set



//VARIABLE -- a variable can only be decleared once and can be mutable (changeable)
//AUTOMATIC
x = 20

x = "45"
console.log(x)

//LET KEYWORD
let y = 500

console.log(y)

//CONST KEYWORD -- it cant be changed once decleared
const z = 7000 // the equal to is called assignment operator

console.log(z)




//OPERATOR - are used to perform mathematical or logical operations
//example
//  = - assignment operator - assign a value to a variable
//  + - addition operator 
//  -   difference    ''
//   /
//   *
//   %  MODULUS - returns remainder of division operations



//LOGICAL OPERATOR
//  >  greater than 
//  <  less than
//  >=  greater or equal
console.log(10 >= 20)
//  <=  less or equal
console.log(20 <= 20)
//  ==  equal
console.log(20 == "20")
//  ===  strict equal
console.log(20 === "20")
//  !=  inequal
console.log(20 != "20")
//  !==  strict inequal 
console.log(20 !== "20")


//  && (ampersand) - and  : is used to check if multiple operations are TRUE
console.log(10 > 5 && 10 >20)

//  || (pipe symbol) - or 
console.log(10 > 5 || 10 > 20)






//ASSIGNMENT
myName = "Nuga"

console.log(myName)


//2
age = 23
school = "earlybell"

console.log(age, school)


//3
score = 50

score = "75"
console.log(score)


//4
let myNumber = 767
let myString = 'Howfar'
let myBoolean = false

console.log(typeof(myNumber))
console.log(typeof('myString'))
console.log(typeof('myBoolean'))


//5
let g = 10
let t = 10

console.log(g + t)

//6
let firstName = "Paul"
let lastName = "Chukwuemeka"

console.log(firstName + " " + lastName)

//7
let q = 450
let w = 780
let sub = q - w

console.log(sub)

let e = 648
let r = 6383
let mul = e * r

console.log(mul)

let u = 64
let i = 2
let div = u / i

console.log(div)

let a = 10
let s = 4
let mod = 10 % 4

console.log(mod)
// console.log(8 % 4)

//8
console.log(10 > 5)
console.log(7 === "7")
console.log(8 !== 6)

//9
let count = 0;
count += 1;
count += 1;
count += 1;






//---- ASSIGNMENT 2

//1 
//string

//2
// bigint

//3 
//null

//4
//boolean

//5
//let age; varuable but no data

//6
console.log(20 == "20") //when dey are the same value its true
console.log(20 === "20") //value match but type doesnt so its false

//7 = answer is stated above

//8
console.log(typeof (5 + "5")); //"5" is a string so it gives 55
// reason is bc its implicit type conversation

//9
// //ans = variable has been declared using const its unmutable

//10
let girl = 25;
girl = 30;

//11
let scoree = 100;
scoree = 200;

//12
console.log(10 > 5 && 5 > 2);

//13
console.log(10 < 5 || 5 > 3); //true since one is true

//14
console.log(5 !== "5");

//15
console.log(40 <= 40);

//16
console.log(10 % 3);

//17
console.log(12345678901234567890n * 2n)

//18
console.log(50 / 5);

//19
let diffrence = 100 - 75
console.log(100 - 75);

//20
console.log(25 + "5"); "5 is a string"






////--- -- MAY 8

// TYPE CONVERSION
//type conversion is the process of converting values from one datatype to another
// 1 - IMPLICIT TYPE OF CONVERSION
// 2 -EXPLICIT TYPE CONVERSION

// IMPLICIT TYPE OF CONVERSION - when  JS converts your data from one type to another while performing operations
console.log(typeof (20 + "20"), 20 + "20")
console.log(typeof (20 * "20"), 20 * "20")
console.log(typeof (20 * "abc"), 20 * "abc")
console.log(typeof (20 / "20"), 20 / "20")
console.log(typeof (20 - "20"), 20 - "20")



//EXPLICIT TYPE CONVERSION  - se;f cpnversion
// convert a number to string

let text = 20;
console.log(String(200))
//from boolean to string
console.log(String(true))

//sting covert it to boolean
console.log(Boolean("9"))
console.log(Boolean(0))

//convert string, number boolean
console.log(Boolean (""))
console.log(Boolean (true))
console.log(Number (false))







//----- CONDITIONALS - is a comparism ( true or false)
//  it allows us to run specify code blocks depending on the result of a condition
//if.. else

let h = 200;
let j = 700000;
if(h > j){ //what we have in the bracket is called condition
    console.log("h is greater than j")
    // code block
    // if our condition returns true then IF code block will run
}

else{
    console.log("h is not greater than j")
    //code block
    // if our condition returns false then ELSE code block will run
}

let k = 200;
let l = 20;
if(k > l){
    console.log("k is greater than l")
}

else{
    console.log("k is not greater than l")
}




// ---- ASS
let myNme = "Ibukun";
console.log(myNme)

//2
let agee = 55;
let course = "webDev";
console.log(agee, course)

//7
let celcius = 100;
let fahrenheit = (celcius * 9/5) + 32;

console.log(fahrenheit)


//8
value1 = 10;
value2 = 20;

value1 = value2 + (value2 = value1,0)
console.log(value1,value2)







//---- MAY 13
//     LOOPS
// it allows us to run a block of code for a specify number of times
// i.e 
// -- for loop
// -- while loop
// -- do...while loop
// --for..in loop

//   for loop
for(m = 0;m < 10;m++){
    console.log(m)
}

for(m = 10;m > 0;m--){
    console.log(m)
}

// while loop
let c = 0
while(c < 10){
    console.log(c)
    c++
}

//  do,,while loop
let f = 0
do{
    console.log(f)
    f++
}
while(f < 10)




// ASSSSSS
for(kk = 0;kk <= 10;kk++){
    console.log(kk)
}

//   2
//print even numbers
for (jj = 1;jj <= 20; jj++){
    if(jj % 2 === 0){
        console.log(jj)
    }
}

//   3
let sum = 0;
for(gg = 0; gg <= 100; gg++){
    sum =  sum + gg
    console.log(sum)
}


//  4
//print the multiplication table for 7

let number = 7;
for ( ff = 0; ff <= 12; ff++){
    console.log(`7 x ${ff} = ${number * ff}`);
}

// 5
//how to reverse the string
let str = "JavaScript";
let reversed = "";

for(rr = str.length-1; rr >= 0; rr--){
    reversed += str[rr]
    console.log(str[rr],rr)
}
console.log(reversed);

//  6
//count the vowels  
let strr = "programming is fun"
let cnt = 0
for(pp=0; pp < strr.length;pp++){
    if(strr[pp] == 'a'|| strr[pp] == 'e'||strr[pp] == 'i'||strr[pp] == 'o'|| strr[pp] == 'u'){
        cnt++
    }
}
console.log(cnt)


//  7
// find the maximum number in an array
const numbers = [45, 12, 78, 4, 23, 89, 34];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);

//  8
// calculate the factorial, write the loop and find the factorial of 5
let numberr = 5;
let factorial = 1;
for(let aa = 1; aa <= numberr; aa++){
    factorial *= aa;
}
console.log(factorial);





// ---- MAY 15
//--------------  FUNCTIONS
// is a reuseable block of code designed to perform a specific task
// 3 ways to create a function
// function decleration
// function expression
// arrow funtion


// - Function decleration
// function runAlert(){
//     alert("Good Morning, Nigeria!")
// }
// runAlert()  //involk

// - Function Expression - 
// const myFunc = function(){ //annonymous function
//     alert("God bless Nigeria!")
// }
// myFunc()
// - Arrow Function - is a derivative of function exp
// const myArrow = () =>{
//     alert("God bless Nuga")
// }
// myArrow()



//--- argument and parameter
//--argument is the actual value
// Function Parameters - is a placeholder variable 
function texxxt(a){// name of the parameter
    console.log("hello " + a)
}
texxxt('Oreoluwa') //oreoluwa is an argument


// default parameter
function person(name = "jumoke ",age){
    console.log("hello " + name+ " your age is " + age)
}
person('Oreoluwa', 20) //oreoluwa is an argument
person('ibukun', 40) 

const women = (age)=>{
    console.log(age)
}
women(90)


//  HIGHER ORDER FUNCTION & CALLBACK FUNCTION

//--higher order funtion is the func that make use of other function
//-callback function --- which is been used by an higher order function
const play = (func) =>{
    func("This is magic")// arg
}
function lab(str){
        alert(str)
    }
play(lab) //callback


// -- RETURN STATEMENT
function test(a,b){
    return a * b
}
console.log(test(40,50))
const answer = test(400,50)
console.log(answer)

//hoist
//refers to ability useable before dey are initialized
host()
function host(){
    console.log('hoist')
}


// implicit

//-------    asssssss

// # 21. 
//Function to print "Hello, World!"
// function greet(){
//     alert("Hello, World!")
// }
// greet()
//# 22. Function to add two numbers 
function add(a, b){
    return a + b
}
const answerr = add(10,30)
console.log(answerr)
// # 23. Function to return the square of a number 
function square(num){
    return num * num
}

//24
function countVowels(str){
    let numOfVowels = 0
    str = str.split("");
    console.log(str)
    str.map((letter) => { // map allows us to go tru a string 
        if (
            letter == "a" ||
            letter == "e" ||
            letter == "i" ||
            letter == "o" ||
            letter == "u" 
        ) {
            numOfVowels = numOfVowels + 1;
        }
    });
    console.log(numOfVowels)
}
countVowels('hello world')

//25 




//----  MAY 222  ARRAY --  is a collection of data stored in an index manner
let myarr = ["apple", "banana", 1, 2, 3, 4, true, false, null, undefined, NaN, Infinity, -Infinity, [1,3,4],];
console.log(myarr);
console.log(myarr[6]);
console.log(myarr[8]);
// how to access or change
// chnge data 1 
myarr[1] = 'grape'
console.log(myarr)
//how to delete 5
delete myarr[5]
console.log(myarr)


// ARRAY METHHOD are funtions that allows us to perform operations on ouur array
// Array length - let us to get the leght of array
let lenght = myarr.length
console.log(myarr.length)
//Array toString
let arrToStr = myarr.toString()
console.log(arrToStr)
// at method
let special = myarr.at[9]
console.log(special)
// JOIN methed
let joined = myarr.join(':next,\n') // /n means new line character
console.log(joined)
//pop and push method-- pop allows us to remove while push allows us to add
myarr.pop()
console.log(myarr)
myarr.push('get out')
console.log(myarr)

//how to change the first index
myarr.shift()
console.log(myarr)
myarr.unshift('new item')
console.log(myarr)

// array concatenations - it means join two array or two strings together
let newArr = myarr.concat(['we', 'will', 'we', 'will', 'you'])
console.log(newArr)

//flat method -it flatten our nexted array
let arr = [[1,2,3], [4,5,6]]
console.log(arr.flat())

//Splice and Slice - method - can be used to add new method to array while slice add
let arrr = [1,2,3,4,5,6,7,8,9,10]
arrr.splice(3,3,800)//it takes multiple items add ammd remove
console.log(arrr)
//slice
let arrrr = [1,2,3,4,5,6,7,8,9,10]
let sliced = arrrr.slice(0,3)
console.log(arrr)