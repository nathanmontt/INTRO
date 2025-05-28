'use strict'

// import mathUtil from "./js/mathUtil.js";

/* ----- VARIABLES ----- */
let topicVariableAge = 25;
console.log(`Você tem ${topicVariableAge} anos!`);
console.log(`A variável topicVariableAge é do tipo: ${typeof topicVariableAge}`);

let topicVariableprice = 10.99;
console.log(`O preço é de R$${topicVariableprice}`);
console.log(`A variável price é do tipo: ${typeof topicVariableprice}`);

let topicVariablegpa = 2.1;
console.log(`A média final de um estudante qualquer dos EUA é: ${topicVariablegpa}`);
console.log(`A variável topicVariablegpa é do tipo: ${typeof topicVariablegpa}`);

let topicVariablefirstName = "James";
console.log(`Seu nome é: ${topicVariablefirstName}`);
console.log(`A variável topicVariablefirstName é do tipo: ${typeof topicVariablefirstName}`);

let topicVariableonline = false;
console.log(`Você está online? ${topicVariableonline}`);
console.log(`A variável topicVariableonline é do tipo: ${typeof topicVariableonline}`);


let topicVariableFullName = "Nathan Monteiro";
let topicVariablePersonAge = 25;
let topicVariableIsPersonUniStudent = true;

const getTopicVarPersonFullNameFromHtml = document.getElementById('topicVariableFullName');
getTopicVarPersonFullNameFromHtml.innerHTML = `&rightarrow; Seu nome é: ${topicVariableFullName}. O tipo da variável fullName é <span class="specific-style">${typeof topicVariableFullName}</span>; <br>`;

const getTopicVarPersonAge = document.getElementById('topicVariablePersonAge');
getTopicVarPersonAge.innerHTML = `&rightarrow; Sua idade é: ${topicVariablePersonAge} O tipo da variável topicVariablePersonAge é <span class="specific-style">${typeof topicVariablePersonAge}</span>; <br>`;

const getTopicIsPersonStudent = document.getElementById('topicVariableIsPersonUniStudent');
getTopicIsPersonStudent.innerHTML = `&rightarrow; É um estudante? ${topicVariableIsPersonUniStudent} O tipo da variável topicVariableIsPersonUniStudent é <span class="specific-style">${typeof topicVariableIsPersonUniStudent}</span>;`;


/* ============================================================================================================= */

/* ----- ARITHMETIC OPERATORS ----- */

let topicAriOperatorsStudents = 30;
// Operadores normais
topicAriOperatorsStudents = topicAriOperatorsStudents + 1;
// topicAriOperatorsStudents = topicAriOperatorsStudents - 1;
// topicAriOperatorsStudents = topicAriOperatorsStudents * 2;
// topicAriOperatorsStudents = topicAriOperatorsStudents / 2;

// topicAriOperatorsStudents = topicAriOperatorsStudents ** 2;
// topicAriOperatorsStudents = topicAriOperatorsStudents % 2;

// topicAriOperatorsStudents += 1;
// topicAriOperatorsStudents -= 1;
// topicAriOperatorsStudents *= 1;
// topicAriOperatorsStudents /= 2;
// topicAriOperatorsStudents **= 2;
// topicAriOperatorsStudents %= 2;

/* INCREMENTO E DECREMENTO */
topicAriOperatorsStudents++;
// topicAriOperatorsStudents--;
console.log(`A quantidade de estudantes na sala atualamente é: ${topicAriOperatorsStudents}`);

/* ============================================================================================================= */

/* ----- MATH OBJECTS ----- */
const topicMathObjPI = Math.PI;
const topicMathObjE = Math.E;
console.log(topicMathObjPI);
console.log(topicMathObjE);

let topicMathObjx = 3.21;
let topicMathObjx2 = 3.91;
let topicMathObjy = 2;
let topicMathObjy2 = -2;
let topicMathObjz;

console.log(`O valor de topicMathObjx arredondado é: ${Math.round(topicMathObjx)}`);
console.log(`O valor de topicMathObjx2 arredondado pra baixo é: ${Math.floor(topicMathObjx2)}`);
console.log(`O valor de topicMathObjx arredondado pra cima é: ${Math.ceil(topicMathObjx)}`);
console.log(`O valor de topicMathObjx2 sem decimal é: ${Math.trunc(topicMathObjx2)}`);
console.log(`O valor de topicMathObjx2 elevado à topicMathObjx é: ${Math.pow(topicMathObjx2, topicMathObjx)}`);
console.log(`A raiz quadrada de topicMathObjy é: ${Math.sqrt(topicMathObjy)}`);
console.log(`O log de topicMathObjy é: ${Math.log(topicMathObjy)}`);
console.log(`O seno de topicMathObjy é: ${Math.sin(topicMathObjy)}`);
console.log(`O cosseno de topicMathObjy é: ${Math.cos(topicMathObjy)}`);
console.log(`A tangente de topicMathObjy é: ${Math.tan(topicMathObjy)}`);
console.log(`O absoluto de topicMathObjy2 é: ${Math.abs(topicMathObjy2)}`);
console.log(`O sinal de topicMathObjy2 é: ${Math.sign(topicMathObjy2)}`);
console.log(`O valor máximo de topicMathObjy2 é: ${Math.max(topicMathObjx,topicMathObjx2,topicMathObjy,topicMathObjy2)}`);
console.log(`O valor mínimo de topicMathObjy2 é: ${Math.min(topicMathObjx,topicMathObjx2,topicMathObjy,topicMathObjy2)}`);

/* ============================================================================================================= */

/* ----- STRING METHODS ----- */
// const entireName = "Nathan de Andrade Monteiro da Silva";

// // let entireFirstName = entireName.slice(0, 6);
// // console.log(entireFirstName);

// // let entireLastName = entireName.slice(10, 17);
// // console.log(entireLastName);

// let lastChar = entireName.slice(-5);
// console.log(lastChar);

// let entireFirstName = entireName.slice(0, entireName.indexOf(" "));
// console.log(entireFirstName);
// let entireLastName = entireName.slice(entireName.indexOf(" "));
// // let entireLastName = entireName.slice(entireName.indexOf(" ") + 1); aqui é para retirar o espaço
// console.log(entireLastName);

// /* ============================ */

// // let enterName = window.prompt("Entre com o nome: ");

// // Sem method chaining

// // enterName = enterName.trim();
// // let letter = enterName.charAt(0)
// // letter = letter.toUpperCase();

// // let extraChars = enterName.slice(1);
// // extraChars = extraChars.toLowerCase()
// // enterName = letter + extraChars;

// // console.log(enterName);

// // Com method chaining

// // enterName = enterName.trim().charAt(0).toUpperCase() + enterName.trim().slice(1).replaceAll(" ", "").toLowerCase();
// // console.log(enterName);

// /*
// Primeiro, pegamos o nome;
// Tiramos todos os espaços em branco;
// Pegamos o primeiro char;
// Transformamos ele em upper;

