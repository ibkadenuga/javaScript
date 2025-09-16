// let myName = 'ibukun';
// console.log(myName)

// let age = 77;
// let sch = 'earlybell';
// console.log(age, sch);

// let a = 50
// a = '75'
// console.log(a)

// let myNumber = 777;
// let myString = 'howfar';
// let myBoolean = false;

// console.log(typeof(myNumber));
// console.log(typeof(myString));
// console.log(typeof(myBoolean));

// let b = 55;
// let c = 45;
// let sum = (b + c)
// console.log(sum);

// let d = 5;
// let e = 15;
// let difference = (d - e);
// console.log(difference);

// let f = 10;
// let g = 3;
// let multiple = (f * 3)
// console.log(multiple);

// let h = 12;
// let i = 12;
// let division = (h / i);
// console.log(division)

// let j = 80;
// let k = 9;
// let mod = (j % k);
// console.log(mod);

// var firstName = 'Paul';
// var lastName = 'Chukwuemeka';
// console.log(firstName +" "+ lastName)

// console.log(10 > 5);
// console.log(7 === '7');
// console.log(8 !== 6);
// console.log(20 == '20')

// console.log(typeof(5 + '5'));

// console.log(10 > 5 && 5 > 3);
// console.log(10 < 5 || 5 > 3);

// console.log(5 !== '5');
// console.log(40 <= 40);

// let str = 'Javascript'
// let reversed = '';

// for(l = str.length-1; l >= 0; l--){
//     reversed += str[l];
//     console.log(str[l],l)
// }
// console.log(reversed);

// let str1 = 'programming is fun';
// let count = 0;
// for (m = 0; m < str1.length; m++){
//     if(str1[m] == 'a'||
//         str1[m] == 'e' ||
//         str1[m] == 'i' ||
//         str1[m] == 'o' ||
//         str1[m] == 'u'
//     ){
//         count++
//     }
// }
// console.log(count);

// const numbers = [45, 12, 9, 78, 34, 89, 90, 98]
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber)

// let number1 = 5;
// let factorial = 1;
// for(n = 1; n <= number1; n++){
//     factorial *= n;
// }
// console.log(factorial)

// let arr = ['justice', 'apple', 12, 22, 23, true, false];
// console.log(arr)
// arr[3] = 100
// console.log(arr);

// arr.shift()
// console.log(arr)

// arr.unshift('new item')
// console.log(arr)

// arr.push('get new item')
// console.log(arr)

// arr.pop()
// console.log(arr)

// let joined = arr.join('--')
// console.log(joined)

// let newArr = arr.concat(['polo', 'top', 78, 90, true, false])
// console.log(newArr)

// let myArr = [78, 90, 55, 888, 678]
// myArr.splice(1,0, 'string inserted')
// console.log(myArr)

// // let myArrToStr = myArr.toString()
// // console.log(myArrToStr)

// // console.log(myArr1.sliced(0,3))

// // // let lenght = myArr1.length
// // // console.log(myArr1.length)

// // ---SEARCH METHODS - allows us to search for an element within our array

// //indexOf - the first position in which the element appears
// let array = [12, 22, 33, '777', 'ee', 'test', 22, 33, 'ouiuu', 'yyeffg']
// console.log(array.indexOf('77'))
// //lastIndexOf - the last index or position in which an element appears
// console.log(array.lastIndexOf(22))
// //kinclude-- checks if an element exist inside an array
// console.log(array.includes(9))
// console.log(array.includes('ee'))
// //find-- allows us to find an item that satisfy a condition
// let found = array.find((item)=> typeof(item) == 'string')
// console.log(found)
// //findlast - allows us to find last element that satisfy a condition
// let findLast = array.findLast((item)=> typeof(item) == 'string')
// console.log(findLast)

