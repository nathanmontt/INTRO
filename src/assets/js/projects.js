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