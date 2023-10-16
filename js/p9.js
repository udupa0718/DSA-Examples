let fTemp = document.getElementById('temp');
let fCon = document.getElementById('con');

let result = document.getElementById('result');

const submitHandler = (event) => {
    event.preventDefault();
    let temp = Number(fTemp.value);

    switch(fCon.value) {
        case "far": // fh = (cel * 1.8) + 32;
            let res1 = (temp * 1.8) + 32;
            result.innerHTML = `<h1> Fahrenheit temp = ${res1.toFixed(2)} deg Farhrenheit </h1>`;
        break;

        case "cel" : // c = (feh - 32) / 1.8;
            let res2 = (temp - 32) / 1.8;
            result.innerHTML = `<h1> Celsius temp = ${res2.toFixed(2)} deg Celsius </h1>`
        break;

        default :
            result.innerHTML = `<h1> Choose Proper Conversion type</h1>`
        break;
    }
}