// Concatemamos com o resto da palavra, já que só fizemos isso com o primeiro char (charAt(0));
// eliminamos todos os espaços novamente;
// Damos um slice, já que não queremos a primeira letra mais;
// Deixamos o resto em lower;
// */

// /* ============================ */

// // let urName = "";

// // while (urName === "" || urName === null) {
//     //     urName = prompt("Digite seu nome");
//     // }
    
//     /* ============================ */

//     // const minNum = 1;
//     // const maxNum = 10;
//     // const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    
// // let attempts = 0;
// // let guess;
// // let running = true;

// // console.log(answer);

// // while (running) {
//     //     guess = prompt(`Guess a number between ${minNum} and ${maxNum}`)
//     //     guess = Number(guess);
    
//     //     if(isNaN(guess)) {
//         //         window.alert("Please enter a number!")
//         //     } else if (guess < minNum || guess > maxNum) {
//             //         window.alert("Please enter a valid number!")
//             //     } else {
//                 //         attempts++;
//                 //         if (guess < answer) {
//                     //             window.alert("TOO LOW. TRY AGAIN!")
//                     //         } else if (guess > answer) {
//                         //             window.alert("TOO HIGH. TRY AGAIN!")
//                         //         } else {
//                             //             window.alert(`CORRECT! The number was ${answer} and it took you ${attempts} attempts!`);
//                             //             running = false;
//                             //         }
//                             //     }
//                             // }
                            
//                             /* ============================ */
                            
// // function bDay (person, agePerson) {
//     //     console.log(`Feliz Aniversário, ${person}! Hoje você está fazendo ${agePerson} anos!`)
//     // }
    
//     // bDay("Nathan", 25);

//     function add (x, y) {
//     let result = x + y;
//     return result;
// }
// function sub (x, y) {
//     let result = x - y;
//     return result;
// }
// function mult (x, y) {
//     let result = x * y;
//     return result;
// }
// function div (x, y) {
//     let result = x / y;
//     return result;
// }

// function isEven (number) {
//     return number%2 === 0 ? true : false;
// }

// console.log(add(2,3));
// console.log(sub(2,3));
// console.log(mult(2,3));
// console.log(div(2,3));
// console.log(isEven(3));

// /* ============================ */

// let fruits = ["apple", "orange", "banana", "strawberry", "mirtilo", "grapes"];
// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();
// console.log(fruits.length);

// console.log(`Antes de dar .sort(): ${fruits}`);

// fruits.sort();
// console.log(`Depois de dar .sort(): ${fruits.sort()}`);

// fruits.sort();
// console.log(`Depois de dar .sort().reverse(): ${fruits.sort().reverse()}`);

// for (let i=0 ; i<fruits.length ; i++) {
//     console.log(fruits[i]);
// }

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// /* ============================ */

// let numbers = [1, 2, 3, 4, 5];
// let max = Math.max(...numbers)
// let min = Math.min(...numbers)
// console.log(max);
// console.log(min);


// let user = "Nathan Monteiro"
// let letters = [...user].join("-");
// console.log(letters);

// let fruit = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "celery", "potatoes"];
// console.log(fruit);

// let foods = [...fruit, ...vegetables, "eggs", "milk"];
// console.log(foods);

// /* ============================ */

// const food1 = "pizza";
// const food2 = "hamburguer";
// const food3 = "hot dog";
// const food4 = "sushi";
// const food5 = "ramen";

// function openFridge(...foods) {
//     console.log(foods)
// }

// openFridge(food1, food2, food3, food4, food5)


// function sum(...sumNumbers) {
//     let resultSum = 0
//     for (let i=0 ; i<sumNumbers.length ; i++) {
//         resultSum += sumNumbers[i];
//     }
//     return resultSum;
// }

// const total = sum(2,3,4,5,6);
// console.log(total)

// /* ============================ */

// // hello(wait);

// // function hello (callback) {
//     //     console.log("hello");
//     //     callback();
//     // }
    
//     // function leave () {
// //     console.log("leave");
// // }

// // function wait () {
// //     console.log("wait");
// // }

// // function goodbye () {
// //     console.log("goodbye")
// // }

// // soma(displayConsole,2,3);

// // function soma (callback, x, y) {
// //     let result = x+y;
// //     callback(result);
// // }
// // function displayConsole (result) {
//     //     console.log(result);
//     // }

    
// /* ============================ */

// let numbersArray = [1, 2, 3, 4, 5];

// // numbersArray.forEach(double);
// // numbersArray.forEach(triple);
// // numbersArray.forEach(square);
// // numbersArray.forEach(cube);
// // numbersArray.forEach(display);

// // function double(element, index, array) {
//     //     array[index] = element * 2;
//     // }
    
// // function triple(element, index, array) {
//     //     array[index] = element * 3;
//     // }
    
//     // function square(element, index, array) {
//         //     array[index] = Math.pow(element, 2);
// // }

// // function cube(element, index, array) {
//     //     array[index] = Math.pow(element, 3);
//     // }
    
//     // function display (element) {
//         //     console.log(element);
//         // }
        
// // let fruitsArray = ["apple", "orange", "banana", "coconut"];

// // fruitsArray.forEach(display);

// // function display(element) {
//     //     console.log(element);
//     // }
    
//     /* ============================ */
    
// // const nums = [1,2,3,4,5];
// // const cb = nums.map(cube);

// // console.log(cb);

// // function cube(el) {
//     //     return Math.pow(el, 3);
//     // }
    
//     const dates = ["2-12-2022", "20-10-2023", "10-01-2000"];
// const formatedDates = dates.map(formatDates);

// console.log(formatedDates)

// function formatDates(elements) {
//     const parts = elements.split("-");
//     return `${parts[0]}/${parts[1]}/${parts[2]}`;
// }

// /* ============================ */

// let n = [1,2,3,4,5,6,7];
// let evenNums = n.filter(isEven);
// console.log(evenNums);

// function isEven(el) {
//     return el%2 === 0;
// }

// /* ============================ */

// const prices = [5, 30, 10, 25, 15, 20];
// const totalPrice = prices.reduce(sumPrice);

// console.log(totalPrice.toFixed(2));

// function sumPrice (accumulator, elements) {
//     return accumulator + elements;
// }

// const grades = [75, 50, 90, 80, 65, 95]
// const maxGrades = grades.reduce(getMax);
// const minGrades = grades.reduce(getMin);

// console.log(maxGrades);
// console.log(minGrades);

// function getMax(accumulator, element) {
//     return Math.max(accumulator, element);
// }

// function getMin(accumulator, element) {
//     return Math.min(accumulator, element);
// }

// /* ============================ */

// const hello = function () {
//     console.log('hello');
// }

// // setTimeout(hello, 3000);
// // setTimeout(function() {
//     //     console.log("ola")
//     // }, 3000);
    
//     // const nmbrs = [1,2,3,4,5,6,7,8,9].map(function (element) {
//         //     return Math.pow(element,2);
//         // });

// // console.log(nmbrs);

// /* ============================ */

