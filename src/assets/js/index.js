console.log("Hello world");
// window.alert(`Eu gosto de pizza!`);

document.getElementById('myP').textContent = `Texto teste para adicionar conteúdo por meio de JS`;

/* ============================ */

let age = 25;
console.log(`Você tem ${age} anos!`);
console.log(`age é do tipo: ${typeof age}`);

let price = 10.99;
console.log(`O preço é de R$${price}`);
console.log(`price é do tipo: ${typeof price}`);

let gpa = 2.1;
console.log(`Nem sei o que é isso: ${gpa}`);
console.log(`gpa é do tipo: ${typeof gpa}`);

let firstName = "James";
console.log(`Seu nome é: ${firstName}`);
console.log(`firstName é do tipo: ${typeof firstName}`);

let online = false;
console.log(`Você está online? ${online}`);
console.log(`online é do tipo: ${typeof online}`);

let fullName = "Nathan Monteiro";
let personAge = 25;
let isPersonUniStudent = true;

document.getElementById('personName').innerHTML = `&rightarrow; Seu nome é: ${fullName}. O tipo da variável fullName é <span class="specific-style">${typeof fullName}</span>;`;

document.getElementById('personAge').innerHTML = `&rightarrow; Sua idade é: ${personAge} O tipo da variável personAge é <span class="specific-style">${typeof personAge}</span>;`;

document.getElementById('isPersonStudent').innerHTML = `&rightarrow; É um estudante? ${isPersonUniStudent} O tipo da variável isPersonUniStudent é <span class="specific-style">${typeof isPersonUniStudent}</span>;`;

/* ============================ */

let students = 30;
// Operadores normais
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;

// students = students ** 2;
// students = students % 2;

// students += 1;
// students -= 1;
// students *= 1;
// students /= 2;
// students **= 2;
// students %= 2;

/* INCREMENTO E DECREMENTO */
// students++;
// students--;
console.log(`A quantidade de estudantes na sala atualamente é: ${students}`);

/* ============================ */

let username;
document.getElementById('mySubmit').onclick = function () {
    username = document.getElementById('myText').value;
    console.log(username);
}

/* ============================ */

// let agePerson = window.prompt('Idade:');
// agePerson = Number(agePerson);
// agePerson += 2;

// console.log(`Sua idade é ${agePerson} e seu tipo é ${typeof agePerson}`);

/* ============================ */

const PI = 3.14159;
let radius;
let circumference;
document.getElementById('myBtn').onclick = function () {
    radius = document.getElementById('myTextRadius').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById('response').innerHTML = `O valor da circunferência é ${circumference}cm`;
}

/* ============================ */

console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let x2 = 3.91;
let y = 2;
let y2 = -2;
let z;

console.log(`O valor de x arredondado é: ${Math.round(x)}`);
console.log(`O valor de x2 arredondado pra baixo é: ${Math.floor(x2)}`);
console.log(`O valor de x arredondado pra cima é: ${Math.ceil(x)}`);
console.log(`O valor de x2 sem decimal é: ${Math.trunc(x2)}`);
console.log(`O valor de x2 elevado à x é: ${Math.pow(x2, x)}`);
console.log(`A raiz quadrada de y é: ${Math.sqrt(y)}`);
console.log(`O log de y é: ${Math.log(y)}`);
console.log(`O seno de y é: ${Math.sin(y)}`);
console.log(`O cosseno de y é: ${Math.cos(y)}`);
console.log(`A tangente de y é: ${Math.tan(y)}`);
console.log(`O absoluto de y2 é: ${Math.abs(y2)}`);
console.log(`O sinal de y2 é: ${Math.sign(y2)}`);
console.log(`O valor máximo de y2 é: ${Math.max(x,x2,y,y2)}`);
console.log(`O valor mínimo de y2 é: ${Math.min(x,x2,y,y2)}`);

/* ============================ */

let time = 14;

if (time < 12) {
    console.log("Good Morning!");
} else {
    console.log("Good Afternoon!");
}

let isStudent = true;

if (isStudent) {
    console.log("You are enroled!");
} else if(!isStudent) {
    console.log("You aren't enroled!");
}

const myH3Title = document.getElementById('my-h3-title');
const driveOrDontTextBox = document.getElementById('drive-or-dont-textbox');
const btnSub = document.getElementById('mySub');
const resultElement = document.getElementById('result-element');
let ageOnePerson;

btnSub.onclick = function () {
    // Precisamos pegar a idade pela textbox e ARMAZENÁ-LA DENTRO DE UMA VARIÁVEL
    // Mas lembrando que quando pegamos o valor, ele está em STRING. Para fazermos a verificação com os NÚMEROS, precisamos mudar o tipo da variável para NUMBER
    ageOnePerson = driveOrDontTextBox.value;
    ageOnePerson = Number(ageOnePerson);

    if (ageOnePerson == 0) {
        resultElement.textContent = `Com ${ageOnePerson} anos, você nem nascido é! Sai daqui! Xô!`;
    } else if (ageOnePerson >= 1 && ageOnePerson <=10) {
        resultElement.textContent = `Com ${ageOnePerson} anos, ainda não tá bom. Pode ir vazando!`;
    } else if (ageOnePerson >= 11 && ageOnePerson <= 17) {
        resultElement.textContent = `Com ${ageOnePerson} anos, tu tá quase lá!`;
    } else if (ageOnePerson >= 18 && ageOnePerson <= 99) {
        resultElement.textContent = `Com ${ageOnePerson} anos, agora sim! Já pode ser preso!`;
    } else if (ageOnePerson >= 100) {
        resultElement.textContent = `Com ${ageOnePerson} anos, virou imortal, é?! Sai daqui, vampiro!`;
    }
}

/* ============================ */

let pAge = 25;
let resultMessage = pAge >= 18 ? "Adulto" : "Menor de idade";
console.log(resultMessage);

let purchase = 101;
let resultPurch = purchase > 100 ? 'Você ganhou um desconto de 10%!' : 'Os requisitos para o desconto não foram antendidos!';
console.log(resultPurch);

/* ============================ */

let day = "pizza";

switch (day) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log(`${day} não é um dia!`)
}


let testScore = 40;
let letterGrade;

switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    case testScore >= 50:
        letterGrade = "E";
        break;
    case testScore >= 40:
        letterGrade = "F";
        break;
}

console.log(letterGrade);

/* ============================ */

let userName = "Nathan  ";

console.log(userName.charAt(2));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
console.log(userName.repeat(5));
console.log(userName.startsWith('N'));
console.log(userName.endsWith('n'));
console.log(userName.includes(" "));

let phoneNumber = "21 9-1234-5678"

console.log(phoneNumber.replaceAll("-", ""));
console.log(phoneNumber.padStart(32, "9"));
console.log(phoneNumber.padEnd(32, "9"));

/* ============================ */

const entireName = "Nathan de Andrade Monteiro da Silva";

// let entireFirstName = entireName.slice(0, 6);
// console.log(entireFirstName);

// let entireLastName = entireName.slice(10, 17);
// console.log(entireLastName);

let lastChar = entireName.slice(-5);
console.log(lastChar);

let entireFirstName = entireName.slice(0, entireName.indexOf(" "));
console.log(entireFirstName);
let entireLastName = entireName.slice(entireName.indexOf(" "));
// let entireLastName = entireName.slice(entireName.indexOf(" ") + 1); aqui é para retirar o espaço
console.log(entireLastName);


/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */