// Temperature converter program

// storing elements to variable
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


// function to convert
function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = (temp * 9 / 5) + 32
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toCelsius.checked){ 
        temp = Number(textBox.value);
        temp = (5 / 9) * (temp - 32)
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select a unit";
    }

}

// function to reset
function toResettext(){
    textBox.value = 0;
    result.textContent = "";
}