// // JUNE 3
// //SORT METHODS AND INTERATION METHOD
// //SORTS METHODS ALLOWS US TO SORT  our array in different orders
// let arrr = [22, 55, 33, 44, 'rest', true, 'try', 87, '0']
// console.log(arrr.sort())

// let numArr = [1, 23, 4, 56, 10, 6000, 500]
// console.log(numArr.sort((a,b)=> a - b))

// // REVERSE THE ARRAY
// console.log(numArr.reverse())

// //iteration methods are used to perform a funtion on each element on the array
// numArr.forEach((item, index)=>{
//     console.log(index+ ":", item)
// })

// //MAP  -map array
// //foreach method
// numArr.map((item)=>{
//     console.log(item *5)
// })
// //or
// const newArrr = numArr.map ((item)=>{
//     return item *5
// })
// console.log(newArrr)

// //filter Method -  allows us to create a new array using all the elements in our array that pass a text

// const evenArr = numArr.filter((item)=> item % 2 === 0 && item !=0)
// console.log(evenArr)

// const strArr = [ 'wet', 'come', 'preach', 'hurry', 'celebration']
// const longStr = strArr.filter((item)=> item.length > 5)
// console.log(longStr)

// //Reduce Array
// let numArrr = [1, 23, 4, 56, 10, 6000, 500]
// const reduced = numArrr.reduce((accumulator,current)=>{
//     console.log(accumulator,current)
//     return accumulator + current
// })

// // JUNE 10
// // Revision
// // the find method
// const myArrr = [12, 'hello', "me", 87, 'ytr', 899, 'yesterday', 'before']
// console.log(myArrr.find((item)=> typeof(item) == "string"))
// console.log(myArrr.findLast((item)=> typeof(item) == "string" && item.length > 7))

// const myArr1 = ['but', 'nothing', 'love', 'motor', 'progress']
// console.log(myArr1.find((item)=> typeof(item) == 'string' && item.startsWith('m')))

// const myAr2 = ['baggy', 'dgdngdd', 'classy', 'understaning', 'teaching', 'laptop',
//     'development', 'earlybellbyme', 'ceilingfan', 'mechanical']
// console.log(myAr2.find((item)=> typeof(item) == 'string' && item.length < 8 && item.includes('n')))

// const myAr3 = [10, 55, 150, 99, 200, 77, 100, 133, 67, 87]
// console.log(myAr3.find((item)=> item > 50 && item % 2 == 0))

// //-- FILTER
// const myAr4 = [10, 55, 150, 99, 200, 77, 100, 133, 67, 87]
// console.log(myAr4.filter((item)=> item % 2 == 0))

// const myAr5 = ['baggy', 'dgdngdd', 'classy', 'understaning', 'teaching', 'laptop',
//     'development', 'earlybellbyme', 'ceilingfan', 'mechanical']
// console.log(myAr5.filter((item)=> item.includes('b')))

// JUNE 17
// OBJECT
// An object is a collection of data stored in keyed and value pairs
//How to create an object

// 1 object literals
// const myObject = {
//     name: 'Jumoke',
//     id: 'ioioioio'
// }
// // to access the property in an onject you can use dot or square
// let myName = myObject.name //example of dot
// let myId = myObject['id'] //example of square bracket
// console.log(myName)
// console.log(myId)

// //updating properties in object
// myObject.name = 'ibukun'
// myObject['id'] = 'jojojojojo'
// console.log(myObject)

// //To add new a property
// myObject.gender = 'male'

// //To remove a property
// delete myObject.gender

// 2 object constructor - is function used to create an object
// const myPerson = new Object()
// myPerson.name = 'Toluwalase'
// myPerson['id'] = '0909'
// myPerson.gender = 'Female'
// console.log(myPerson)

// const person = {
//     name: 'john, age:50'
// }
// alert(person.name + "is" + person.age)

// create an object name student using the object literal syntax
// const myStudent = {
//     fullname : 'Ibukun Adenuga',
//     matricNo: '20160909',
//     level: 300
// }
// console.log(myStudent)

