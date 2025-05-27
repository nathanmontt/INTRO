// // import mathUtil from "./js/mathUtil.js";

// console.log("Hello world");
// // window.alert(`Eu gosto de pizza!`);

// document.getElementById('myP').textContent = `Texto teste para adicionar conteúdo por meio de JS`;

// /* ============================ */

// let age = 25;
// console.log(`Você tem ${age} anos!`);
// console.log(`age é do tipo: ${typeof age}`);

// let price = 10.99;
// console.log(`O preço é de R$${price}`);
// console.log(`price é do tipo: ${typeof price}`);

// let gpa = 2.1;
// console.log(`Nem sei o que é isso: ${gpa}`);
// console.log(`gpa é do tipo: ${typeof gpa}`);

// let firstName = "James";
// console.log(`Seu nome é: ${firstName}`);
// console.log(`firstName é do tipo: ${typeof firstName}`);

// let online = false;
// console.log(`Você está online? ${online}`);
// console.log(`online é do tipo: ${typeof online}`);

// let fullName = "Nathan Monteiro";
// let personAge = 25;
// let isPersonUniStudent = true;

// document.getElementById('personName').innerHTML = `&rightarrow; Seu nome é: ${fullName}. O tipo da variável fullName é <span class="specific-style">${typeof fullName}</span>;`;

// document.getElementById('personAge').innerHTML = `&rightarrow; Sua idade é: ${personAge} O tipo da variável personAge é <span class="specific-style">${typeof personAge}</span>;`;

// document.getElementById('isPersonStudent').innerHTML = `&rightarrow; É um estudante? ${isPersonUniStudent} O tipo da variável isPersonUniStudent é <span class="specific-style">${typeof isPersonUniStudent}</span>;`;

// /* ============================ */

// let students = 30;
// // Operadores normais
// // students = students + 1;
// // students = students - 1;
// // students = students * 2;
// // students = students / 2;

// // students = students ** 2;
// // students = students % 2;

// // students += 1;
// // students -= 1;
// // students *= 1;
// // students /= 2;
// // students **= 2;
// // students %= 2;

// /* INCREMENTO E DECREMENTO */
// // students++;
// // students--;
// console.log(`A quantidade de estudantes na sala atualamente é: ${students}`);

// /* ============================ */

// let username;
// document.getElementById('mySubmit').onclick = function () {
//     username = document.getElementById('myText').value;
//     console.log(username);
// }

// /* ============================ */

// // let agePerson = window.prompt('Idade:');
// // agePerson = Number(agePerson);
// // agePerson += 2;

// // console.log(`Sua idade é ${agePerson} e seu tipo é ${typeof agePerson}`);

// /* ============================ */

// const PI = 3.14159;
// let radius;
// let circumference;
// document.getElementById('myBtn').onclick = function () {
//     radius = document.getElementById('myTextRadius').value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;

//     document.getElementById('response').innerHTML = `O valor da circunferência é ${circumference}cm`;
// }

// /* ============================ */

// console.log(Math.PI);
// console.log(Math.E);

// let x = 3.21;
// let x2 = 3.91;
// let y = 2;
// let y2 = -2;
// let z;

// console.log(`O valor de x arredondado é: ${Math.round(x)}`);
// console.log(`O valor de x2 arredondado pra baixo é: ${Math.floor(x2)}`);
// console.log(`O valor de x arredondado pra cima é: ${Math.ceil(x)}`);
// console.log(`O valor de x2 sem decimal é: ${Math.trunc(x2)}`);
// console.log(`O valor de x2 elevado à x é: ${Math.pow(x2, x)}`);
// console.log(`A raiz quadrada de y é: ${Math.sqrt(y)}`);
// console.log(`O log de y é: ${Math.log(y)}`);
// console.log(`O seno de y é: ${Math.sin(y)}`);
// console.log(`O cosseno de y é: ${Math.cos(y)}`);
// console.log(`A tangente de y é: ${Math.tan(y)}`);
// console.log(`O absoluto de y2 é: ${Math.abs(y2)}`);
// console.log(`O sinal de y2 é: ${Math.sign(y2)}`);
// console.log(`O valor máximo de y2 é: ${Math.max(x,x2,y,y2)}`);
// console.log(`O valor mínimo de y2 é: ${Math.min(x,x2,y,y2)}`);

// /* ============================ */

// let time = 14;

// if (time < 12) {
//     console.log("Good Morning!");
// } else {
//     console.log("Good Afternoon!");
// }

// let isStudent = true;

// if (isStudent) {
//     console.log("You are enroled!");
// } else if(!isStudent) {
//     console.log("You aren't enroled!");
// }

// const myH3Title = document.getElementById('my-h3-title');
// const driveOrDontTextBox = document.getElementById('drive-or-dont-textbox');
// const btnSub = document.getElementById('mySub');
// const resultElement = document.getElementById('result-element');
// let ageOnePerson;

// btnSub.onclick = function () {
//     // Precisamos pegar a idade pela textbox e ARMAZENÁ-LA DENTRO DE UMA VARIÁVEL
//     // Mas lembrando que quando pegamos o valor, ele está em STRING. Para fazermos a verificação com os NÚMEROS, precisamos mudar o tipo da variável para NUMBER
//     ageOnePerson = driveOrDontTextBox.value;
//     ageOnePerson = Number(ageOnePerson);

