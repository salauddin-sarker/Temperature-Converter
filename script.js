const celsius = document.querySelector("#celsius"), fahrenheit = document.querySelector("#fahrenheit");

// set focus to the Celsius input field when the page loads
window.addEventListener("load", () => celsius.focus());


// convert celsius to Fahrenheit when celsius value changes
celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
    // Clear fahrenheit inpu when celsius input is empty
    if( !celsius.value) fahrenheit.value = "";
});

// Convert fahrenheit to Celsius when fahreit value changes
fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32) * 5)
 / 9).toFixed(2);
 // Clear celsius inpu when fahrenheit input is empty
 if(!fahrenheit.value) celsius.value = "";
})