// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph that has the id="error".

var errorText = document.getElementById("error") //inflates error text element to variable
var button = document.getElementsByTagName("button") //inflates button element to variable

button.addEventListener("click", function(){  //event listener with function
    errorText.style.display = "block"
})  