//     if (ageOnePerson == 0) {
//         resultElement.textContent = `Com ${ageOnePerson} anos, você nem nascido é! Sai daqui! Xô!`;
//     } else if (ageOnePerson >= 1 && ageOnePerson <=10) {
//         resultElement.textContent = `Com ${ageOnePerson} anos, ainda não tá bom. Pode ir vazando!`;
//     } else if (ageOnePerson >= 11 && ageOnePerson <= 17) {
//         resultElement.textContent = `Com ${ageOnePerson} anos, tu tá quase lá!`;
//     } else if (ageOnePerson >= 18 && ageOnePerson <= 99) {
//         resultElement.textContent = `Com ${ageOnePerson} anos, agora sim! Já pode ser preso!`;
//     } else if (ageOnePerson >= 100) {
//         resultElement.textContent = `Com ${ageOnePerson} anos, virou imortal, é?! Sai daqui, vampiro!`;
//     }
// }

// /* ============================ */

// let pAge = 25;
// let resultMessage = pAge >= 18 ? "Adulto" : "Menor de idade";
// console.log(resultMessage);

// let purchase = 101;
// let resultPurch = purchase > 100 ? 'Você ganhou um desconto de 10%!' : 'Os requisitos para o desconto não foram antendidos!';
// console.log(resultPurch);

// /* ============================ */

// let days = "pizza";

// switch (days) {
//     case 1:
//         console.log('Domingo');
//         break;
//         case 2:
//         console.log('Segunda');
//         break;
//     case 3:
//         console.log('Terça');
//         break;
//     case 4:
//         console.log('Quarta');
//         break;
//         case 5:
//             console.log('Quinta');
//         break;
//         case 6:
//         console.log('Sexta');
//         break;
//         case 7:
//         console.log('Sábado');
//         break;
//     default:
//         console.log(`${days} não é um dia!`)
//     }


// let testScore = 40;
// let letterGrade;

// switch(true) {
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//         case testScore >= 80:
//             letterGrade = "B";
//             break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//         case testScore >= 50:
//         letterGrade = "E";
//         break;
//         case testScore >= 40:
//         letterGrade = "F";
//         break;
// }

// console.log(letterGrade);

// /* ============================ */

// let userName = "Nathan  ";

// console.log(userName.charAt(2));
// console.log(userName.indexOf("a"));
// console.log(userName.lastIndexOf("a"));
// console.log(userName.length);
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLocaleLowerCase());
// console.log(userName.repeat(5));
// console.log(userName.startsWith('N'));
// console.log(userName.endsWith('n'));
// console.log(userName.includes(" "));

// let phoneNumber = "21 9-1234-5678"

// console.log(phoneNumber.replaceAll("-", ""));
// console.log(phoneNumber.padStart(32, "9"));
// console.log(phoneNumber.padEnd(32, "9"));

// /* ============================ */

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
        subtitle: '2. What is HTTP?',
        desc: 'Conteúdo resumido do vídeo: What is HTTP and Why Web Is Built On It?, por Hooman Mardox.',
        contentItself: [
            "De acordo com o vídeo, HTTP significa HyperText Transfer Protocol. O HyperText é possível entender como os links que estão presentes dentro da página;",
            "Então, de forma resumida, HTTP é um protocolo que transfere esses HyperTexts do servidor web para os browsers;"
        ]
    },
    {
        subtitle: '3. What is Domain Name?',
        desc: 'Conteúdo resumido do vídeo: What is HTTP and Why Web Is Built On It?, por Hooman Mardox.',
        contentItself: [
            "Se procurarmos por endereços IP na Internet, veremos uma baita quantidade de números, como 8.8.8.8, 8.8.8.4, e assim por diante. Mas esses número tem um significado. Para o PC. Para nós, não de cara;",
            "Eles são os nomes dos sites. Mas não vamos ficar sabendo de todos os IPs de cabeça, e é para isso que o DNS (Domain Name Server) serve. QUando digitamos na barra de pesquisa de algum browser, é enviado uma request para o DNS que sai em busca desse nome. Quando o acha, compara com os endereços já registrados e, se compatíveis, retorna a pesquisa (no caso, vai em direção ao site escolhido);"
        ]
    }
    // ...adicione mais blocos conforme necessário
];

// Exemplo para a seção HTML
const htmlContent = [
    {
        subtitle: '1. Introduction to HTML',
        desc: 'Conteúdo estudado do canal: Bro Code.',
        contentItself: [
            "HTML significa Hyper-text Markup Language. A ideia é que tags são usadas em web browsers para dar display em certos elementos.",
            "Se ainda não deu para entender, imagine que você queira construir uma casa. O HTML seria a fundação dela."
        ]
    },
    // ...adicione mais blocos conforme necessário
];

// Exemplo para a seção CSS
const cssContent = [
    {
        subtitle: '1. Introduction to CSS',
        desc: 'Conteúdo estudado do canal: Bro Code.',
        contentItself: [
            "CSS significa Cascading Style Sheets. Serve para estilizar elementos HTML.",
            "Você pode mudar cores, fontes, espaçamentos, etc."
        ]
    },
    // ...adicione mais blocos conforme necessário
];

// Função para renderizar qualquer conteúdo (Internet, HTML, CSS, etc.)
function renderSectionContent(contentArray, containerId) {
    const container = document.getElementById(containerId);
    // Remove tudo, menos o título (h1)
    // container.innerHTML = `<h1>${container.querySelector('h1') ? container.querySelector('h1').textContent : ''}</h1>`;

    contentArray.forEach(block => {
        // Subtítulo
        const h3 = document.createElement('h3');
        h3.textContent = block.subtitle;
        container.appendChild(h3);

        // Descrição
        const p = document.createElement('p');
        p.textContent = block.desc;
        container.appendChild(p);

        // Lista de conteúdo
        const ul = document.createElement('ul');
        block.contentItself.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    });
}

// Exemplo de uso: renderizar a seção Internet ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderSectionContent(internetContent, 'container-internet');
    // Para HTML: renderSectionContent(htmlContent, 'container-html');
    // Para CSS: renderSectionContent(cssContent, 'container-css');
});