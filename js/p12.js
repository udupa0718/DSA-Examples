let fNum = document.getElementById("num");
let fMethod = document.getElementById("method")

let res = document.getElementById("result");

function submitHandler(event) {
    event.preventDefault();
    let num = Number(fNum.value);

    switch(fMethod.value) {
        case "op":
            // operators
            if(num === 0){
                res.innerHTML = `<h1> ${num} Neutral Number </h1>`;
            } else if(num > 0) {
                res.innerHTML = `<h1> ${num} Positive Number </h1>`;
            } else {
                res.innerHTML = `<h1> ${num} Negative Number </h1>`;
            }
        break;


        case "cons":
            // Math.sign(num)
            if(num === 0){
                res.innerHTML = `<h1> ${num} Neutral Number </h1>`;
            } else if(Math.sign(num) > 0) {
                res.innerHTML = `<h1> ${num} Positive Number </h1>`;
            } else {
                res.innerHTML = `<h1> ${num} Negative Number </h1>`;
            }
        break;

        default:
            res.innerHTML = `<h1> Choose Proper Method </h1>`;
        break;
    }
}