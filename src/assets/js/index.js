'use strict'

// import mathUtil from "./js/mathUtil.js";

/* ----- VARIABLES ----- */
{   
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
    getTopicVarPersonFullNameFromHtml.innerHTML = `&rightarrow; Seu nome é: ${topicVariableFullName}. O tipo da variável fullName é <strong>${typeof topicVariableFullName}</strong>; <br>`;

    const getTopicVarPersonAge = document.getElementById('topicVariablePersonAge');
    getTopicVarPersonAge.innerHTML = `&rightarrow; Sua idade é: ${topicVariablePersonAge} O tipo da variável topicVariablePersonAge é <strong>${typeof topicVariablePersonAge}</strong>; <br>`;

    const getTopicIsPersonStudent = document.getElementById('topicVariableIsPersonUniStudent');
    getTopicIsPersonStudent.innerHTML = `&rightarrow; É um estudante? ${topicVariableIsPersonUniStudent} O tipo da variável topicVariableIsPersonUniStudent é <strong>${typeof topicVariableIsPersonUniStudent}</strong>;`;
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- ARITHMETIC OPERATORS ----- */
{
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
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- USER INPUT ----- */
{
    let topicUserInputUsername;
    let topicUserInputBtnCta = document.getElementById('topicUserInputBtnCta');
    topicUserInputBtnCta.onclick = function () {
        topicUserInputUsername = document.getElementById('topicUserInputmyText').value;
        console.log(topicUserInputUsername);
    }
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- MATH OBJECTS ----- */
{
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
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- STRING METHODS ----- */
{
    const topicStringMethodEntireName = "Nathan de Andrade Monteiro da Silva";

    // first name
    let topicStringMethodEntireFirstNameFirstAttempt = topicStringMethodEntireName.slice(0, 6);
    console.log(topicStringMethodEntireFirstNameFirstAttempt);

    let topicStringMethodEntireFirstNameSecAttempt = topicStringMethodEntireName.slice(0, topicStringMethodEntireName.indexOf(" "));
    console.log(topicStringMethodEntireFirstNameSecAttempt);

    // last name
    let topicStringMethodEntireLastNameFirstAttempt = topicStringMethodEntireName.slice(10, 17);
    console.log(topicStringMethodEntireLastNameFirstAttempt);

    let topicStringMethodEntireLastNameSecAttempt = topicStringMethodEntireName.slice(topicStringMethodEntireName.indexOf(" "));
    console.log(topicStringMethodEntireLastNameSecAttempt);

    let topicStringMethodEntireLastNameThirdAttempt = topicStringMethodEntireName.slice(topicStringMethodEntireName.indexOf(" ") + 1);
    console.log(topicStringMethodEntireLastNameThirdAttempt);

    let lastChar = topicStringMethodEntireName.slice(-5);
    console.log(lastChar);
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- METHOD CHAINING ----- */
{
    // Para poder testar, troque o valor de variable para 1
    let variable = 0;

    if (variable === 1) {
        let topicMethodChainingEnterName = window.prompt("Entre com o nome: ");

        /* -- sem method chaining -- */
        topicMethodChainingEnterName = topicMethodChainingEnterName.trim();
        let topicMethodChainingLetter = topicMethodChainingEnterName.charAt(0)
        topicMethodChainingLetter = topicMethodChainingLetter.toUpperCase();
        
        let topicMethodChainingExtraChars = topicMethodChainingEnterName.slice(1);
        topicMethodChainingExtraChars = topicMethodChainingExtraChars.toLowerCase()
        topicMethodChainingEnterName = letter + topicMethodChainingExtraChars;
        console.log(topicMethodChainingEnterName);
        
        
        /* -- com method chaining -- */
        
        topicMethodChainingEnterName = topicMethodChainingEnterName.trim().charAt(0).toUpperCase() + topicMethodChainingEnterName.trim().slice(1).replaceAll(" ", "").toLowerCase();
        console.log(topicMethodChainingEnterName);
    }

    /*
        Primeiro, pegamos o nome;
        Tiramos todos os espaços em branco;
        Pegamos o primeiro char;
        Transformamos ele em upper;

        Concatemamos com o resto da palavra, já que só fizemos isso com o primeiro char (charAt(0));
        eliminamos todos os espaços novamente;
        Damos um slice, já que não queremos a primeira letra mais;
        Deixamos o resto em lower;
    */
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- ITERATION LOOP ----- */
{
    let variable2 = 2;
    if (variable2 === 1) {
        const topicIterationMinNum = 1;
        const topicIterationMaxNum = 10;
        const topicIterationAnswer = Math.floor(Math.random() * (topicIterationMaxNum - topicIterationMinNum + 1)) + topicIterationMinNum;
        console.log(topicIterationAnswer);
            
        let topicIterationAttempts = 0;
        let topicIterationGuess;
        let topicIterationRunning = true;

        while (topicIterationRunning) {
            topicIterationGuess = prompt(`Guess a number between ${topicIterationMinNum} and ${topicIterationMaxNum}`)
            topicIterationGuess = Number(topicIterationGuess);

            if(isNaN(topicIterationGuess)) {
                window.alert("Please enter a number!")
            } else if (topicIterationGuess < topicIterationMinNum || topicIterationGuess > topicIterationMaxNum) {
                window.alert("Please enter a valid number!")
            } else {
                topicIterationAttempts++;
                if (topicIterationGuess < topicIterationAnswer) {
                    window.alert("TOO LOW. TRY AGAIN!")
                } else if (topicIterationGuess > topicIterationAnswer) {
                    window.alert("TOO HIGH. TRY AGAIN!")
                } else {
                    window.alert(`CORRECT! The number was ${topicIterationAnswer} and it took you ${topicIterationAttempts} attempts!`);
                    topicIterationRunning = false;
                }
            }
        }
    }
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- FUNCTION ----- */
{
    function topicFunctionBirthday (person, agePerson) {
        console.log(`Feliz Aniversário, ${person}! Hoje você está fazendo ${agePerson} anos!`)
    }
    topicFunctionBirthday("Nathan", 25);

    function topicFunctionAdd (x, y) {
        let result = x + y;
        return result;
    }
    function topicFunctionSub (x, y) {
        let result = x - y;
        return result;
    }
    function topicFunctionMult (x, y) {
        let result = x * y;
        return result;
    }
    function topicFunctionDiv (x, y) {
        let result = x / y;
        return result;
    }
    function topicFunctionIsEven (number) {
        return number%2 === 0 ? true : false;
    }

    console.log(topicFunctionAdd(2,3));
    console.log(topicFunctionSub(2,3));
    console.log(topicFunctionMult(2,3));
    console.log(topicFunctionDiv(2,3));
    console.log(topicFunctionIsEven(3));
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- ARRAYS ----- */
{
    let topicArraysFruits = ["Apple", "Orange", "Banana", "Strawberry", "Mirtilo", "Grapes"];
    topicArraysFruits.push("Coconut");
    topicArraysFruits.pop();
    topicArraysFruits.unshift("Mango");
    topicArraysFruits.shift();
    console.log(topicArraysFruits.length);

    console.log(`Antes de dar .sort(): ${topicArraysFruits}`);

    topicArraysFruits.sort();
    console.log(`Depois de dar .sort(): ${topicArraysFruits.sort()}`);

    topicArraysFruits.sort();
    console.log(`Depois de dar .sort().reverse(): ${topicArraysFruits.sort().reverse()}`);

    for (let i=0 ; i<topicArraysFruits.length ; i++) {
        console.log(topicArraysFruits[i]);
    }

    console.log(topicArraysFruits[0]);
    console.log(topicArraysFruits[1]);
    console.log(topicArraysFruits[2]);
    console.log(topicArraysFruits[3]);
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- SPREAD ----- */
{
    let topicSpreadNumbers = [1, 2, 3, 4, 5];
    let topicSpreadMax = Math.max(...topicSpreadNumbers)
    let topicSpreadMin = Math.min(...topicSpreadNumbers)
    console.log(topicSpreadMax);
    console.log(topicSpreadMin);


    let topicSpreadUser = "Nathan Monteiro"
    let topicSpreadLetters = [...topicSpreadUser].join("-");
    console.log(topicSpreadLetters);

    let topicSpreadFruit = ["Apple", "Orange", "Banana"];
    let topicSpreadVegetables = ["Carrots", "Celery", "Potatoes"];
    console.log(topicSpreadFruit);

    let topicSpreadFoods = [...topicSpreadFruit, ...topicSpreadVegetables, "Eggs", "Milk"];
    console.log(topicSpreadFoods);
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- REST ----- */
{
    const topicRestFood1 = "pizza";
    const topicRestFood2 = "hamburguer";
    const topicRestFood3 = "hot dog";
    const topicRestFood4 = "sushi";
    const topicRestFood5 = "ramen";

    function topicRestOpenFridge(...foods) {
        console.log(foods)
    }

    topicRestOpenFridge(
        topicRestFood1, 
        topicRestFood2, 
        topicRestFood3, 
        topicRestFood4, 
        topicRestFood5
    )


    function topicRestSum(...sumNumbers) {
        let resultSum = 0
        for (let i=0 ; i<sumNumbers.length ; i++) {
            resultSum += sumNumbers[i];
        }
        return resultSum;
    }

    const topicRestTotal = topicRestSum(2,3,4,5,6);
    console.log(topicRestTotal)
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- CALLBACK ----- */
{
    topicCallbackHello(topicCallbackWait);

    function topicCallbackHello (callback) {
        console.log("hello");
        callback();
    }
        
    function topicCallbackLeave () { console.log("leave"); }
    function topicCallbackWait () { console.log("wait"); }
    function topicCallbackGoodbye () { console.log("goodbye"); }

    topicCallbackSoma(topicCallbackDisplayResults, 2, 3);

    function topicCallbackSoma (callback, x, y) {
        let result = x+y;
        callback(result);
    }
    function topicCallbackDisplayResults (result) {
        console.log(result);
    }
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- FOREACH() ----- */
{
    let topicForEachnumbersArray = [1, 2, 3, 4, 5];
    topicForEachnumbersArray.forEach(topicForEachDouble);
    topicForEachnumbersArray.forEach(topicForEachTriple);
    topicForEachnumbersArray.forEach(topicForEachSquare);
    topicForEachnumbersArray.forEach(topicForEachCube);
    topicForEachnumbersArray.forEach(topicForEachDisplay);

    function topicForEachDouble(element, index, array) { array[index] = element * 2; }
    function topicForEachTriple(element, index, array) { array[index] = element * 3; }
    function topicForEachSquare(element, index, array) { array[index] = Math.pow(element, 2); }
    function topicForEachCube(element, index, array) { array[index] = Math.pow(element, 3); }
    function topicForEachDisplay (element) { console.log(element); }

    let topicForEachFruitsArray = ["Apple", "Orange", "Banana", "Coconut"];

    topicForEachFruitsArray.forEach(display);

    function display(element) { console.log(element); }
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- FILTER ----- */
{
    let topicFilterN = [1,2,3,4,5,6,7];
    let topicFilterEvenNums = topicFilterN.filter(topicFilterIsEven);
    console.log(topicFilterEvenNums);

    function topicFilterIsEven(el) { return el%2 === 0; }
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- REDUCE ----- */
{
    const topicReducePrices = [5, 30, 10, 25, 15, 20];
    const topicReduceTotalPrice = topicReducePrices.reduce(topicReduceSumPrice);

    console.log(topicReduceTotalPrice.toFixed(2));

    function topicReduceSumPrice (accumulator, elements) {
        return accumulator + elements;
    }

    const topicReduceGrades = [75, 50, 90, 80, 65, 95]
    const topicReduceMaxGrades = topicReduceGrades.reduce(topicReduceMinGradesGetMax);
    const topicReduceMinGrades = topicReduceGrades.reduce(topicReduceMinGradesGetMin);

    console.log(topicReduceMaxGrades);
    console.log(topicReduceMinGrades);

    function topicReduceMinGradesGetMax(accumulator, element) { return Math.max(accumulator, element); }

    function topicReduceMinGradesGetMin(accumulator, element) { return Math.min(accumulator, element); }
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- OBJECTS ----- */
{
    const topicObjectPerson = {
        topicObjectFirstName: "Nathan",
        topicObjectLastName: "Monteiro",
        topicObjectAge: 30,
        topicObjectIsEmployed: false,
        topicObjectSayHello: function () { console.log("Hellooo!"); },
        topicObjectSayBye: () => { console.log("Byeeee!"); }
    };

    console.log(topicObjectPerson.topicObjectFirstName);
    console.log(topicObjectPerson.topicObjectLastName);
    console.log(topicObjectPerson.topicObjectAge);
    console.log(topicObjectPerson.topicObjectIsEmployed);
    topicObjectPerson.topicObjectSayHello();
    topicObjectPerson.topicObjectSayBye();
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- THIS ----- */
{
    const topicThisPerson = {
        topicThisName: "mano",
        topicThisFavoriteFood: "miojo",
        topicThisSayOla: function () {
            console.log(`Meu nome é ${this.topicThisName}`);
        },
        topicThisEat: function () {
            console.log(`${this.topicThisName} está comendo ${this.topicThisFavoriteFood}`);
        }
    }

    topicThisPerson.topicThisSayOla();
    topicThisPerson.topicThisEat();
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- CONSTRUCTORS ----- */
{
    function TopicConstructorsCar (make, model, year, color) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function () {
            console.log(`Voce dirige ${this.model}`);
        }
    }

    const topicConstructorsCarCar1 = new TopicConstructorsCar ("Ford", "Mustang", 2025, "Black");
    console.log(topicConstructorsCarCar1);
    console.log(topicConstructorsCarCar1.make);
    console.log(topicConstructorsCarCar1.model);
    console.log(topicConstructorsCarCar1.year);
    console.log(topicConstructorsCarCar1.color);
    topicConstructorsCarCar1.drive()

    const topicConstructorsCarCar2 = new TopicConstructorsCar ("Chevrolet", "Camaro", 2021, "Blue");
    console.log(topicConstructorsCarCar2);
    console.log(topicConstructorsCarCar2.make);
    console.log(topicConstructorsCarCar2.model);
    console.log(topicConstructorsCarCar2.year);
    console.log(topicConstructorsCarCar2.color);
    topicConstructorsCarCar2.drive()

    const topicConstructorsCarCar3 = new TopicConstructorsCar ("Dodge", "Charger", 2024, "Green");
    console.log(topicConstructorsCarCar3);
    console.log(topicConstructorsCarCar3.make);
    console.log(topicConstructorsCarCar3.model);
    console.log(topicConstructorsCarCar3.year);
    console.log(topicConstructorsCarCar3.color);
    topicConstructorsCarCar3.drive()
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- CLASSES ----- */
{
    class TopicClassesProduct {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        
        topicClassesDisplayProduct () {
            console.log (`Produto: ${this.name}`);
            console.log (`Preço: R$${this.price.toFixed(2)}`);
        }
    }

    const topicClassesProd1 = new TopicClassesProduct ("Shirt", 19,99);
    const topicClassesProd2 = new TopicClassesProduct ("Jeans", 39,99);
    const topicClassesProd3 = new TopicClassesProduct ("Bolsa", 1239,99);
    topicClassesProd1.topicClassesDisplayProduct();
    topicClassesProd2.topicClassesDisplayProduct();
    topicClassesProd3.topicClassesDisplayProduct();
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- STATIC ----- */
{
    class TopicStaticMathUtil {
        static PI = 3.14159;
        
        static getDiameter (radius) {
            return radius*2;
        }
        static getCircunference (radius) {
            return 2 * this.PI * radius ;
        }
        static getArea(radius) {
            return this.PI * radius * radius ;
        }
    }

    console.log(TopicStaticMathUtil.PI);
    console.log(TopicStaticMathUtil.getCircunference(10));
    console.log(TopicStaticMathUtil.getCircunference(2));
    console.log(TopicStaticMathUtil.getArea(5));
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- INHERITANCE ----- */
{
    class TopicInheritanceUser {
        static topicInheritanceUserUserCount = 0
        constructor(username) {
            this.username = username;
            TopicInheritanceUser.topicInheritanceUserUserCount++;
        }
    }

    const topicInheritanceUser1 = new TopicInheritanceUser ("Pessoa1");
    const topicInheritanceUser2 = new TopicInheritanceUser ("Pessoa2");
    console.log(topicInheritanceUser1.username);
    console.log(topicInheritanceUser2.topicInheritanceUserUserCount);

    class TopicInheritanceAnimals {
        topicInheritanceAlive = true;
        topicInheritanceEat() { console.log(`This ${this.name} is eating`); }
        topicInheritanceSleep() { console.log(`This ${this.name} is sleeping`); }
    }

    class TopicInheritanceRabbit extends TopicInheritanceAnimals {
        name = "Rabbit";
        run() { console.log(`This ${this.name} is running`); }
    }
    class TopicInheritanceFish extends TopicInheritanceAnimals {
        name = "Fish";
        swim() { console.log(`This ${this.name} is swimming`); }
    }
    class TopicInheritanceDog extends TopicInheritanceAnimals { name = "Dog"; }

    const topicInheritanceRabbitAnimal = new TopicInheritanceRabbit();
    const topicInheritanceFishAnimal = new TopicInheritanceFish();
    const topicInheritanceDogAnimal = new TopicInheritanceDog();

    console.log(topicInheritanceRabbitAnimal.topicInheritanceAlive);
    topicInheritanceRabbitAnimal.topicInheritanceAlive = false;
    console.log(topicInheritanceRabbitAnimal.topicInheritanceAlive);

    topicInheritanceRabbitAnimal.topicInheritanceEat();
    topicInheritanceRabbitAnimal.topicInheritanceSleep();

    topicInheritanceRabbitAnimal.run();
    topicInheritanceFishAnimal.swim();
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- SUPER ----- */
{
    class TopicSuperAnimal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        
        move (speed) { console.log(`The ${this.name} moves at a speed of ${speed} km/h`); }
    }

    class topicSuperLebre extends TopicSuperAnimal {
        constructor (name, age, runSpeed) {
            super(name, age);
            this.runSpeed = runSpeed;
        }

        run () {
            console.log(`This ${this.name} can run`);
            super.move(this.runSpeed);
        }
    }

    class topicSuperShark extends TopicSuperAnimal {
        constructor (name, age, swimSpeed) {
            super(name, age);
            this.swimSpeed = swimSpeed;
        }
        
        swim () {
            console.log(`This ${this.name} can swim`);
            super.move(this.swimSpeed);
        }
    }

    class topicSuperBird extends TopicSuperAnimal {
        constructor (name, age, flySpeed) {
            super(name, age);
            this.flySpeed = flySpeed;
        }
        
        fly () {
            console.log(`This ${this.name} can fly`);
            super.move(this.flySpeed);
        }
    }

    const lebre = new topicSuperLebre("Lebre", 1, 25)
    const shark = new topicSuperShark("Tubabão", 2, 10)
    const bird = new topicSuperBird("Pássaro", 3, 12)

    console.log(shark.name)
    console.log(shark.age)
    console.log(shark.swimSpeed)

    lebre.run();
    shark.swim();
    bird.fly();
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- GET/SET ----- */
{
    class TopicGetSetRectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        
        set width(newWidth) {
            if(newWidth > 0) {
                // Propriedade privada
                this._width = newWidth;
            } else {
                console.error('Número, meu colega. NÚMERO!')
            }
        }

        set height(newheight) {
            if(newheight > 0) {
                // Propriedade privada
                this._height = newheight;
            } else {
                console.error('Número, meu colega. NÚMERO!')
            }
        }
        
        get width () { return this._width.toFixed(1); }
        get height () { return this._height.toFixed(1); }
    }

    const topicGetSetRectangle = new TopicGetSetRectangle(3, 3);
    console.log(topicGetSetRectangle.width);
    console.log(topicGetSetRectangle.height);
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- DESTRUCTURING ----- */
{
    let topicDestructuringA = 1;
    let topicDestructuringB = 2;
    console.log(topicDestructuringA);
    console.log(topicDestructuringB);

    [topicDestructuringA,topicDestructuringB] = [topicDestructuringB,topicDestructuringA];
    console.log(topicDestructuringA);
    console.log(topicDestructuringB);


    const topicDestructuringColors = ["Red", "Green", "Blue", "Black", "White"];
    console.log(topicDestructuringColors);

    [topicDestructuringColors[0], topicDestructuringColors[4]] = [topicDestructuringColors[4], topicDestructuringColors[0]];
    console.log(topicDestructuringColors);

    const [
        topicDestructuringFirstColor, topicDestructuringSecondColor, 
        topicDestructuringThirdColor, ...topicDestructuringExtraColors
    ] = topicDestructuringColors;
    console.log(topicDestructuringFirstColor);
    console.log(topicDestructuringSecondColor);
    console.log(topicDestructuringThirdColor);
    console.log(topicDestructuringExtraColors);

    const topicDestructuringPerson1 = {
        topicDestructuringFirstNamePerson1: "SpodASngebob",
        topicDestructuringLastNamePerson1: "SquarePantes",
        topicDestructuringAgePerson1: 30,
        topicDestructuringJobPerson1: "Fry Cook",
    }

    const topicDestructuringPerson2 = {
        topicDestructuringFirstNamePerson2: "Patrick",
        topicDestructuringLastNamePerson2: "Star",
        topicDestructuringAgePerson2: 40,
    }

    const {
        topicDestructuringFirstNamePerson1, topicDestructuringLastNamePerson1, 
        topicDestructuringAgePerson1, topicDestructuringJobPerson1='Unemployed'
    } = topicDestructuringPerson1;

    console.log(`Primeiro Nome da Pessoa 1: ${topicDestructuringFirstNamePerson1}`);
    console.log(`Último Nome da Pessoa 1: ${topicDestructuringLastNamePerson1}`);
    console.log(`Idade da Pessoa 1: ${topicDestructuringAgePerson1}`);
    console.log(`Profissão da Pessoa 1: ${topicDestructuringJobPerson1}`);

    function displayPerson2 ( { topicDestructuringFirstNamePerson2, topicDestructuringLastNamePerson2, topicDestructuringAgePerson2, topicDestructuringJobPerson2 }) {
        console.log(`Primeiro Nome da Pessoa 2: ${topicDestructuringFirstNamePerson2}`);
        console.log(`Último Nome da Pessoa 2: ${topicDestructuringLastNamePerson2}`);
        console.log(`Idade da Pessoa 2: ${topicDestructuringAgePerson2}`);
        console.log(`Profissão da Pessoa 2: ${topicDestructuringJobPerson2}`);
    }

    displayPerson2(topicDestructuringPerson2)

    console.log("\n PRÒXIMO EXEMPLO PARA DESTRUCTURING ");

    const topicDestructuringPerson3 = {
        topicDestructuringFullNamePerson3: 'Nathan Monteiro',
        topicDestructuringAgePerson3: 25,
        topicDestructuringIsUniStudentPerson3: true,
        topicDestructuringHobbiesPerson3: ["Karate", "Fishing", "Cooking"],
        topicDestructuringAddressPerson3: {
            street: "Rua Jose Maciel",
            city: 'Minas Gerais',
            country: "BH"
        }
    }

    console.log(topicDestructuringPerson3.topicDestructuringFullNamePerson3);
    console.log(topicDestructuringPerson3.topicDestructuringAgePerson3);
    console.log(topicDestructuringPerson3.topicDestructuringIsUniStudentPerson3);
    console.log(topicDestructuringPerson3.topicDestructuringHobbiesPerson3);
    console.log(topicDestructuringPerson3.topicDestructuringHobbiesPerson3[0]);
    console.log(topicDestructuringPerson3.topicDestructuringHobbiesPerson3[1]);
    console.log(topicDestructuringPerson3.topicDestructuringHobbiesPerson3[2]);
    console.log(topicDestructuringPerson3.topicDestructuringAddressPerson3);
    console.log(topicDestructuringPerson3.topicDestructuringAddressPerson3.street);
    console.log(topicDestructuringPerson3.topicDestructuringAddressPerson3.city);
    console.log(topicDestructuringPerson3.topicDestructuringAddressPerson3.country);


    class TopicDestructuringPerson4 {
        constructor(name, age, ...address) {
            this.name = name;
            this.age = age;
            this.address = new TopicDestructuringAddressPerson4(...address);
        }
    }

    class TopicDestructuringAddressPerson4 {
        constructor(street, city, country) {
            this.street = street;
            this.city = city;
            this.country = country;
        }
    }

    const topicDestructuringPerson4_1 = new TopicDestructuringPerson4 ("Nathan Monteiro", 25, "124 Conch Street", "Bikini Bottom", "Int. Waters");
    const topicDestructuringPerson4_2 = new TopicDestructuringPerson4 ("Monteiro Nathan", 25, "128 Conch Street", "Bikini Bottom", "Int. Waters");
    const topicDestructuringPerson4_3 = new TopicDestructuringPerson4 ("NM", 35, "126 Conch Street", "Bikini Bottom", "Int. Waters");

    function topicDestructuringDisplayPeopleValue () {
        console.log(`Nome da Pessoa 4.1: ${topicDestructuringPerson4_1.name}`);
        console.log(`Idade da Pessoa 4.1: ${topicDestructuringPerson4_1.age}`);
        console.log(`Cidade da Pessoa 4.1: ${topicDestructuringPerson4_1.address.city}`);
        console.log(`País da Pessoa 4.1: ${topicDestructuringPerson4_1.address.country}`);
        console.log(`Rua da Pessoa 4.1: ${topicDestructuringPerson4_1.address.street}`);
        
        console.log(`Nome da Pessoa 4.2: ${topicDestructuringPerson4_2.name}`);
        console.log(`Idade da Pessoa 4.2: ${topicDestructuringPerson4_2.age}`);
        console.log(`Cidade da Pessoa 4.2: ${topicDestructuringPerson4_2.address.city}`);
        console.log(`País da Pessoa 4.2: ${topicDestructuringPerson4_2.address.country}`);
        console.log(`Rua da Pessoa 4.2: ${topicDestructuringPerson4_2.address.street}`);

        console.log(`Nome da Pessoa 4.3: ${topicDestructuringPerson4_3.name}`);
        console.log(`Idade da Pessoa 4.3: ${topicDestructuringPerson4_3.age}`);
        console.log(`Cidade da Pessoa 4.3: ${topicDestructuringPerson4_3.address.city}`);
        console.log(`País da Pessoa 4.3: ${topicDestructuringPerson4_3.address.country}`);
        console.log(`Rua da Pessoa 4.3: ${topicDestructuringPerson4_3.address.street}`);
    }

    topicDestructuringDisplayPeopleValue();
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- SORT ----- */
{
    let topicSortNum = [1, 4, 2, 34, 253, 1, 56, 6, 78, 9, 6, 54.0];
    topicSortNum.sort((a,b) => a - b)

    console.log(topicSortNum)
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- DATE ----- */
{
    const topicDate = new Date();
    console.log(topicDate);
    // const topicFormatedDate = new Date(2024, 0, 1, 2, 3, 4, 5);
    // console.log(topicFormatedDate);

    const topicDateYear = topicDate.getFullYear();
    const topicDateMonth = topicDate.getMonth();
    const topicDateDay = topicDate.getDay();
    const topicDateHours = topicDate.getHours();
    const topicDateMinutes = topicDate.getMinutes();
    const topicDateSeconds = topicDate.getSeconds();
    const topicDateMiliseconds = topicDate.getMilliseconds();

    topicDate.setFullYear(2000)
    console.log(topicDate);

    console.log("Tempo separado:");
    console.log(`Ano: ${topicDateYear}`);
    console.log(`Mês: ${topicDateMonth}`);
    console.log(`Dia da semana: ${topicDateDay}`);
    console.log(`Hora: ${topicDateHours}`);
    console.log(`Minuto: ${topicDateMinutes}`);
    console.log(`Segundo: ${topicDateSeconds}`);
    console.log(`Milisegundo: ${topicDateMiliseconds}`);
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- SETTIMEOUT ----- */
{
    function sayOi () {
        alert("ola");
    }

    // setTimeout(sayOi, 3000)
    // const timeoutId = setTimeout(() => alert("Opa"), 3000)
    // clearTimeout(timeoutId);

    let timeoutId;
    function startTimer () {
        timeoutId = setTimeout(() => {
            alert("Fala rapaziada");
        }, 3000)
        console.log("ok")
    }

    function clearTimer() {
        clearTimeout(timeoutId);
        console.log("fechando")
    }
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- TRYCATCH ----- */
{
    try {
        console.log(xError)
        if (!xError) {
            throw new Error("xError não existe");
        }
    } catch(error) {
        console.error(error);
    } finally {
        let a = 2;
        console.log(a);
    }
    console.log("Com finally, chegaste no fim")
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- DOM ----- */
{
    const topicDOMSpaceUp = document.getElementById('topicDOMMyButton');

    topicDOMSpaceUp.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';

        event.target.classList.add('big-text');
    });

    topicDOMSpaceUp.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'hsl(240, 0%, 52%)';
        event.target.style.color = 'black';

        event.target.classList.remove('big-text');
    });
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- SLIDER ----- */
// Aqui, vamos selecionar todas as classes de .slides que sejam a tag img
const slides = document.querySelectorAll('.slides img');

// Index da imagem atual
let slideIndex = 0;

// let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
    // Verificando se o tamanho da NodeList é > 0
    if (slides.length > 0) {
        // Caso seja, vou adicionar a classe displaySlide na imagem que possui o index atual
        // Preciso adicionar essa linha para poder mover depois essa class de local, entre as imagens
        slides[slideIndex].classList.add('displaySlide');

        // intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide (index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(element => {
        element.classList.remove('displaySlide')
    });

    slides[slideIndex].classList.add('displaySlide');
}

function prevSlide () {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide (index) {
    slideIndex++;
    showSlide(slideIndex);
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- CALLBACKHELL ----- */
{    
    // 1. walk the dog
    // 2. clean the kitchen
    // 3. take out the trash

    /* Tudo abaixo comentado é callback hell: chamadas assíncronas dentro de outra dentro de outra dentro de outra
    Não queremos isso */
    // function walkTheDog (callback) {
    //     setTimeout(() => {
    //         console.log('You walked the dog!');
    //         callback()
    //     }, 1500)
    // }
    // function cleanTheKitchen (callback) {
    //     setTimeout(() => {
    //         console.log('You cleaned the kitchen!');
    //         callback()
    //     }, 2500)
    // }
    // function takeTrashOut (callback) {
    //     setTimeout(() => {
    //         console.log('You took the trash out!');
    //         callback()
    //     }, 500)
    // }

    // walkTheDog(() => {
    //     cleanTheKitchen(() => {
    //         takeTrashOut(() => { console.log('Finally, you done!') });
    //     })
    // });

    function walkTheDog () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const dogWalked = true;
                if (dogWalked) { resolve('You walked the dog!'); }
                else { reject('You didnt walked the dog!')}
            }, 1500)
        })
    }
    function cleanTheKitchen () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const cleanedKitchen = true;
                if (cleanedKitchen) { resolve('You cleaned the kitchen!'); }
                else { reject('You didnt cleaned the kitchen!'); }
            }, 2500)
        })
    }
    function takeTrashOut () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tookTrash = false;
                if (tookTrash) { resolve('You took the trash out!'); }
                else { reject('You didnt took the trash out!'); }
            }, 500)
        })
    }

    // walkTheDog().then((value) => { console.log(value); return cleanTheKitchen(); })
    //             .then((value) => { console.log(value); return takeTrashOut(); })
    //             .then((value) => { console.log(value); console.log('Finally, you done!') })
    //             .catch((error) => console.error(error));

    async function doChores () {
        const walkTheDogResult = await walkTheDog()
        console.log(walkTheDogResult);
        
        const cleanedKitchenResult = await cleanTheKitchen();
        console.log(cleanedKitchenResult);

        const takeTrashOutResult = await takeTrashOut();
        console.log(takeTrashOutResult);

        console.log('Finally!');
    }

    doChores();
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- JSON ----- */
{
    const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
    const jsonPerson = `{
        "name": "Spongebob",
        "age": 20,
        "isEmployed": true,
        "hobbies": [
            "Jellyfishing",
            "Karate",
            "Cooking"
        ]
    }`;

    // const jsonString = JSON.stringify(personJson);
    // console.log(jsonString);

    const parsedData = JSON.parse(jsonNames);
    console.log(parsedData);
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- FETCH ----- */
async function fetchData() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) { throw new Error("Could not fetch"); }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error(error)
    }
}
console.log('/* ======================= */');
/* ======================================================================================= */

/* ----- criação do conteúdo dinâmico ----- */
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
            "&rightarrow; O mesmo serve para o vídeo (no caso, o que fizemos com o áudio). O diferencial é encapsular o vídeo com uma <em>anchor tag</em>;",
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
            let topicUserInputUsername;
            let topicUserInputButton = document.getElementById('mySubmit');
            topicUserInputButton.addEventListener('click', function () {
            topicUserInputUsername = document.getElementById('myText').value;
            console.log(topicUserInputUsername);
            }
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
    {
        subtitle: '6. String Methods',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; <strong>.charAt(index)</strong>. Indica onde o caracter representado pelo index está;",
            `&rightarrow; <strong>.indexOf("char")</strong>. Indica a 1° aparição do caracter que queremos;`,
            `&rightarrow; <strong>.lastIndexOf("char")</strong>. Indica a última aparição do caracter que queremos;`,
            "&rightarrow; <strong>.lenght</strong>. Indica o tamanho da string;",
            "&rightarrow; <strong>.trim()</strong>. Elimina espaços em branco antes e depois da string;",
            "&rightarrow; <strong>.toUpperCase()</strong>. Transforma as letras da string em maiúsculas;",
            "&rightarrow; <strong>.toLowerCase()</strong>. Transforma as letras da string em minúsculas;",
            "&rightarrow; <strong>.repeat(valor)</strong>. Repete a string a quantidade de vezes do valor indicado;",
            `&rightarrow; <strong>.startsWith("char")</strong>. Verifica se a string indicada se inicia com o char correspondente;`,
            `&rightarrow; <strong>.endsWith("char")</strong>. Verifica se a string indicada termina com o char correspondente;`,
            `&rightarrow; <strong>.includes("char")</strong>. Verifica se a string indicada possui algum espaço em branco;`,
            `&rightarrow; <strong>.replaceAll("o que vai ser substituido", "o que vai substituir")</strong>. Verifica se a string indicada possui algum espaço em branco;",
            "&rightarrow; <strong>.padStart(lenght, o que começa por essa lenght)</strong>. Indica o tamanho que essa string deve ser, e indica o que deve iniciar ela para que ela tenha esse tamanho;`,
            "&rightarrow; <strong>.padEnd(lenght, o que começa por essa lenght)</strong>. Indica o tamanho que essa string deve ser, e indica o que deve terminar ela para que ela tenha esse tamanho;"
        ]
    },
    {
        subtitle: '7. String Slicing',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            "&rightarrow; É a criação de uma substring a partir da string original, sem alterá-la. Usamos o método <strong>.slice(valor inicial de onde queremos cortar, até onde termina a string que queremos fazer a substring)</strong>. Usando um valor positivo, começamos do início e vamos até o fim. Usando um negativo, fazemos o caminho contrário: <strong>do fim ao começo</strong>;",
            `&rightarrow; O problema é que caímos no seguinte: e se houver uma mudança na string? Como esse método é muito estático, se ao invés de "Nathan de Andrade", o nome for mudado para "Nathan Andrade"? Há uma forma de contornar isso: <strong>.slice(posição inicial, var.indexOf(primeira ocorrência de espaço em branco))</strong> (nos exemplos da Dev Tools é mais fácil de se ver);`,
        ]
    },
    {
        subtitle: '8. Iteration Loops',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Temos o <strong>while</strong> e o <strong>for</strong>. Para o for (pelo menos pelo exemplo dado em for), podemos usar também o <strong>continue</strong>. Este faz com que pulemos a iteração desejada. Ou seja, <strong>if (i == 13) { continue; }</strong> (essa iteração vai ser pulada). Se usarmos o <strong>break</strong>, saímos do loop;`,
        ]
    },
    {
        subtitle: '9. Functions',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma seção do código que é possível usá-la novamente depois quantas vezes quisermos;`,
        ]
    },
    {
        subtitle: '10. Variable Scope',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Aqui, é como as variáveis serão utilizadas ao decorrer do código;`,
            `&rightarrow; Por exemplo, <strong>let x = 1;</strong> e <strong>let x = 2;</strong> estará errado pois não podemos criar uma variável com o mesmo nome;`,
            `&rightarrow; Agora, fazer isso dentro de uma função (no caso, 2 funções com a mesma variável) é possível. Dentro de uma função, chamamos isso de <strong>escopo local</strong>: se criarmos x e y em 2 funções diferentes e dermos um console.log() em cada uma (console.log(x) na função 1 onde o x não existe e o mesmo para a y), nenhuma saberá da localização da outra, já que o escopo é local;`,
            `&rightarrow; Agora, declarando uma variável de fora de uma função é criar um <strong>escopo global</strong>, já que ela pode ser acessada de dentro e de fora de funções;`,
        ]
    },
    {
        subtitle: '11. Arrays',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma variável (quase uma estrutura) que armazena mais de um valor. A forma de fazer isso é simples: <strong>[encapsulamos os valores que queremos entre colchetes, separados por vírgulas]</strong>`,

            `&rightarrow; Ficaríamos com isso aqui na declaração: <strong>let fruits = ["apple", "orange", "banana"]</strong>`,

            `&rightarrow; Se dermos um console.log() em "fruits", imprimiríamos todo o array. Caso quiséssemos imprimir apenas um (ou uma quantidade específica), precisaríamos usar um index, dessa forma: <strong>console.log(fruits[posiçãoDoElemento]);</strong>`,

            `&rightarrow; Podemos também mudar, de forma simples, um elemento de dentro do array. Podemos colocar <strong>fruits[posiçãoDoElemento] = novoValor;</strong> que ele modificará o valor que já estava presente dentro do array;`,

            `&rightarrow; Podemos também adicionar, de forma simples, um elemento de dentro do array. Colocando <strong>fruits[novaPosiçãoDoElemento] = novoValor;</strong> ele adicionará um novo valor dentro do array;`,

            `&rightarrow; Mas fazer dessa forma é bem primitivo. Por isso, usamos alguns métodos <em>built-in</em> de arrays; <strong>.push(valor)</strong>. Ele adiciona um novo valor dentro do array <strong>ao final do mesmo</strong>;`,

            `&rightarrow; <strong>.push(valor)</strong>: adiciona um novo valor dentro do array <strong>ao final do mesmo</strong>;`,
            
            `&rightarrow; <strong>.pop()</strong>, que elimina o último elemento do array;`,

            `&rightarrow; <strong>.unshift(valor)</strong>, que <strong>adiciona um elemento no início do array</strong>;`,

            `&rightarrow; <strong>.shift()</strong>, que <strong>elimina um elemento no início do array</strong>;`,

            `&rightarrow; <strong>.lenght</strong>, que <strong>diz o tamanho do array</strong>;`,

            `&rightarrow; <strong>.sort()</strong>, que <strong>ordena alfabeticamente o array</strong>;`,

            `&rightarrow; <strong>.sort().reverse()</strong>, que <strong>inverte o array</strong>;`,
        ]
    },
    {
        subtitle: '12. Spread Operator',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É um operador que permite a expansão de um iterável (um array, string);`,
            
            `&rightarrow; Suponhamos que temos um array (let numbers = [1, 2, 3, 4, 5]) e que queiramos achar o maior entre eles. Podemos usar <strong">Math.max(numbers)</strong>, correto? <strong>Não</strong>, pois o output vai ser <em>NaN</em>. E porque isso acontece?`,
            
            `&rightarrow; Esse método não permite um array completo ser utilizado. Mas utilizando os <strong>...</strong>numbers, é possível que tenhamos um output correto, ou seja, vamos dar um <em>unzip</em> nos elementos dentro do array;`,
            
            `&rightarrow; Ainda estranho de se ver? Tenta fazer com uma <em>string</em>, dá um console.log() nela que você entende o porquê de usar o termo <em>unzip</em> (ou desempacotar, caso ache melhor);`,
            
            `&rightarrow; Para juntá-lo de volta, podemos usar o método <strong>.join("juntarComOQue")</strong>. Exemplo: vamos supôr que estamos usando uma <em>string</em>. Separamos um nome e querermos juntá-lo novamente. Fazemos: <strong">let variavel = [...string].join("-")</strong>. Aqui estamos juntando com um <strong>-</strong>;`,
            
            `&rightarrow; Também é possível criar uma <strong">shallow copy</strong>, que é uma estrutura diferente, porém com os mesmos elementos que a original;`,
        ]
    },
    {
        subtitle: '13. Rest Parameters',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Aqui vai ser o contrário do anterior: ao invés de separar os elementos de um array em diversos, este <strong>junta elementos separados em um array</strong>;`,
            `&rightarrow; Como é um parâmetro, imagine que criemos diversas variáveis <strong>const</strong>. Podemos agrupá-las em uma função: <strong>function openFridge(...foods) {/* code */}</strong>. Quando chamarmos a função: openFridge(colocamosAsVariaveis, deComidaAqui). Tudo isso vai se juntar dentro de um único array;`,
        ]
    },
    {
        subtitle: '14. Callbacks',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma função passada como argumento por outra função;`,

            `&rightarrow; A ideia é: temos 2 funções. Queremos garantir que a segunda não seja declarada primeiro que a primeira função. Para isso, fazemos: <strong>function nomeFuncao1(nomeFuncao2) {...}</strong>. Dentro dessa função, colocamos ao final <strong>callback()</strong>;`,

            `&rightarrow; E o porque do uso? Bom, imagine uma fila de banco. Nela, temos <strong>100 idosos</strong> e apenas um atendente para guiá-los por todo o processo. Quando cada um chegar ao caixa e contar o que precisa fazer, isso vai aumentar consideravelmente o tempo de espera dos outros atrás dele. Para tentar <strong>dar prioridade na redução do tempo</strong>, o atendente chega para cada um na fila, com um papel, e anota sobre a dificuldade daquela pessoa. Assim, quando chegar no caixa, o atendente não precisará ficar perguntando muita coisa. É assim que as <strong>callback functions</strong> funcionam: elas tomam a frente de <strong>asynchronous operations</strong>, que são operação que tomam muito tempo para se fazer (perguntar o problema da pessoa no caixa), e dizem: <em>vou fazer tal coisa (perguntar o problema) e assim que terminar, outra operação (atender) continua</em>. Ela dá prioridade a operações não passarem na frente de outras;`,
        ]
    },
    {
        subtitle: '15. forEach()',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É um método usado para iterar sobre os elementos de um array, aplicando uma determinada função sobre cada um;`,
        ]
    },
    {
        subtitle: '16. filter()',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Cria um novo array filtrando os elementos;`,
        ]
    },
    {
        subtitle: '17. reduce()',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Reduz os elementos de um array em um valor único;`,
        ]
    },
    {
        subtitle: '18. Function Expressions',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma forma de declarar funções como variáveis ou como valores;`,
            
            `&rightarrow; Lembrando que não é <strong>delaração de função</strong>, que é um bloco de código reutilizável que performa uma tarefa específica;`,
            
            `&rightarrow; A aula mostrou também o conceito da função <strong>setTimeout(callback, time)</strong>, onde temos uma <em>callback</em> e um <em>time</em> que iremos esperar para executar a tal função;`,
            
            `&rightarrow; E é daquí que entra a <strong>function expression</strong>: ao invés de criar um bloco de função, podemos usar a função como um <strong>valor</strong>;`,
        ]
    },
    {
        subtitle: '19. Arrow Functions',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Um jeito de escrever função mais conciso. Escrevemos da seguinte forma: <strong>(parâmetro) => código</strong>;`,
            `&rightarrow; Para entender um pouco melhor sobre como uma <em>arrow function</em> é montada: <strong>const hello = (parâmetro, caso haja) => {código aqui};</strong>;`,
        ]
    },
    {
        subtitle: '20. JavaScript Objects',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; São uma coleção de propriedades (nome, idade, etc) e/ou métodos (uma função que está dentro do objeto). Eles podem representar objetos do mundo real (lugars, pessoas, produtos) e tem a cara dessa forma (abaixo):`,
            `&rightarrow; <strong>object = {key: value, function(), ...};</strong>`,
            `&rightarrow; E para acessar os valores, usamos <strong>console.log(nomeDoObjeto.key);</strong>`,
        ]
    },
    {
        subtitle: '21. this',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma referência ao objeto (eu mesmo não entendo como usar direito). Uma possível forma de uso é: <strong>person.name = this.name</strong>. No exemplo dentro da <em>file</em> d oJS, é como trocar o this pelo person1, por exemplo. Vai depender do contexto;`,
            `&rightarrow; Ahh, .this <strong>não funciona com arrow functions</strong>;`,
        ]
    },
    {
        subtitle: '23. Constructors',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É um método especial para definição de propriedades e métodos de objetos;`,
            
            `&rightarrow; É pensar em POO (ou OOP, Programação Orientada à Objetos): se criarmos os objetos por si só, por exemplo, <strong>const car1 = {...}</strong>, <strong>const car2 = {...}</strong>, <strong>const car3 = {...}</strong>, não teríamos problema. Mas e se quiséssemos criar um <em>CT</em> de Fórmula 1? Seriam muitos carros. Para isso, o Contructor vem em mente;`,

            `&rightarrow; Tudo o que precisaríamos fazer era passar dados únicos a esse construtor para que ele criasse automaticamente os objetos;`,

            `&rightarrow; Usar um constructor é muito útil para, por exemplo, um <em>e-commerce</em>. Mas vamos à forma do mesmo;`,
        ]
    },
    {
        subtitle: '24. Classes',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É um ES6 <em>feature</em>, que prevê uma forma mais estruturada e limpa para trabalhar com objetos;`,

            `&rightarrow; Resumindo, usaremos uma <strong><em>class NomeDaClass {...}</em></strong> ao invés de apenas uma <strong>function</strong>. Lembrando sempre que o nome da <em>class</em> é em <strong>maiúscula</strong>;`,
        ]
    },
    {
        subtitle: '25. STATIC',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma <em>keyword</em> que define propriedades ou métodos que pertence a uma <em>class</em> ao invés de um objeto criado por aquela classe;`,
            
            `&rightarrow; Ou seja: ao inés de criar <strong>const MathUtil = new MathUtil();</strong> para acessar um possível objeto, eu simplesmente posso criar uma <em>static keyword</em> dentro da class da seguinte forma: <strong>static PI = 3.14159</strong> e acessá-la fora da classe da seguinte forma: <strong>console.log(MathUtil.PI)</strong>;`,
            
            `&rightarrow; De resumo: <strong>tudo estático pertence a classe em si</strong>!`,
            
            `&rightarrow; Se tentarmos acessar a static, não conseguiremos, já que a classe não possui o static como uma propriedade. Temos que usar o nome da CLASSE para acessá-la;`,
        ]
    },
    {
        subtitle: '26. Inheritance',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma forma de uma nova <em>class</em> herdar métodos e propriedades de outras <em>classes</em> existentes. A sua nomenclatura funciona da seguinte forma, abaixo:`,
            `&rightarrow; <em>class classNova extends classExistent</em>`,
        ]
    },
    {
        subtitle: '27. SUPER',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma <em>keyword</em> usada para chamar o construtor ou acessar as propriedades e métodos de um <em>parent</em>. É semelhante ao <em>this</em>, sendo este para o <strong>this object</strong> e o <em>super</em> para <strong>the parent</strong>;`,
            
            `&rightarrow; O que isso significa é que, de acordo com o vídeo, antes de chamar as  <em>this</em> keywords, caso a <em>class</em>-pai tenha um constructor, é necessário chamar a <strong>super()</strong> keyword;`,
            
            `&rightarrow; A ideia aqui é <strong>não se repetir</strong>. Caso 5 sub-classes tenham, por exemplo, nome e idade, para não nos repetirmos em cada uma delas, apenas colocamos as propriedades no <strong>constructor(nome, idade) {...}</strong> e na hora de colocar o super dentro de cada sub-classe, dentro de cada construtor, usamos <strong>super(nome, idade)</strong>;`,
        ]
    },
    {
        subtitle: '28. Getters and Setters',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Para <strong>getters</strong>, são métodos especiais que fazem as propriedades serem legíveis para leitura. Para <strong>setters</strong>, são métodos especiais que fazem as propriedades serem legíveis para escrita;`,
        ]
    },
    {
        subtitle: '29. Destructuring',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Extrai valores de arrays e objetos e depois armazena eles em variáveis de um jeito de conveninente;`,
            `&rightarrow; Há 2 formas de fazer isso: <strong>[] para performar o <em>array destricturing</em></strong> ou <strong>{} para performar o <em>object destricturing</em></strong>;`,
            `&rightarrow; Alguns exemplos pertinentes (dentro do console.log()) são: <strong>array swapping, troca de 2 elementos de um array, atribuir um elemento de array à variáveis, extrair valores de objetos e destructure in function parameters</strong>;`
        ]
    },
    {
        subtitle: '30. Nested Objects',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É a criação de um objeto dentro de outro. Exemplo: <strong>Pessoa{Endereço{}, Info{}, ...}</strong>;`,
        ]
    },
    {
        subtitle: '31. sort()',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; Organiza os elementos de um array como strings de forma lexicográfica (estudar mais isso, porque não entendi);`,
        ]
    },
    {
        subtitle: '32. Date Objects',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; São objetos que contém valores que representam <strong>dia e tempo</strong>. Eles podem ser formatados da forma que quisermos;`,
            `&rightarrow; Para formatar de uma outra forma, podemos usar: <strong>Date(ano, mes, dia, hora, minuto, segundo, milisegundo)</strong>;`,
        ]
    },
    {
        subtitle: '33. Closure',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma função definida dentro de outra função. Essa função declarada dentro da funcção-pai tem acesso às variáveis da função na qual dentro ela está;`,
        ]
    },
    {
        subtitle: '34. ES6 Module',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; <em>Modules</em> são arquivos externos que contém codigos reutilizáveis que podem ser importados em outros arquivos de JS;`,

            `&rightarrow; Ou seja, dentro do nosso módulo, tudo o que está lá dentro pode ser reutilizado em outros arquivos, sejam funções ou variáveis;`,

            `&rightarrow; Para que possamos usar o arquivo com o que queremos exportar, usarmos o <strong>export</strong> para importarmos em quaisquer outros lugares;`,
        ]
    },
    {
        subtitle: '35. Asynchronous code',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; A forma síncrona seria executar <strong>linha por linha</strong>, sem pular nenhuma etapa, seguindo uma ordem;`,
            `&rightarrow; Síncronos não bloqueiam o <em>flow</em> do projeto;`,
            `&rightarrow; Normalmente são encontradas em operações de I/O, <em>fetch</em> de dados;`,
        ]
    },
    {
        subtitle: '36. Error Handling',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É um objeto (sim, um objeto) que representa um erro que ocorreu. Normalmente ocorre com <em>input</em> ou na parte de estabelecer um conexão. Mas o porque de precisar desse tratamento? Normalmente, quando um erro ocorre, todo o programa para e espera a correção do mesmo. Há erros que precisam ser corrigidos na hora, porém outros são passíveis de espera;`,
            
            `&rightarrow; <em><strong>try{}</strong></em>: todo código colocado dentro dos {} é do tipo que poderá causar algum erro futuro;`,
            `&rightarrow; <em><strong>catch(){}</strong></em>: (o parâmetro dentro é para pegar um <em>error oject</em>, ou seja, <strong>error</strong>) { aqui podemos colocar <strong>console.log(error)</strong> para descobrir qual erro é }`,
            `&rightarrow; <em><strong>finally{}</strong></em>: todo código colocado dentro dos {} é executado;`,
        ]
    },
    {
        subtitle: '37. DOM',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; 5 tipos:`,
            `&rightarrow; <em><strong>document.getElementById()</strong></em>: retorna um <em>ELEMENT</em> ou <em>NULL</em>;`,
            `&rightarrow; <em><strong>document.getElementsClassName()</strong></em>: retorna uma <em>HTML COLLECTION</em>;`,
            `&rightarrow; <em><strong>document.getElementsByTagName()</strong></em>: retorna uma <em>HTML COLLECTION</em>;`,
            `&rightarrow; <em><strong>document.querySelector()</strong></em>: retorna o <em>FIRST ELEMENT</em> ou <em>NULL</em>;`,
            `&rightarrow; <em><strong>document.querySelectorAll()</strong></em>: retorna uma <em>NODELIST</em>;`,
            
            `&rightarrow; Passando um pouco mais para frente, temos as <strong>classList</strong>, que é uma propriedade usada para interagir com uma lista de classes de um elemento (normalmente CSS);`,
            `&rightarrow; <em><strong>.add()</strong></em>: adiciona classe(s) a um determinado elemento;`,
            `&rightarrow; <em><strong>.remove()</strong></em>: remove classe(s) de um determinado elemento;`,
            `&rightarrow; <em><strong>.toggle()</strong></em>: funciona como se fosse um interruptor, "adicionando e removendo" classe(s);`,
            `&rightarrow; <em><strong>.contains('className')</strong></em>: verifica se a <em>className</em> está contida dentro daquele elemento;`,
            `&rightarrow; <em><strong>.replace('oldClass', 'newClass')</strong></em>: troca a(s) classe(s) de um determinado elemento;`,
        ]
    },
    {
        subtitle: '38. Promisses',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É um objeto que administra <em>asynchronous operations</em>. Operações que podem tomar um certo tempo, e que não queremos que elas pausem todo o resto dos outros códigos;`,
            `&rightarrow; A ideia é "prometer retornar um valor", sendo esse valor poder ser aceito ou rejeitado (isso enquanto a tarefa fica em <em>pending</em>, espera);`,
            `&rightarrow; Para escrever: <strong>new Promisse((resolve, reject) => {asynchronous code})</strong>;`,
        ]
    },
    {
        subtitle: '39. Async/Await',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; <strong>Async</strong>: faz uma função retornar uma <em>Promisse</em>;`,
            `&rightarrow; <strong>Await</strong>: faz uma função <em>async</em> esperar pela em>Promisse</em>;`,
            `&rightarrow; Isso permite que escrevamos <strong>códigos assíncronos de maneira síncrona</strong>;`,
        ]
    },
    {
        subtitle: '40. fetch(url, {options})',
        desc: 'Conteúdo estudado do canal: <a href="https://www.youtube.com/@BroCodez" class="channel" target="_blank">Bro Code</a>',
        contentItself: [
            `&rightarrow; É uma função usada para fazer <em>HTTP requests</em> para <em>fetch resources</em>;`,
        ]
    },
];