// // 2
// const course = new Object()
// course.title = 'Front-End'
// course.code = 'html'
// console.log(course)

// // 3
// let myName1 = myStudent.fullname
// console.log(myName1)

// //update
// myStudent['level'] = '800' //using square
// console.log(myStudent)

// //add
// myStudent.gender = "SEX / female"
// console.log(myStudent)

//JUNE 24
//OBEJECT CONSTRUCTOR---- the custom method

// const myObject = new Object ()
// console.log(myObject)

// //custom method

// const CustomObject = function(name,age){
//     this.name = name
//     this.age = age
// }

// const myCustomObject = new CustomObject("Ibukun", 12);
// const myCustomObject2 = new CustomObject("Boss", 56782);
// const myCustomObject3 = new CustomObject("Lope", 172);
// const myCustomObject4 = new CustomObject("Leader", 0012);
// console.log(myCustomObject, myCustomObject2,myCustomObject3,myCustomObject4)

//METHOD--- is a function that is stored as a property in an object
// const myObject2 = {
//     name : 'Jumoke',
//     age: 67,
//     greet : function(){
//         console.log('Hello, my name is ' + this.name, "and i am", + this.age + 'years old')
//     }
// }
// myObject2.greet()

// ASSIGNMENT
// const myObject ={
//     name : 'Alex',
//     age : 22,
//     id : '34567890'
// }
// let myName = myObject.name
// let myAge = myObject['age']
// let myId = myObject['id']

// console.log(myObject)

//upgade the age and id
// myObject['age'] = 80
// myObject['id'] = 100000

// console.log(myObject)

//add a new property
// myObject.grade = 'FirstClass'
// console.log(myObject)

//delete Grade
// delete myObject.grade
// console.log(myObject)

// ASSIGNMENT 2
// const myCar = new Object()
// myCar.brand = 'Toyota',
// myCar.model = 'Corola',
// myCar.year = '2025'
// console.log(myCar)

//ASSIGNMENT 3
// const CustomBook = function(title,authur,year){
//     this.title = title
//     this.authur = authur
//     this.year = year
// }
// const myCustomBook = new CustomBook('Finish What you Start','Ibukun Adenuga', 2025
// )
// console.log(myCustomBook)

//ASSIGNMENT 4
// const myDog = {
//     name : 'Bruno',
//     breed : 'Bullgod',
//     age : 4,
//     greet : function(){
//         console.log(`woof! i'm, ${this.name} the ${this.breed} and, i am ${this.age} years old`)
//     }

// }
// myDog.greet()

//ASSIGNMENT 5
// MODIFY EXISTING OBJECT
// const phone = {
//     brand : 'Samsung',
//     model : 'Galaxy S21',
//     price : 1200
// };
// phone.price = '1000'
// console.log(phone)

//JUNE 26
//DOM - Document  Object  Model is a way for JAVASCRIPT to interpret our HTML document as object.
//METHODS OF ACCESSING DOCUMENT USING DOM
//querySelector - Selects the first element then machecs the selectore
//getElementById - selects the element with the specified id
//getElementByClassName -selects all elements with the specified tag name
//getElementByTagName -selects all elements with the specified tag name
//querySelectorAll - selects all elements that match the specified CSS selector

// console.log(document)

// Selector
// const element = document.querySelector('span')
// console.log(element)

// const element2 = document.getElementById('late')
// console.log(element2)

// const element3 = Array.from(document.getElementsByClassName('test'))
// console.log(element3)

// const elementTag = Array.from(document.getElementsByTagName('span'))
// console.log(elementTag)


const elements = Array.from(document.getElementsByTagName("span"));
elements.forEach((element) => {
  element.addEventListener("mouseover",() => {
      element.classList.add("active");
      setTimeout(() => {
        element.classList.remove("active");
      },450);
    });
});






//JULY 1//
//DOM//
//CLICK COUNTER