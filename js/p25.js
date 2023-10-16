let num = document.getElementById("num");
let output = document.getElementById("output");


function submitHandler(event) {
    event.preventDefault();
       let n = Number(num.value);

    if(isInt(n)) {
        output.innerHTML = `<h1> ${n} is an Integer </h1>`;
    } else {
        output.innerHTML = `<h1> ${n} is an Decimal </h1>`;
    }
}

function isInt(n) {
    return n % 1 === 0;
}