const gitGithubContent = [
    {
        subtitle: '1. Início e Fim',
        desc: 'Conteúdo estudado do <a href="https://roadmap.sh/git-github" class="channel" target="_blank">roadmap.sh</a>',
        contentItself: [
            "&rightarrow; Todo o <em>roadmap</em> é bastante válido, mas a grande maioria dos comandos podem ser aprendidos na prática quando o usuário for construir um simples projeto. Por exemplo:;",
            "&rightarrow; <strong>git init</strong> é para iniciar um repositório (local). Ou seja, crie uma pasta para seu projeto e, dentro dela clique com o botão direito do mouse e selecione a opção 'Open Git Bash Here' e escreva 'git init'`;",
            "&rightarrow; <strong>git add .</strong> é para adicionar os arquivos depois de você ter criado o repositório online para que eles sejam enviados para lá. O . é para todos os arquivos modificados (eu acho), mas caso queira adiconar um específico, só escrever o caminho do(s) arquivo(s);",
            "&rightarrow; <strong>git commit -m 'Comentário'</strong> é para descrever o que aconteceu nas modificações mais recentes que você deu o git add;",
            "&rightarrow; <strong>git push</strong> serve para você 'jogar' os arquivos locais no repositório online. Na primeira vez, usa-se <strong>gitr push -u origin main</strong>, indicando que aqueles arquivos vão para a branch main;",
        ]
    },
];

