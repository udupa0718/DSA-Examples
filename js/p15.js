let fNum = document.getElementById('num');
let fMethod = document.getElementById('method');

let res = document.getElementById('result');

const submithandler = (event) => {
    event.preventDefault();
    let num = Number(fNum.value);

    switch(fMethod.value){
        case "loop":
            let res1 =  primeUsingLoop(num);
            res.innerHTML = res1 ? `<h1>(Loop) ${num} is Prime </h1>`: `<h1>(Loop) ${num} is not Prime </h1>`;
        break; 

        case "rec":
            let res2 =  primeUsingRec(num);
            res.innerHTML = res2 ? `<h1>(Rec) ${num} is Prime </h1>`: `<h1>(Rec) ${num} is not Prime </h1>`;
        break;

        default:
            res.innerHTML =`<h1> Choose Proper Method </h1>`;
        break;
    }
}

// loop
function primeUsingLoop(num) {
    if(num < 1) {
        return false;
    }

    for(let i=2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
        return true;
    }
}

// recursive
// accepting a factor as the second argument and incrementing by 2 when it is recursing
function primeUsingRec(n, i=2) {
    if(n <=2 ) return (n === 2) ? true : false;
    if(n % i === 0) return false;
    if(i * i > n) return true;
    return primeUsingRec(n, i+1);
}