// const helloPerson = (nome) => {
//     console.log(`Olá, ${nome}`);
// };

// helloPerson("jonas");


// // setTimeout(() => {
// //     console.log("eu de novo")
// // }, 3000);

// const nmbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sqs = nmbrs.map((element) => { return Math.pow(element, 2); });
// const cubes = nmbrs.map((element) => { return Math.pow(element, 3); });
// const even = nmbrs.filter((element) => { return element%2 === 0; });

// console.log(sqs);
// console.log(cubes);
// console.log(even);

// /* ============================ */

// const person = {
//     firstName: "Patrick",
//     lasName: "Star",
//     age: 30,
//     isEmployed: false,
//     sayHello: function () { console.log("Hellooo!"); },
//     sayBye: () => { console.log("Byeeee!"); }
// };

// console.log(person.firstName);
// console.log(person.lasName);
// console.log(person.age);
// console.log(person.isEmployed);
// person.sayHello();
// person.sayBye();

// /* ============================ */

// const person1 = {
//     name: "mano",
//     favFood: "miojo",
//     sayOla: function () {
//         console.log(`Meu nome é ${this.name}`);
//     },
//     eat: function () {
//         console.log(`${this.name} está comendo ${this.favFood}`);
//     }
// }

// person1.sayOla();
// person1.eat();

// /* ============================ */

// function Car (make, model, year, color) {
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function () {
//         console.log(`Voce dirige ${this.model}`);
//     }
// }

// const car1 = new Car ("Ford", "Mustang", 2025, "Black");
// console.log(car1);
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive()

// const car2 = new Car ("Chevrolet", "Camaro", 2021, "Blue");
// console.log(car2);
// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive()

// const car3 = new Car ("Dodge", "Charger", 2024, "Green");
// console.log(car3);
// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);
// car3.drive()

// /* ============================ */

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
    
//     displayProduct () {
//         console.log (`Produto: ${this.name}`);
//         console.log (`Preço: R$${this.price.toFixed(2)}`);
//     }
// }

// const prod1 = new Product ("Shirt", 19,99);
// const prod2 = new Product ("Jeans", 39,99);
// const prod3 = new Product ("Bolsa", 1239,99);
// prod1.displayProduct();
// prod2.displayProduct();
// prod3.displayProduct();

// /* ============================ */

// class MathUtil {
//     static PI = 3.14159;
    
//     static getDiameter (radius) {
//         return radius*2;
//     }
//     static getCircunference (radius) {
//         return 2 * this.PI * radius ;
//     }
//     static getArea(radius) {
//         return this.PI * radius * radius ;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getCircunference(10));
// console.log(MathUtil.getCircunference(2));
// console.log(MathUtil.getArea(5));


// class User {
//     static userCount = 0
//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }
// }

// const user1 = new User ("pessoa1");
// const user2 = new User ("pessoa2");
// console.log(user1.username);
// console.log(User.userCount);

// /* ============================ */

// // class Animals {
// //     alive = true;
// //     eat() {
// //         console.log(`This ${this.name} is eating`);
// //     }
// //     sleep() {
// //         console.log(`This ${this.name} is sleeping`);
// //     }
// // }

// // class Rabbit extends Animals {
//     //     name = "Rabbit";
// //     run() {
//     //         console.log(`This ${this.name} is running`);
//     //     }
//     // }
//     // class Fish extends Animals {
//         //     name = "Fish";
//         //     swim() {
//             //         console.log(`This ${this.name} is swimming`);
//             //     }
//             // }
//             // class Dog extends Animals {
//                 //     name = "Dog";
// // }

// // const rabbit = new Rabbit();
// // const fish = new Fish();
// // const dog = new Dog();

// // console.log(rabbit.alive);
// // rabbit.alive = false;
// // console.log(rabbit.alive);

// // rabbit.eat();
// // rabbit.sleep();

// // rabbit.run();
// // fish.swim();

// /* ============================ */

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
    
//     move (speed) {
//         console.log(`The ${this.name} moves at a speed of ${speed} km/h`)
//     }
// }

// class Lebre extends Animal {
//     constructor (name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run () {
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Tuba extends Animal {
//     constructor (name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
    
//     swim () {
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// class Bird extends Animal {
//     constructor (name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
    
//     fly () {
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const lebre = new Lebre("Lebre", 1, 25)
// const tuba = new Tuba("Tubabão", 2, 10)
// const bird = new Bird("Pássaro", 3, 12)

// console.log(tuba.name)
// console.log(tuba.age)
// console.log(tuba.swimSpeed)

// lebre.run();
// tuba.swim();
// bird.fly();

// /* ============================ */

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
    
//     set width(newWidth) {
//         if(newWidth > 0) {
//             // Propriedade privada
//             this._width = newWidth;
//         } else {
//             console.error('Número, meu colega. NÚMERO!')
//         }
//     }

//     set height(newheight) {
//         if(newheight > 0) {
//             // Propriedade privada
//             this._height = newheight;
//         } else {
//             console.error('Número, meu colega. NÚMERO!')
//         }
//     }
    
//     get width () { return this._width.toFixed(1); }
//     get height () { return this._height.toFixed(1); }
// }

// const rectangle = new Rectangle(3, 3);
// console.log(rectangle.width);
// console.log(rectangle.height);

// /* ============================ */

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a,b] = [b,a];
// console.log(a);
// console.log(b);


// const colors = ["red", "green", "blue", "black", "white"];
// console.log(colors);
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);


// const [firstColor, secondColor, thirdColor, ...extraColors] = colors
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// const p1 = {
//     firstNameP: "Spongebob",
//     lasNameP: "SquarePantes",
//     ageP: 30,
//     job: "Fry Cook",
// }

// const p2 = {
//     firstNameP: "Patrick",
//     lasNameP: "Star",
//     ageP: 40,
// }

// const {firstNameP, lasNameP, ageP, job='Unemployed'} = p1;
// console.log(firstNameP);
// console.log(lasNameP);
// console.log(ageP);
// console.log(job);

// function displayPerson ({firstNameP, lasNameP, ageP, job}) {
//     console.log(`name: ${firstNameP}`)
//     console.log(`nickname: ${lasNameP}`)
//     console.log(`age: ${ageP}`)
//     console.log(`job: ${job}`)
// }

// displayPerson(p2)

// console.log("\n/* ============================ */");

// const pP = {
//     fullNameP: 'Nathan Monteiro',
//     aP: 25,
//     isUniStudent: true,
//     hobbies: ["Karate", "Fishing", "Cooking"],
//     address: {
//         street: "Rua Jose Maciel",
//         city: 'Minas Gerais',
//         country: "BH"
//     }
// }

// console.log(pP.fullNameP);
// console.log(pP.aP);
// console.log(pP.isUniStudent);
// console.log(pP.hobbies);
// console.log(pP.hobbies[0]);
// console.log(pP.hobbies[1]);
// console.log(pP.hobbies[2]);
// console.log(pP.address);
// console.log(pP.address.city);
// console.log(pP.address.country);
// console.log(pP.address.street);


