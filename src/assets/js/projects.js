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