/* COUNTER */
const numberChange = document.getElementById('number-change');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const incrementBtn = document.getElementById('increment-btn');
let count = 0;

decrementBtn.onclick = function () {
    count--;
    numberChange.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    numberChange.textContent = count;
}
incrementBtn.onclick = function () {
    count++
    numberChange.textContent = count;
}

/* RANDOM */
const random01 = document.getElementById('random01');
const btnRandom01 = document.getElementById('btn-random-01');

btnRandom01.onclick = function () {
    random01.textContent = Math.round(Math.random() * 100) + 1;
}

/* CHECKED */

const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const secondMySub = document.getElementById('secondMySub');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

secondMySub.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = `Você clicou!`;
    } else {
        subResult.textContent = `Você não clicou!`;
    }
    
    if (visaBtn.checked) {
        paymentResult.textContent = `Você está pagando com Visa`;
    } else if (mastercardBtn.checked) {
        paymentResult.textContent = `Você está pagando com Mastercard`;
    } else if (paypalBtn.checked) {
        paymentResult.textContent = `Você está pagando com Paypal`;
    } else {
        paymentResult.textContent = `Selecione um tipo de pagamento!`;
    }
}


/* CONVERSION */

const textbox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temperature;

function convert () {
    if (toFahrenheit.checked) {
        temperature = Number(textbox.value);
        temperature = temperature * 9 / 5 + 32
        result.textContent = `${temperature.toFixed(1)}°F`;
        
    } else if (toCelsius.checked) {
        temperature = Number(textbox.value);
        temperature = (temperature + 32) * (5/9)

        result.textContent = `${temperature.toFixed(1)}°C`;

    } else {
        result.textContent = "Selecione uma unidade!";
    }
}

/* ROLL DICE */

function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    // let test = numOfDice.value;
    
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    const numDiceRolls = [];
    const images = [];

    for (let i=0 ; i<numOfDice ; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        // console.log(value);

        numDiceRolls.push(value);
        images.push(`<img src="../img/${value}.png" class="imgs-test">`);
    }

    diceResult.textContent = `Dice: ${numDiceRolls.join(', ')}`;
    diceImages.innerHTML = images.join('')
}

/* PASSWORD */

function generatePassword (lenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvxwyz";
    const upperCaseChars = "ABCDEFGHIHJKLMNOPQRSTUVXWYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%&^~()_-+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if (lenght <= 0) {
        return "Precisa ser de tamanho maior"
    }
    
    if (allowedChars.length === 0) {
        return "Precisa ter alguma coisa pelo menos"
    }

    for (let i=0 ; i<lenght ; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLenght = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Senha gerada: ${password}`);