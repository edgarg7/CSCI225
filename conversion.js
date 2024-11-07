function convert(){

    let inputValue = parseFloat(document.getElementById("inputValue").value);

    let inputUnit = document.getElementById("inputUnit").value;
    let outputUnit = document.getElementById("outputUnit").value;

    if(isNaN(inputValue)){
        alert("Please enter a valid number.");
        return;
    }

    let convertedValue;

    if(inputUnit === "foot" && outputUnit === "inch"){
        convertedValue = inputValue * 12;
    } else if(inputUnit === "foot" && outputUnit === "meter"){
        convertedValue = inputValue * 0.3048;
    } else if(inputUnit === "inch" && outputUnit === "foot"){
        convertedValue = inputValue / 12;
    } else if(inputUnit === "inch" && outputUnit === "meter"){
        convertedValue = inputValue * 0.0254;
    } else if(inputUnit === "meter" && outputUnit === "foot"){
        convertedValue = inputValue / 0.3048;
    } else if(inputUnit === "meter" && outputUnit ==="inch"){
        convertedValue = inputValue /0.0254;
    } else{
        convertedValue = inputValue;
    }

    document.getElementById("outputValue").value = convertedValue.toFixed(2);
}