const npmContent = [
    {
        subtitle: '1. general concepts',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; É um <strong>pacote de gerenciamento para Node.js</strong> criado em 2009 como um projeto <em>open source</em> para ajudar devs de JS a compartilhar <em>packaged modules</em> de código. No geral, é um gerenciador de pacotes Javascript (palavras ditas por <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="npm-link" target="_blank">esse cara</a>);`,
            
            `&rightarrow; Primeiro, instalar o <strong>node.js</strong>;`,
            
            `&rightarrow; Depois de instalado, verificamos a versão do npm, com <strong>npm -v</strong> ou <strong>npm --version</strong>;`,
            
            `&rightarrow; Podemos ver as um "manual" dos comandos, com <strong>npm</strong> ou <strong>npm help</strong>;`,
            
            `<span class="obs">&rightarrow; Abrindo pelo Git Bash, para limpar a tela, usamos <strong>Ctrl+L</strong>;</span>`,
            
            `&rightarrow; Podemos ver as um "manual" dos comandos, com <strong>npm</strong> ou <strong>npm help</strong>;`,
        ]
    },
    {
        subtitle: '2. Package.json File',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Esse é o arquivo mais importante, semelhante à uma documentação. Aqui tem a informação da aplicação, nome, autor, versão, etc. Mas essa não é a principal parte: aqui armazena toda as <strong>dependências da sua aplicação</strong>. Como assim? <strong>módulos</strong>, por exemplo. Ou seja, se sua aplicação roda em <strong>express.js</strong>, então é necessário dizer no arquivo que a sua aplicação usa <strong>express.js</strong>. Usa-se caso seja necessário movê-la de algum lugar;`,
            
            `&rightarrow; Também é possível criar scripts. Podemos criá-la com <strong>npm init</strong>;`,
        ]
    },
    {
        subtitle: '3. npm init',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Abrindo o git bash, damos um <em>npm init</em>;`,
            
            `&rightarrow; Nele nos depararemos com a seguinte imagem: <img class="npm-init" src="assets/img/npm/npm-init.png">;`,
            
            `&rightarrow; O nome entre parênteses é o nome do nosso package.json. Caso não queira modificar, apenas apertar ENTER e seguir em frente;`,
            
            `&rightarrow; Após isso, adicionamos algumas informações e ficamos com a seguinte imagem: <img class="npm-init-configs" src="assets/img/npm/npm-init-configs.png">;`,
            
            `&rightarrow; Mas se não quisermos fazer todo esse processo, de ENTER, escrever nomes, etc, podemos simplesmente digitar <strong>npm init --yes</strong>, que vai simplesmente <strong>eliminar todo o processo da imagem acima e criar um arquivo .json para nós</strong>. No caso, vai ser criado com tudo o que a gente não definiu antes (keywords, a <em>license</em> vai ser a ISC, que ele recomenda no início);`,
        ]
    },
    {
        subtitle: '4. npm config',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Agora, caso queiramos modificar alguma informação do arquivo .json de forma <strong>default</strong>, ou seja, assim que usarmos o comando anterior (<strong>npm init --yes</strong> ou <strong>npm init -y</strong>), queremos que o license por exemplo seja MIT, usamos o seguinte comando para conseguir tal feito: <strong>npm config set init-nomeDoQueQueremosMudar "novoValor"</strong>;`,
            
            `&rightarrow; Agora, caso queiramos verificar qual é o valor <em>default</em> no package.json, usamos <strong>npm get init-nomeDoQueQueremosVerificar</strong> (pode usar antes do get config);`,
            
            `<span class="obs">&rightarrow; Para mexer no nome do autor, não usamos apenas author ou name, para não dar comflito com o nome do app. Usamos <strong>author-name</strong>;</span>;`,
        ]
    },
    {
        subtitle: '5. installing packages',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Agora, vamos para a instalação de módulos. Usaremos a biblioteca <a href="https://lodash.com/" class="npm-link" target="_blank">Lodash</a>, que nos dá algumas <em>utility functions</em>, por exemplo. Para fazermos a instalação, usamos <strong>npm install lodash</strong>;`,

            `&rightarrow; Agora, depois de instalada, em um arquivo do <strong>mesmo nome que está na package.json</strong>, toda vez que instalamos um <em>module</em> e queremos utilizá-lo dentro de uma aplicação, setamos uma variável da seguinte forma: <strong>const nomeVar = require('nome-do-modulo');</strong>`,

            `<span class="obs">&rightarrow; Caso não queiramos abirir um <em>live-server</em> toda vez, dentro do Gitbash, usamos <strong>node nomeDoArquivo.js</strong>;`,
        ]
    },
    {
        subtitle: '6. uninstalling modules',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Só fazer o contrário: <strong>npm uninstall lodash</strong>, ou usar <strong>npm remove lodash --seHouverPackagesBaixadosSeparademente</strong>, <strong>npm rm lodash</strong>, <strong>npm un lodash</strong>;`,
        ]
    },
    {
        subtitle: '7. uninstalling module versions',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Vamos dizer que queiramos instalar uma versão mais recente. Fazemos <strong>npm install lodash@versãoMaisRecente</strong>;`,
        ]
    },
    {
        subtitle: '8. updating latest version',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Vamos dizer que queiramos atualizar para uma versão mais recente. Fazemos <strong>npm update lodash</strong>;`,
        ]
    },
    {
        subtitle: '9. global modules',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Usamos isso para não precisar ficar instalando toda hora. No caso, o módulo global fica instalado na máquina, não nos arquivos em si. Fazemos <strong>npm install -g nodemon</strong>. Usamos o -g para global. Para saber onde está instalado, usamos <strong>npm root -g</strong>;`,
            
            `&rightarrow; Para remover, é a mesma coisa que o tópico 7. Só lembrar de usar o -g no fim;`,
        ]
    },
    {
        subtitle: '9. listing packages',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Para listarmos os packages que estamos usando no projeto, fazemos <strong>npm list</strong>;`,
            
            `&rightarrow; Caso um dos packages seja muito grande, com muitas outras pendências, para listarmos apenas "os nomes" dos packages, fazemos <strong>npm list --depth 0</strong>;`,

            `<span class="obs">&rightarrow; Lembrar de trocar o "test" por "start" e colocar o nome do arquivo.js;`,
        ]
    },
    {
        subtitle: '10. running packages',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=jHDhaSSKmB0" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Para usar os packages que estamos usando no projeto, fazemos <strong>npm run nomeDoArquivoQueColocamosNoPackage.json</strong>;`,
        ]
    },
];

