// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase convention is only used in javascript
let countEl = document.getElementById("count-el") // Here we are passing in arguments 

console.log(countEl)
// Will print out <h2 id="count-el">

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    // The inner text we are refrencing here is the <h2 id="count-el">0</h2> --  '0' is the inner text
}

let saveEl= document.getElementById("save-el")

function save() {
    saveEl.innerText += " " + count + "-"
    count=0
    countEl.innerText = count
}
function decrement() {
    count -= 1
    countEl.innerText = count
    // The inner text we are refrencing here is the <h2 id="count-el">0</h2> --  '0' is the inner text
}