// class Person {
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address {
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const pP1 = new Person ("Nathan Monteiro", 25, "124 Conch Street", "Bikini Bottom", "Int. Waters");
// const pP2 = new Person ("Monteiro Nathan", 25, "128 Conch Street", "Bikini Bottom", "Int. Waters");
// const pP3 = new Person ("NM", 35, "126 Conch Street", "Bikini Bottom", "Int. Waters");

// console.log(pP1.name);
// console.log(pP1.age);
// console.log(pP1.address.city);
// console.log(pP1.address.country);
// console.log(pP1.address.street);

// /* ============================ */

// const fruitsA = [
//     {
//         name: "apple", 
//         color: "red", 
//         calories: 95, 
//     },
//     {
//         name: "orange", 
//         color: "orange", 
//         calories: 45, 
//     },
//     {
//         name: "banana", 
//         color: "yellow", 
//         calories: 109, 
//     },
//     {
//         name: "coconut", 
//         color: "white", 
//         calories: 15, 
//     },
//     {
//         name: "pinapple", 
//         color: "yellow", 
//         calories: 37, 
//     },
// ];

// fruitsA.push({
//     name: "grapes", color: "purple", calories: 124
// })

// fruitsA.pop();
// fruitsA.splice(1,3); //Elimina elementos de um valor, até outro

// console.log(fruitsA[0].name)
// console.log(fruitsA[0].color)
// console.log(fruitsA[0].calories)

// for (fruits in fruitsA) {
//     console.log(fruitsA[fruits].color);
//     console.log(fruitsA[fruits].name);
//     console.log(fruitsA[fruits].calories);
//     console.log("=======================================\n")
// }

// fruitsA.forEach(fruit => {
//     console.log(fruit);
// });

// /* ============================ */

// let num = [1,4,2,34,253,1,56,6,78,9,6,54.0];

// num.sort((a,b) => a - b)

// console.log(num)

// /* ============================ */

// const date = new Date();
// console.log(date);
// // const formatedDate = new Date(2024, 0, 1, 2, 3, 4, 5);
// // console.log(formatedDate);

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const mili = date.getMilliseconds();

// date.setFullYear(2000)
// console.log(date);

// console.log("Tempo separado:");
// console.log(`Ano: ${year}`);
// console.log(`Mês: ${month}`);
// console.log(`Dia da semana: ${day}`);
// console.log(`Hora: ${hours}`);
// console.log(`Minuto: ${minutes}`);
// console.log(`Segundo: ${seconds}`);
// console.log(`Milisegundo: ${mili}`);

// /* ============================ */

// function outer () {
//     let message = "hello"
//     function inner () {
//         console.log(message);
//     }
    
//     inner();
// }

// outer();

// /* ============================ */

// function sayOi () {
//     alert("ola");
// }

// // setTimeout(sayOi, 3000)

// // const timeoutId = setTimeout(() => alert("Opa"), 3000)

// // clearTimeout(timeoutId);

// let timeoutId;
// function startTimer () {
//     timeoutId = setTimeout(() => {
//         alert("Fala rapaziada");
//     }, 3000)
//     console.log("ok")
// }

// function clearTimer() {
//     clearTimeout(timeoutId);
//     console.log("fechando")
// } 

// /* ============================ */

// // console.log(PIValue);
// // const circumferenceValue = getCircumference(10);

// // console.log(circumferenceValue);

// /* ============================ */

// // function func1 (callback) {
// //     setTimeout(() => {
// //         console.log("task 1");
// //         callback();
// //     }, 3000);
// // }

// // function func2 () {
// //     console.log("task 2");
// //     console.log("task 3");
// //     console.log("task 4");
// // }

// // func1(func2);

// /* ============================ */

// try {
//     // console.log(xError)
//     if (!xError) {
//         throw new Error("xError não existe");
//     }
// } catch(error) {
//     console.error(error);
// } finally {
//     let a = 2;
//     console.log(a);
// }
// console.log("mas agora chegaste no fim")

// /* ============================ */

// const spaceUp = document.getElementById('myButton');

// spaceUp.addEventListener('mouseover', (event) => {
//     event.target.style.backgroundColor = 'black';
//     event.target.style.color = 'white';

//     event.target.classList.add('big-text');
// });

// spaceUp.addEventListener('mouseout', (event) => {
//     event.target.style.backgroundColor = 'hsl(240, 0%, 52%)';
//     event.target.style.color = 'black';

//     event.target.classList.remove('big-text');
// });

// /* ============================ */

// // Aqui, vamos selecionar todas as classes de .slides que sejam a tag img
// const slides = document.querySelectorAll('.slides img');

// // Index da imagem atual
// let slideIndex = 0;

// // let intervalId = null;

// document.addEventListener('DOMContentLoaded', initializeSlider);

// function initializeSlider() {
//     // Verificando se o tamanho da NodeList é > 0
//     if (slides.length > 0) {
//         // Caso seja, vou adicionar a classe displaySlide na imagem que possui o index atual
//         // Preciso adicionar essa linha para poder mover depois essa class de local, entre as imagens
//         slides[slideIndex].classList.add('displaySlide');

//         // intervalId = setInterval(nextSlide, 5000);
//     }
// }

// function showSlide (index) {
//     if (index >= slides.length) {
//         slideIndex = 0;
//     } else if (index < 0) {
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach(element => {
//         element.classList.remove('displaySlide')
//     });

//     slides[slideIndex].classList.add('displaySlide');
// }

// function prevSlide (index) {
//     slideIndex--;
//     showSlide(slideIndex);
// }

// function nextSlide (index) {
//     slideIndex++;
//     showSlide(slideIndex);
// }


// /* ============================ */

// // 1. walk the dog
// // 2. clean the kitchen
// // 3. take out the trash

// /* Tudo abaixo comentado é callback hell: chamadas assíncronas dentro de outra dentro de outra dentro de outra
// Não queremos isso */
// // function walkTheDog (callback) {
// //     setTimeout(() => {
// //         console.log('You walked the dog!');
// //         callback()
// //     }, 1500)
// // }
// // function cleanTheKitchen (callback) {
// //     setTimeout(() => {
// //         console.log('You cleaned the kitchen!');
// //         callback()
// //     }, 2500)
// // }
// // function takeTrashOut (callback) {
// //     setTimeout(() => {
// //         console.log('You took the trash out!');
// //         callback()
// //     }, 500)
// // }


// // walkTheDog(() => {
// //     cleanTheKitchen(() => {
// //         takeTrashOut(() => { console.log('Finally, you done!') });
// //     })
// // });

// function walkTheDog () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;
//             if (dogWalked) { resolve('You walked the dog!'); }
//             else { reject('You didnt walked the dog!')}
//         }, 1500)
//     })
// }
// function cleanTheKitchen () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cleanedKitchen = true;
//             if (cleanedKitchen) { resolve('You cleaned the kitchen!'); }
//             else { reject('You didnt cleaned the kitchen!'); }
//         }, 2500)
//     })
// }
// function takeTrashOut () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const tookTrash = false;
//             if (tookTrash) { resolve('You took the trash out!'); }
//             else { reject('You didnt took the trash out!'); }
//         }, 500)
//     })
// }

// // walkTheDog().then((value) => { console.log(value); return cleanTheKitchen(); })
// //             .then((value) => { console.log(value); return takeTrashOut(); })
// //             .then((value) => { console.log(value); console.log('Finally, you done!') })
// //             .catch((error) => console.error(error));

// async function doChores () {
//     const walkTheDogResult = await walkTheDog()
//     console.log(walkTheDogResult);
    
//     const cleanedKitchenResult = await cleanTheKitchen();
//     console.log(cleanedKitchenResult);

//     const takeTrashOutResult = await takeTrashOut();
//     console.log(takeTrashOutResult);

//     console.log('Finally!');
// }

// doChores();

// /* ============================ */

// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{
//     "name": "Spongebob",
//     "age": 20,
//     "isEmployed": true,
//     "hobbies": [
//         "Jellyfishing",
//         "Karate",
//         "Cooking"
//     ]
// }`;

// // const jsonString = JSON.stringify(personJson);
// // console.log(jsonString);

// const parsedData = JSON.parse(jsonNames);
// console.log(parsedData)

// /* ============================ */

// // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// //     .then (
// //         response => {
// //             if (!response.ok) {
// //                 throw new Error("Could not fetch resource");
// //             }
// //             return response.json();
// //         }
// //     )
// //     .then (
// //         data => console.log(data.name)
// //     )
// //     .catch (error => console.error(error))

// async function fetchData() {
//     try {
//         const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

//         const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if (!response.ok) { throw new Error("Could not fetch"); }

//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById('pokemonSprite');

//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
//     } catch (error) {
//         console.error(error)
//     }
// }

/* ============================ */

// const internetContent = [
//     {
//         titleActualContent: '2. What is HTTP?',
//         descActualContent: 'Conteúdo resumido do vídeo: What is HTTP and Why Web Is Built On It?, por Hooman Mardox.',
//         contentItself: [
//             "De acordo com o vídeo, HTTP significa HyperText Transfer Protocol. O HyperText é possível entender como os links que estão presentes dentro da página;", 
//             "Então, de forma resumida, HTTP é um protocolo que transfere esses HyperTexts do servidor web para os browsers;"
//         ]
//     },
//     {
//         titleActualContent: '3. What is Domain Name?',
//         descActualContent: 'Conteúdo resumido do vídeo: What is HTTP and Why Web Is Built On It?, por Hooman Mardox.',
//         contentItself: [
//             "Se procurarmos por endereços IP na Internet, veremos uma baita quantidade de números, como 8.8.8.8, 8.8.8.4, e assim por diante. Mas esses número tem um significado. Para o PC. Para nós, não de cara;", 
            
//             "Eles são os nomes dos sites. Mas não vamos ficar sabendo de todos os IPs de cabeça, e é para isso que o DNS (Domain Name Server) serve. QUando digitamos na barra de pesquisa de algum browser, é enviado uma request para o DNS que sai em busca desse nome. Quando o acha, compara com os endereços já registrados e, se compatíveis, retorna a pesquisa (no caso, vai em direção ao site escolhido);"
//         ]
//     },
// ]

// // INTERNET CONTENT
// const containerInternet = document.getElementById('container-internet');
// const containerContentFirst = document.createElement('div');
// containerContentFirst.setAttribute('id', 'container-content-first');

// function renderInternetContent(internetContent) {
//     // Parte inicial
//     const internetTitle = document.createElement('h3');
//     const internetDesc = document.createElement('p');

//     internetTitle.innerHTML = `${internetContent.titleActualContent}`;
//     internetDesc.innerHTML = `${internetContent.descActualContent}`;

//     containerContentFirst.append(internetTitle, internetDesc);

//     console.log(containerContentFirst)
    
//     // Parte de conteúdo
//     const internetUL = document.createElement('ul');
//     internetContent.contentItself.forEach((el) => {
//         const internetLI = document.createElement('li');
//         internetLI.innerHTML = el;
//         internetUL.append(internetLI);
//     });
    
//     containerContentFirst.append(internetUL);
//     containerInternet.append(containerContentFirst);

//     return containerContentFirst;
// }

// function renderAllContent () {
//     internetContent.forEach((el) => {
//         const internetGeneral = renderInternetContent(el);
//         containerContentFirst.appendChild(internetGeneral);
//     });
// }

// document.addEventListener('DOMContentLoaded', () => {
//     renderInternetContent();
// });

// Exemplo para a seção Internet
const internetContent = [
    {
        subtitle: '1. How does the Internet work?',
        desc: 'Conteúdo resumido do vídeo: <a href="https://www.youtube.com/watch?v=7_LPdttKXPc&list=PL3lj-tEZFe119GsMEfGhJlLSOQRQLFBSZ&index=1" target="_blank" class="reference-video">How the Internet Works in 5 Minutes</a>, por <a href="https://www.youtube.com/@AaronTitus" target="_blank" class="channel">Aaron</a>.',
        contentItself: [
            "&rightarrow; Podemos pensar na Internet como um cabo, um fio;",
            
            "&rightarrow; Sendo um cabo, ele está (pelo menos no caso da Internet) debaixo da terra sendo um fio de cobre, por exemplo. Mas também temos os <strong>satélites</strong>, por exemplo;",
            
            "&rightarrow; Além disso, temos <strong>'computadores especiais'</strong>, os <strong>servidores</strong>. São eles que estão diretamente conectados aos <em>wires</em>, além de, dentro deles (os <em>servers</em>), termos <em>hardrives</em> que armazenam as <em>web pages</em>;",
            "&rightarrow; Só que ter apenas isso não faz a comunicação entre tudo acontecer de forma mágia. Precisamos de algo. Com isso, os servidores possuem algo chamado <em>IP</em> (ou <strong>protocolo de Internet</strong>). Se ficar complicado de imaginar, é só pensar em um endereço;",
            
            "&rightarrow; O problema é que, se pesquisarmos, por exemplo, <em>endereços de IP</em>, vamos nos deparar com <strong>72.14.205.100</strong>. E o que é esse valor??? Bom, já que não conseguimos entender esse valor, é dado um nome a ele. Esse nós chamamos de <strong>google.com</strong>;",
            
            "&rightarrow; E para se comunicar entre si, no caso eu e minha tia, por exemplo? Bom, nossos PC's não são conectados diretamente nos <em>wires</em>, então precisamos de um <em>meio termo</em> para isso. Surge então as <strong>ISPs</strong>, <strong>Internet Service Providers</strong>, ou só <strong>Provedores de Internet</strong> (VIVO, TIM, Claro, e por aí vai...). Mandamos mensagens 'por elas', elas mandam 'pela Internet' e chega até o destino;",
            
            "&rightarrow; Lembrando que ela a mensagem não sai inteira do seu PC até o destinatário. Ela é quebrada em <strong><em>packets</em></strong>, ou <strong>pacotes</strong>. No fim, ao ir chegando ao outro cliente (chamamos dessa forma chique mesmo), ela vai se reconstruindo;",

            "&rightarrow; Mas e se eu quiser mandar um email a uma pessoa e, na minha casa, meu pai quiser fazer o mesmo? Meu email não vai colidir com o dele? Na verdade, não. O motivo disso são os <strong>endereços IP</strong> e os <strong>roteadores</strong>. Eles são responsáveis para que isso não ocorra. Para os servidores, eles tem a finalidade de <strong>guiar os pacotes ao seu devido destino</strong>. E como eles fazem isso? Através dos <strong>endereços IP</strong> (são únicos, ok?);"
        ]
    },
    {
        subtitle: '2. What is HTTP?',
        desc: 'Conteúdo resumido do vídeo:. <a href="https://www.youtube.com/watch?v=4_-KdOLZWLs&list=PL3lj-tEZFe119GsMEfGhJlLSOQRQLFBSZ&index=7" target="_blank" class="reference-video">What is HTTP and Why Web Is Built On It?</a>, por <a href="https://www.youtube.com/@hoomanmardox" target="_blank" class="channel">Hooman Mardox</a>',
        contentItself: [
            "&rightarrow; De acordo com o vídeo, HTTP significa <stron>HyperText Transfer Protocol</strong>. O HyperText é possível entender como os <strong><em>links</em></strong> que estão presentes dentro da página;",
            
            "&rightarrow; Então, de forma resumida, HTTP é um protocolo que transfere esses HyperTexts do servidor web para os browsers;"
        ]
    },
    {
        subtitle: '3. What is Domain Name?',
        desc: 'Conteúdo resumido do vídeo: <a href="https://www.youtube.com/watch?v=lMHzpBwPuG8&list=PL3lj-tEZFe119GsMEfGhJlLSOQRQLFBSZ&index=2" target="_blank" class="reference-video">What Is a Domain Name | Domain Names Explained</a>, por <a href="https://www.youtube.com/@HostingerAcademy" target="_blank" class="channel">Hostinger Academy</a>.',
        contentItself: [
            "&rightarrow; Se procurarmos por endereços IP na Internet, veremos uma baita quantidade de números, como 8.8.8.8, 8.8.8.4, e assim por diante. Mas esses número tem um significado. Para o PC. Para nós, não de cara;",
            
            "&rightarrow; Eles são os <strong>nomes dos sites</strong>. Mas não vamos ficar sabendo de todos os IPs de cabeça, e é para isso que o <strong>DNS</strong> (Domain Name Server) serve. QUando digitamos na barra de pesquisa de algum browser, é enviado uma <em>request</em> para o <em>DNS</em> que sai em busca desse nome. Quando o acha, compara com os endereços já registrados e, se compatíveis, retorna a pesquisa (no caso, vai em direção ao site escolhido);"
        ]
    },
    {
        subtitle: '4. What is Hosting?',
        desc: 'Conteúdo resumido (um pouco demais) do vídeo: <a href="https://www.youtube.com/watch?v=EoYkl8rwbiM&list=PL3lj-tEZFe119GsMEfGhJlLSOQRQLFBSZ&index=6" target="_blank" class="reference-video">How Web Browsers Work</a>, por <a href="https://www.youtube.com/@tadaspetra" target="_blank" class="channel">Tadas Petra</a>.',
        contentItself: [
            "&rightarrow; No vídeo, toda a explicação é bem colocada, mas ele menciona a árvore de como o <em>browser</em> funciona, começando na <strong>interface do usuário</strong> até a parte de <strong>networking</strong>, <strong>intérprete de JavaScript</strong>;",

            "&rightarrow; Menciona também sobre o <strong>HTML</strong> ter seu <em>parser</em> inciado e depois ser criado uma árvore dele(caso tenha um <strong>CSS</strong> [vou ver ainda], o processo é o mesmo, mas com um <strong>CSS Parser)</strong> e, caso haja outro arquivo, juntarem para formar a <strong>Render Tree</strong>;"
        ]
    }
];

// Exemplo para a seção HTML
const htmlContent = [
    {
        subtitle: '1. Introduction to HTML',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; HTML significa <strong>Hyper-text Markup Language</strong>. A ideia é que <strong>tags</strong> (essas que estão fazendo o texto ficar em <strong>negrito</strong> ou <em>itálico</em>), também conhecidas como - pasmem - <strong>markups</strong>, são usadas em <em>web browsers</em> para dar <em>display</em> em certos elementos, como por exemplo - pasmem mais uma vez - <strong>todo esse conteúdo</strong>;",

            "&rightarrow; Se ainda não deu para entender, imagine que você queira construir uma casa. O HTML seria a <strong>fundação dela</strong>. E aí entramos com a <strong>CSS</strong> (Cascading Style Sheet), que seria o equivalente às <strong>decorações, design de interiores e cores</strong> da casa."
        ]
    },
    {
        subtitle: '2. HTML Basics',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Essa parte mostra a quantidade de tags de heading para representar o tamanho do cabeçalho, variando do <strong>h1 ao h6</strong>.;",
        ]
    },
    {
        subtitle: '3. Pre-format',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Aqui é como o texto vai se apresentar dentro da tag pre. O que foi colocado (espaço, quebra de linha) é <strong>permanecido</strong>, ao contrário do que seria exatamente nessa li, onde entre esse 1               e esse 2 tem um espaço enorme;"
        ]
    },
    {
        subtitle: '3. Hyperlinks',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Hyperlinks são referências a dados que podemos seguir clicando em um link, como <a href=https://www.google.com/>esse aqui, que vai direto ao Google</a>",
            
            "&rightarrow; Temos também <a href=https://www.google.com/ target='_blank'>o mesmo link</a>, que abre em outra aba;",

            "&rightarrow; Tem mais um, o <a href=https://www.google.com/ title='Opa, cá estou eu, depois de dar um hover em cima deste link incrível!' target='_blank'>esse</a>. Só dar um <em>hover</em> (passar o mouse por cima) que você vai ver;",
            
            "&rightarrow; Como não temos outro arquivo HTML, não faremos a '<em>linkagem</em>' entre eles, mas saiba que existe. O que faremos é mandar um <a href='mailto:test@gmail.com'>email</a>. Ele é falso, mas entra na parte de enviar emails",
        ]
    },
    {
        subtitle: '4. Images',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Usamos a tag img para poder adicionar uma imagem ao nosso site. Dentro dela, há 2 tipos de atributos: <strong>src=''</strong>, que indica de qual caminho que a imagem está vindo e <strong>alt=''</strong>, que permite que, caso a imagem não carregue por algum motivo, haja uma descrição para que o usuário entenda o que havia ali;"
        ]
    },
    {
        subtitle: '5. Audio',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; A seção ensina como controlar o áudio. Algo a se perceber é que, caso o <em>browser</em> não tenha compatibilidade com um certo tipo de áudio, colocamos outra tag <em>source</em> abaixo para substituí-lo caso o primeiro arquivo não exista. Mas é importante usarmos o atributo <em>type</em> para indicar o tipo de áudio que estamos usando;",

            `
                Almost a Year Ago (Sting) - John Deley and the 41 Players
                <audio controls muted loop>
                    <source src='assets/audio/Almost a Year Ago (Sting) - John Deley and the 41 Players.mp3' type='audio/mpeg'>
                </audio>`,

            `
                Ersatz Bossa (Sting) - John Deley and the 41 Players
                <audio controls muted loop>
                    <source src='assets/audio/Ersatz Bossa (Sting) - John Deley and the 41 Players.mp3' type='audio/mpeg'>
                </audio>`,

            `
                Bluesy Vibes (Sting) - Doug Maxwell_Media Right Productions
                <audio controls muted loop>
                    <source src='assets/audio/Bluesy Vibes (Sting) - Doug Maxwell_Media Right Productions.mp3' type='audio/mpeg'>
                </audio>
            `
        ]
    },
    {
        subtitle: '6. Video',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; O mesmo serve para o vídeo (no caso, o que fizemos com o áudio). O diferencial é encapsular o vídeo com uma <em>anchor tag</em>;</li>",
        ]
    },
    {
        subtitle: '7. Favicon',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Esse nós olhamos para a aba em si, a 'figurinha' que fica lá em cima. O importante lembrar são as medidas: <strong>96px X 96px</strong>;",
        ]
    },
    {
        subtitle: '8. Text Formating',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Esse nós olhamos para a aba em si, a 'figurinha' que fica lá em cima. O importante lembrar são as medidas: <strong>96px X 96px</strong>;",
            "&rightarrow; Texto em normal;",
            "&rightarrow; Texto em <strong>negrito</strong>;",
            "&rightarrow; Texto em <em>itálico</em>;",
            "&rightarrow; Texto em <u>underline</u>;",
            "&rightarrow; Texto em <del>deletado</del>;",
            "&rightarrow; Texto em <small>pequeno</small>;",
            "&rightarrow; Texto em <sub>sub</sub>;",
            "&rightarrow; Texto em <sup>sup</sup>;",
            "&rightarrow; Texto em <mark>grifado</mark>;",
        ]
    },
    {
        subtitle: '9; Span & Div',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Primeiro, vamos listar as diferenças entre as duas: <strong>span</strong> é um <strong>contêiner</strong>, mas para propósitos de estilização <em>inline</em>, enquanto a <strong>div</strong> também é um <strong>contêiner</strong>, mas para propósitos de estilização <strong>em bloco</strong>;"
        ]
    },
    {
        subtitle: '10; Tables',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; <strong>table</strong>, para darmos início à tabela;",
            "&rightarrow; <strong>tr</strong>, <em>table row</em>, que é onde colocaremos os <strong>elementos da linha</strong>;",
            "&rightarrow; <strong>th</strong>, <em>table header</em>, que é onde colocaremos os <strong>títulos na linha</strong>;",
            "&rightarrow; <strong>td</strong>, <em>table data</em>, que é onde colocaremos os <strong>dados</strong>. Esses dados estarão <strong>alinhados com os th</strong>;",
            
            `
                <table border='1'>
                    <tr align='center'>
                        <th width='100px'>Seg</th>
                        <th width='100px'>Ter</th>
                        <th width='100px'>Quar</th>
                        <th width='100px'>Quin</th>
                        <th width='100px'>Sex</th>
                        <th width='100px'>Sáb</th>
                        <th width='100px'>Dom</th>
                    </tr>
                    
                    <tr align='center'>
                        <td>X</td>
                        <td>9:00 às 17:00</td>
                        <td>9:00 às 17:00</td>
                        <td>9:00 às 17:00</td>
                        <td>9:00 às 17:00</td>
                        <td>9:00 às 17:00</td>
                        <td>10:00 às 14:00</td>
                    </tr>
                </table>
            `
        ]
    },
    {
        subtitle: '11; Form',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; <strong>action</strong>: depois de preencher o formulário, para onde enviá-lo? O <strong>action</strong> serve para indicar o local. Normalmente, é pelo backend que se faz toda a lógica.",
            
            "&rightarrow; <strong>method</strong>: temos o <strong>GET e POST</strong>, onde POST é usado para <strong>informações confidenciais</strong> (username, senha, etc) e GET para <strong>informações não tão sensíveis</strong>;",
            
            "&rightarrow; <strong>for</strong>: isso é usado normalmente para pessoas com dificuldade visual. Geralmente é o mesmo valor que está dentro da tag;",
            
            "&rightarrow; OBS.: se toda vez que formos acessar um <em>forms</em> tivermos que clicar na caixa de texto, pode não ter problema. Mas caso queiramos acessar a caixa de texto ao clicar em, no caso inicial, 'username', seu respectivo input precisa ter <strong>o mesmo id que o for da label</strong>;",
            
            "&rightarrow; <strong>lenght</strong>: no caso, usamos <em>minlenght</em> ou <em>maxlenght</em>. São usados para delimitar o tamanho de dado (no caso, caracteres) colocado pelo <em>user</em>;",

            "&rightarrow; <strong>name</strong>: pelo menos no sentido dos <strong><em>radio</em></strong>, caso não queiramos que todos fiquem marcados, agrupamos em um conglomerado, usando o <em>name</em>;",

            `
                <form action="" method='post' enctype='multipart/form-data'>
                    <label for='username'>Username:</label>
                    <input type='text' id='username' required minlength='6' maxlength='15' placeholder='Spongebob' autocomplete='username'>
                    
                    <label for='password'>Password:</label>
                    <input type='password' id='password' autocomplete='current-password'><br>
                    
                    <label for='email'>Email:</label>
                    <input type='email' id='email' placeholder='SSquarepants@gmail.com'><br>
                    
                    <label for='phone'>Phone Number</label>
                    <input type='tel' id='phone' placeholder='9 1234-5678' pattern='[9]{1}[0-9]{4}[0-9]{4}'><br>
                    
                    <label for='bday'>Birthday:</label>
                    
                    <input type='date' id='bday'><br>
                    <label for='quantity'>Quantity:</label><input type='number' id='quantity' min='0' max='99' value='1'><br>

                    <label for='title'>Title:</label>
                    <label for='mr'>Mr.:</label>
                    <input type='radio' id='mr' value='Mr.' name='title'>
                    
                    <label for='ms'>MS.:</label>
                    <input type='radio' id='ms' value='Ms.' name='title'>
                    
                    <label for='phd'>Phd:</label>
                    <input type='radio' id='phd' value='Phd' name='title'><br>
                    
                    <label for='payment'>Payment</label>
                    <select id='payment'>
                        <option value='Visa'>Visa</option>
                        <option value='Mastercard'>Mastercard</option>
                        <option value='Express'>Express</option>
                    </select><br>
                    
                    <label for='subscribe'>Subscribe</label>
                    <input type='checkbox' id='subscribe'><br>
                    
                    <label for='comment'></label>
                    <textarea id='comment' rows='3' cols='25'></textarea><br>
                    <label for='file'></label>
                    <input type='file' id='file' accept='image/png, image/jpeg'><br>
                    <input type='reset'><input type='submit'>
                    </form>
                `
        ]
    },
];

