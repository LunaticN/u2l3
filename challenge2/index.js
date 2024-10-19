let num1 = 8
let num2 = 6


function add(num1, num2){
    document.getElementById("res-el").innerHTML = (num1 + num2).toString()
}

function subtract(num1, num2){
    document.getElementById("res-el").innerHTML = (num1 - num2).toString()
}

function multiply(num1, num2){
    document.getElementById("res-el").innerHTML = (num1 * num2).toString()
}

function divide(num1, num2){
    document.getElementById("res-el").innerHTML = (num1 / num2).toString()
}

document.getElementById("add").addEventListener("click", add(num1, num2))
document.getElementById("subtract").addEventListener("click", subtract(num1, num2))
document.getElementById("multiply").addEventListener("click", multiply(num1, num2))
document.getElementById("divide").addEventListener("click", divide(num1, num2))