const vueContent = [
    {
        subtitle: '1. What is Vue.js?',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&list=PL3lj-tEZFe12ClY0AuixDHY_KRCwU-C55&index=2" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; É uma <em>framework</em> de JS progressiva usada para <em>buildar</em> UI's ou <strong>SPAs</strong> (<em>Single Page Applications</em>). É feita para ser simples, flexível e incrementavelmente adaptativa, ou seja, é possível começar pequeno e depois escalar para algo maior;`,

            `&rightarrow; Para pré-requisitos, é importante saber:
                <ul style="text-indent:2em;">
                    <li>&bullet; Fundamentos de JavaScript (loops, arrays, objects, functions);</li>
                    <li>&bullet; Eventos e DOM;</li>
                    <li>&bullet; Fetch API e HTTP Básico;</li>
                    <li>&bullet; <em>Arrow Functions</em>, Arrays <em>Methods</em>, Destructuring;</li>
                    <li>&bullet; npm;</li>
                </ul>
            `,
        ]
    },
    {
        subtitle: '2. The Role of Frontend Frameworks',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&list=PL3lj-tEZFe12ClY0AuixDHY_KRCwU-C55&index=2" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; O motivo para o uso de frameworks (React, Angula, Vue) são alguns. O primeiro e principal é uma <strong>UX/UI Aprimorada</strong>, onde é fácil de criar UIs que são dinâmicas e interativas. Isso aparece um pouco no quesito <strong>tempo</strong>. Com JS puro, é possível, mas pode ficar mais confuso;`,

            `&rightarrow; Outros pontos a se levarem consideração são:
            <ul style="text-indent:2em;">
                <li>&bullet; <strong>UX/UI Aprimorada</strong>: é fácil de criar UIs que são dinâmicas e interativas;</li>
                <li>&bullet; <strong><em>Components</em></strong>: seria quebrar o UI em componentes que possuam seus próprios estados e propriedades;</li>
                <li>&bullet; <strong>Perfomance</strong>: possuem diversos <em>features</em>;</li>
                <li>&bullet; <strong>Modularidade</strong>: permite que os devs "quebrem" as aplicações em componentes menores e reutilizáveis;</li>
            </ul>`,
        ]
    },
    {
        subtitle: '3. Why Vue.js?',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&list=PL3lj-tEZFe12ClY0AuixDHY_KRCwU-C55&index=2" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; O motivo para o uso do Vue.js são alguns:
            <ul style="text-indent:2em;">
                <li>&bullet; Simplicidade e Acessibilidade;</li>
                <li>&bullet; Flexibilidade;</li>
                <li>&bullet; Performance e Tamanho;</li>
                <li>&bullet; Arquitetura <em>Component-based</em>;</li>
                <li>&bullet; Comunidade Ativa e Ecossistema Rico;</li>
            </ul>`,
        ]
    },
    {
        subtitle: '4. Vue Cpmponents',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&list=PL3lj-tEZFe12ClY0AuixDHY_KRCwU-C55&index=2" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; O que são esses <strong>components</strong>? São pedaços de códigos que podem ser jogados em diferentes partes de código. Podemos separar isso em 3 partes:
            <ul style="text-indent:2em;">
                <li>&bullet; Lógica: a parte JS (fica dentro das script tags). Aqui definidos estados, dados, métodos, eventos, etc;</li>
                <li>&bullet; Saída Template: aqui entra o HTML. Também podemos incluir elementos dinâmicos (variáveis, loops, condicionais) chamados de <strong>directives</strong>;</li>
                <li>&bullet; Style: as CSS. O diferencial daqui é que ela pode ser <strong>scoped</strong>, ou seja, <strong>o estilo vai ser direcionado especificamente àquele component</strong>;</li>
            </ul>`,

            `&rightarrow; Para montar os components, temos 2 formas: <strong>Options API</strong>, que é o modo tradicional, e <strong>Composition API</strong>`
        ]
    },
    {
        subtitle: '5. Getting setup',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&list=PL3lj-tEZFe12ClY0AuixDHY_KRCwU-C55&index=2" class="channel" target="_blank">Traversy Media</a>',
        contentItself: [
            `&rightarrow; Há formas diferentes de fazer isso:
            <ul style="text-indent:2em;">
                <li>&bullet; CDN;</li>
                <li>&bullet; Vue CLI (usarei para <em>single pages</em>, para testes);</li>
                <li>&bullet; Create Vue: usa o <em>web server</em> e a ferramenta de frontend Vite;</li>
                <li>&bullet; Nuxt.js: uma <em>meta framework</em>, assim como para o React o Next.js;</li>
            </ul>`,
        ]
    },
    {
        subtitle: '6. Creating a Vue project',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA&list=PL3lj-tEZFe12ClY0AuixDHY_KRCwU-C55&index=2" class="channel" target="_blank">Traversy Media</a> e <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; Para criar um projeto Vue, temos algumas forma. Pelo Create Vue, fazemos:
            <ul style="text-indent:2em;">
                <li>&bullet; Pelo CMD, vamos até onde queremos colocar pasta do projeto;</li>
                <li>&bullet; Depois, digitamos <strong>npm create vue@latest vue-study</strong>, onde o último nome é referente ao nome da pasta do projeto;</li>
                <li>&bullet; Depois seguimos as instruções do que queremos dentro do nosso projeto como dependências;</li>
                <li>&bullet; Depois digitamos o comando <strong>cd vue-study</strong>;</li>
                <li>&bullet; Depois digitamos o comando <strong>code .</strong>, que é para abrir o arquivo dentro do VSCode;</li>
            </ul>`,

            `&rightarrow; Pelo Vue CLI, fazemos:
            <ul style="text-indent:2em;">
                <li>&bullet; Usar os comandos do site <a href="https://cli.vuejs.org/" target="_blank">Vue CLI</a>;</li>
                <li>&bullet; Depois, digitamos <strong>npm create vue@latest vue-study</strong>, onde o último nome é referente ao nome da pasta do projeto;</li>
                <li>&bullet; Depois, usamos a opção de Vue 3 (vai aparecer no CMD);</li>
                <li>&bullet; Depois, para rodar o projeto, usamos <strong>cd caminhoAteAPasta </strong>;</li>
                <li>&bullet; Depois, para rodar o projeto, usamos <strong>npm run serve</strong>;</li>
            </ul>`,
        ]
    },
    {
        subtitle: '7. Project Structure',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; Sobre os arquivos presentes dentro do projeto:
            <ul style="text-indent:3em; margin-top:.3em;">
                <li>&bullet; <strong>package.json</strong>: aqui contém as dependências e os scripts necessários para os projetos, como o <strong>serve</strong>, para rodar a aplicação, <strong>build</strong>, para montar a aplicação, e <strong>lint</strong>, para consertar qualquer <em>linting</em> na aplicação;</li>
                <li>&bullet; <strong>package-lock.json</strong>: aqui contém a consistência das instalações de dependências;</li>
                <li>&bullet; <strong>App.vue</strong>: o .vue é onde especificamos que ali contém arquivos HTML, CSS e JS que corresponde a uma pequena porção do que é mostrado na aplicação: nosso componente;</li>
            </ul>`,

            `&rightarrow; Sobre as pastas presentes dentro do projeto:
            <ul style="text-indent:3em; margin-top:.3em;">
                <li>&bullet; <strong>node_modules</strong>: aqui, é onde todas as dependências estão instaladas;</li>
                <li>&bullet; <strong>public</strong>: aqui, é onde os <em>static assets</em> ficam quando queremos colocar a aplicação <em>live</em>. a consistência das instalações de dependências;</li>
                <li>&bullet; <strong>src</strong>: aqui é onde a mágia resde. Começando com o arquivo <strong>main.js</strong>. Nela, especificamos o <em>root component</em>, <strong>App</strong> e o elemento DOM que será controlado pelo Vue que, no nosso caso, seria a div com o id de #app, que está dentro do arquivo html;</li>
            </ul>`,
        ]
    },
    {
        subtitle: '8. Single File Component',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; Dentro do script, temos uma parte onde exportamos dados. Essa parte é responsável por exportá-los de forma que possamos usar dentro do nosso template. Para exportar os dados que querermos, usamos uma função chamada <strong>data() { return { object },}</strong>. Se precisarmos usar um nome, por exemplo, o object = <strong>name: 'Nathan',</strong>. Essa função, data(), <strong>retorn um objeto que representa um dado qque pode ser usado pelo template!</strong>;`,
        ]
    },
    {
        subtitle: '9. Binding text',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; Aqui é onde usamos a <em>mustache syntax</em> em Vue. Colocamos {{ propriedade correspondente ao que está dentro da função data }}. Também chamado de <strong><em>text interpolation</em></strong>;`,
            `&rightarrow; Outra forma de <em>bindar</em> texto em Vue é usando <strong><em>directives</em></strong>. Elas são um atributo especial de HTML e, em Vue, cada directive inicia-se com v-texto. Fazemos:<br>"<strong>< div v-text="nomeDaPropriedade">< /div></strong>;"`,
        ]
    },
    {
        subtitle: '10. Binding HTML',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; O problema das abordagens anteriores é que apenas <em>binda</em> o texto na sua mais pura forma. Normalemnte precisaremos mostras o HTML real no UI (com tags de bold, legenda, etc).;`,
            `&rightarrow; Para resolvermos isso, podemos usar a <strong>v-html directive</strong>;`,
            `&rightarrow; O detalhe aqui é: <strong>só devemos usar o v-html em elementos que confiamos!</strong>. Usar com <strong>third party applications</strong> pode levar à questões de segurança;`,
        ]
    },
    {
        subtitle: '11. Binding attributes',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; É possível <em>bindar</em> atributos HTML como class, id, bolean. Mas não podemos usar o {{}}, mas sim o <strong>v-bind</strong>. Para class, usamos <strong>v-bind:class="nomeDaClass</strong>. Para id, o mesmo, mas com :id="..."";`,
            `&rightarrow; Para resolvermos isso, podemos usar a <strong>v-html directive</strong>;`,
        ]
    },
    {
        subtitle: '12. Binding classes',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; É a forma de mudar a classe de um elemento dinamicamente através de um dado;`,
        ]
    },
    {
        subtitle: '13. Binding styles',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; Aqui, utilizamos <em>objects</em>;`,
            `&rightarrow; Na parte de adição de dados, fazemos <strong>v-bind:style="{ aqui dentro colocamos os <em>key-value pairs</em>, além de separar por vírgula ainda é possível escrever 'dessa-forma' };"</strong>`,
            `&rightarrow; Também podemos colocar vários estilos dentro de um <em>object</em> dentro da própria tag;`,
        ]
    },
    {
        subtitle: '14. Back to 0',
        desc: 'Conteúdo estudado do canal <a href="https://www.youtube.com/@Codevolution" class="channel" target="_blank">Codevolution</a>',
        contentItself: [
            `&rightarrow; Aqui, voltei para o canal do auto que fica na descrição. Me perdi um pouco sobre qual seria a melhor opção para seguir, então resolvi voltar e seguir a que o roadmap sugeriu;`,
        ]
    },
    {
        subtitle: '15. Directives',
        desc: 'Conteúdo estudado do vídeo <a href="https://www.youtube.com/watch?v=VeNfHj6MhgA" class="channel" target="_blank">Transversy Media</a>',
        contentItself: [
            `&rightarrow; Avançando, vamos para as <em><strong>directives</strong></em>. É uma forma de deixar com que o template se torne mais dinâmicos;`,
            `&rightarrow; Começamos com:`,
            `<ul style="text-indent:3em; margin-top:.3em;">
                <li>&bullet; <strong>v-if</strong>: é o if, mas com um v na frente (basicamente). O <strong>v-else</strong> é colocado apenas com ele mesmo, e o <strong>v-else-if</strong>="vem como a prerrogativa de que se algo não aconteceu, então faça isso aqu";</li>
                
                <li>&bullet; <strong>v-for</strong>: é o for, mas com o v na frente (também). Podemos, dentro da função <em>data</em> criar um return com um array e iterar por ele. Usamos como um <strong>for in</strong</strong>, ou seja, <strong>for item in itens</strong>. Vai ficar um <strong>v-for="item in item"</strong>;</li>
                
                <li>&bullet; <strong>v-bind</strong>: usado para <em>bindar</em>, atrelar, um pedaço de dado à um atributo. É possível escrever <strong>v-bind:attribute="data"</strong> ou <strong>:attribute="data"</strong>;</li>
                
                <li>&bullet; <strong>v-on</strong>: Usamos para eventos. Para utilizar ao seu máximo, usamos, dentro da função data, ao invés do return, o <strong>methods</strong>. Para acessar algum valor do return, usamos <strong>this.oValor</strong>. A shorthand para isso, ao invés de usar toda a diretiva disso, é escrevendo <strong>@click</strong>, por exemplo;</li>
            </ul>`,

            `&rightarrow; E isso seria tudo relacionado à <strong>Options API</strong>;`,
        ]
    },
];

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
    renderSectionContent(gitGithubContent, 'container-git-github');
    renderSectionContent(npmContent, 'container-npm');
    renderSectionContent(vueContent, 'container-vue');
});