// Exemplo para a seção CSS
const cssContent = [
    {
        subtitle: '1. Introduction to CSS',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Para alguns pontos importantes, vamos estar usando <strong>class e id</strong> para podermos separar alguns pontos do conteúdo.",
            "<span id='p1'>&rightarrow; Cor 1</span>",
            "<span id='p2'>&rightarrow; Cor 2</span>",
            "<span id='p3'>&rightarrow; Cor 3</span>",
        ]
    },
    {
        subtitle: '2. Searching',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Muito do conteúdo de CSS é importante para estilização e existe uma gama de conteúdo na internet para aprender. Para principais temas (visão pessoal), o importante é lembrar de <strong>class e id, animations e transitions, pseudo-classes, pseudo-elementos, display (flexbox e grid), positions</strong>, além dos diversos outros."
        ]
    },
];

const jsContent = [
    {
        subtitle: '1. Variables',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Continua sendo o mesmo conceito de: <strong>é um contêiner que armazena um valor</strong>. Para criar uma, em javascript, usamos <strong>let, var ou const</strong>. Lembrando que <strong>Toda variável precisa ser única</strong> (sua declaração, pelo menos), principalmente as <strong>const</const>;",
    
            "&rightarrow; Para saber qual o tipo da variável que estamos usando, usamos <strong>typeof nome_da_variável;</strong> O exemplo pode ser visto na <strong>Dev Tools</strong> (acessamos via <strong>Ctrl+i</strong> ou clicando com o botão esquerdo do mouse na tela e indo até <strong>Inspecionar</strong>;",
    
            "&rightarrow; Agora, <strong>boolean</strong>. Nele, temos apenas 2 valores: <strong>true ou false</strong>;",
        ]
    },
    {
        subtitle: '2. Arithmetic Operators',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Só abrir a <strong>Dev Tools<strong>",
        ]
    },
    {
        subtitle: '3. Accept User Input',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; É uma forma de aceitar dados via teclado do usuário. Usamos para criar formulários, escrever em caixas de texto, e assim por diante. Como exemplo, podemos usar:",
            `
                <li>
                    <label for="">Username: </label>
                    <input type="text" id="myText">
                    <button id="mySubmit">Enviar</button>
                </li>
            `,
            `&rightarrow; Para chegarmos ao resultado alvo que queremos, temos de escrever da seguinte forma:`,
            `
            <pre>let topicUserInputUsername;
let topicUserInputButton = document.getElementById('mySubmit');
topicUserInputButton.addEventListener('click', function () {
    topicUserInputUsername = document.getElementById('myText').value;
    console.log(topicUserInputUsername);
}</pre>
            `,
        ]
    },
    {
        subtitle: '4. Type Convertions',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; Imagine que queremos saber a idade de uma pessoa. Mas normalmente, a entrada de dados é dada por strings, então caso queiramos fazer uma conta, string+number não vai dar certo. Então para fazer uma modificação, podemos usar:",
            
            `<pre>
<strong>let variavel = valor;
    valor = Number(valor);</strong></pre> 
            No caso, é possível colocar como Number(valor), String(valor), Boolean(valor), etc...`,
        ]
    },
    {
        subtitle: '5. Math Objects',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; É um objeto <em>built-in</em> em JS contendo uma coleção de propriedades e objetos matemáticos;",
            "&rightarrow; Por exemplo, em um dos exercícios que fizemos aqui, usamos o valor de <strong><em>PI</em></strong>. Com esse métodos pré-prontos, é so usarmos <strong>console.log(Math.PI)</strong>. Algunn outros exemplos podem ser vistos abaixo:",

            "&rightarrow; <strong>Math.round(valor)</strong>. Se tivermos uma variável, por exemplo, <em>x = 3.4233894</em>, usando esse método o valor novo será <em>x = 3</em>;",
            "&rightarrow; <strong>Math.floor(valor)</strong>. Este arredonda para baixo. <em>x = 3.91</em>, teremos <em>x = 3</em>;",
            "&rightarrow; <strong>Math.ceil(valor)</strong>. Este arredonda para cima. <em>x = 3.91</em>, teremos <em>x = 4</em>;",
            "&rightarrow; <strong>Math.trunc(valor)</strong>. Este elimina todo decimal. <em>x = 3.91</em>, teremos <em>x = 3</em>;",
            "&rightarrow; <strong>Math.pow(valor1, valor2)</strong>. Este pega o 1° e o eleva a potência do 2°. <em>x = 3<sup>2</sup></em>, teremos <em>x = 9</em>;",
            "&rightarrow; <strong>Math.sqrt(valor)</strong>. Este faz a raiz quadrada do valor;",
            "&rightarrow; <strong>Math.log(valor)</strong>. Este acha o log natural do valor;",
            "&rightarrow; <strong>Math.sin(valor)</strong>. Este acha o seno do valor;",
            "&rightarrow; <strong>Math.cos(valor)</strong>. Este acha o cosseno do valor;",
            "&rightarrow; <strong>Math.tan(valor)</strong>. Este acha a tangente do valor;",
            "&rightarrow; <strong>Math.abs(valor)</strong>. Este acha o valor absoluto;",
            "&rightarrow; <strong>Math.sign(valor)</strong>. Este acha o sinal do valor (-2. Sinal: -1 // 2. Sinal: 1 // 0. Sinal: 0);",
            "&rightarrow; <strong>Math.max(valor)</strong>. Este acha o valor máximo dentre os que foram passados por um parâmetro. <em>let max = Math.max(valor1, valor2, valor3)</em>, teremos o valor mais alto dentre eles. O <strong>Math.min(valor)</strong> é o contrário;",
        ]
    },
];

// Função para renderizar qualquer conteúdo (Internet, HTML, CSS, etc.)
function renderSectionContent(contentArray, containerId) {
    const container = document.getElementById(containerId);

    contentArray.forEach(block => {
        // Subtítulo
        const h3 = document.createElement('h3');
        h3.classList.add('subtitle');
        h3.innerHTML = block.subtitle;
        container.appendChild(h3);

        // Descrição
        const p = document.createElement('p');
        p.classList.add('reference-study-link');
        p.innerHTML = block.desc;
        container.appendChild(p);

        // Lista de conteúdo
        const ul = document.createElement('ul');
        ul.classList.add('holder-list');
        block.contentItself.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-item')
            li.innerHTML = item;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    });
}

// Exemplo de uso: renderizar a seção Internet ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderSectionContent(internetContent, 'container-internet');
    renderSectionContent(htmlContent, 'container-html');
    renderSectionContent(cssContent, 'container-css');
    renderSectionContent(jsContent, 'container-js');
});