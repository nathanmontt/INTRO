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

let gpa = 2.1
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
console.log(`A quantidade de estudantes na sala atualamente é: ${students}`)

/* ============================ */

let username;
document.getElementById('mySubmit').onclick = function () {
    username = document.getElementById('myText').value;
    console.log(username)
}

/* ============================ */

// let agePerson = window.prompt('Idade:')
// agePerson = Number(agePerson);
// agePerson += 2;

// console.log(`Sua idade é ${agePerson} e seu tipo é ${typeof agePerson}`);

/* ============================ */

const PI = 3.14159;
let radius;
let circumference;
document.getElementById('myBtn').onclick = function () {
    radius = document.getElementById('myTextRadius').value
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById('response').innerHTML = `O valor da circunferência é ${circumference}cm`;
}

/* ============================ */

console.log(Math.PI)
console.log(Math.E)

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
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */
/* ============================ */