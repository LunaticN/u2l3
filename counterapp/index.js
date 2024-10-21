//u2l3 counter app

var count = 0
function increment(){
    count++
    document.getElementById("count-el").innerHTML = count
}

var entries = document.getElementById("entries")
function save(){
    entries.innerHTML += " " + count
}
