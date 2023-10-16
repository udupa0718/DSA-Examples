let num = document.getElementById("num");
let op = document.getElementById("op");
let res = document.getElementById("res");

function submitHandler(event) {
    event.preventDefault();
    let n = Number(num.value);

    switch(op.value){
        case "all":
            let res1 = sumofNatural(n);
            res.innerHTML = `<h1> Sum of All = ${res1} </h1>`;
        break;

        case "even":
            let res2 = sumofEven(n);
            res.innerHTML = `<h1> Sum of Even = ${res2} </h1>`;
        break;

        case "odd":
            let res3 = sumofOdd(n);
            res.innerHTML = `<h1> Sum of Odd = ${res3} </h1>`;
        break;

        default:  
            res.innerHTML = `<h1> Choose Proper Method </h1>`;
        break;
    }
}

function sumofNatural(num) {
    let sum = 0;
    let i = 1;
       while( i < num ) {
          sum += i;
          i++;
        }
    return sum;
}


function sumofEven(num) {
    let sum = 0;
    let i = 1;
       while( i < num ) {
        if( i % 2 === 0) {
          sum += i;
        }
          i++;
    }
    return sum;
}


function sumofOdd(num) {
    let sum = 0;
    let i = 1;
      while( i < num ) {
        if( i % 2 !== 0) {
           sum += i;
        }   
           i++;
    }
    return sum;
}

