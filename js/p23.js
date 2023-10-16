let x = document.getElementById("num");
let out = document.getElementById("out");

 function submitHandler(event) {
    event.preventDefault();

    let num = Number(x.value);
    let len = Number(x.value.length);

    let sum = 0;

    let tmp = num;

    while(tmp>0) {
        let rem = tmp % 10;
        sum += rem ** len ; // * (mul), ** (expo/power)

        tmp = parseInt(tmp/10);
    }

    if (sum === num) {
        console.log(`${num} is an Armstrong Number`);
        out.innerHTML = `<h1> ${num} is an Armstrong Number </h1>`;
    } else {
        console.log(`${num} is Not  an Armstrong Number`);
        out.innerHTML = `<h1> ${num} is Not an Armstrong Number </h1>`;
    }
 }