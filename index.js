let SavEl = document.getElementById('save-el')

let countEl = document.getElementById("count-el");

//declare a variable count#
let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count;
}
function save() {
    let countstr = count + '-'
    SavEl.textContent += countstr 
}

function reset() {
    count = 0
    countEl.textContent = count
}