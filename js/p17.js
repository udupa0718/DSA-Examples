let base = document.getElementById('base');
let expo = document.getElementById('expo');

let res = document.getElementById('result');

function submitHandler(event) {
    event.preventDefault();
    let b = Number(base.value);
    let e = Number(expo.value);

    // let out = recursion(b,e);
    let out = loop(b,e);
    res.innerHTML = ` <h1> Base = ${b} : Expo = ${e} and
     Result = ${out} </h1>`;
}

function loop(b,e) {
    if(e === 0) {
        return 1;
    } else {
        return b ** e;
    } 
}

function recursion(b,e) {
    if(e === 0) {
        return 1;
    } else {
        return b * recursion(b,e-1);
    }
}