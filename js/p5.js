// Swaping with temp variable
function swap() {
    let x = Number(prompt('enter  input 1?'));
      let y = Number(prompt('enter  input 2?'));

    document.write(`<h2> Before x = ${x} and y = ${y} </h2>`);

    let temp;
       temp = x;
       x = y;  
       y = temp;

    document.write(`<h2> After x = ${x} and y = ${y} </h2>`);
}


// Swaping with temp variable
function swapWithoutTemp() {
    let a = Number(prompt('enter  input 1?'));
       let b = Number(prompt('enter  input 2?'));

    document.write(`<h2> Before a = ${a} and b = ${b} </h2>`);

        a = a + b;
        b = a - b;
        a = a - b;

    document.write(`<h2> After a = ${a} and b = ${b} </h2>`);
}

// Swaping with Arguments( ES-6 -> Destructuring Assignment)
function swapWithArguments() {
    let r = Number(prompt('enter  input 1?'));
      let t = Number(prompt('enter  input 2?'));

    document.write(`<h2> Before r = ${r} and t = ${t} </h2>`);
 
        [r,t] = [r,t];

    document.write(`<h2> After r = ${r} and t = ${t} </h2>`);
}

// Swaping using bitwise xor operator
function swapXor() {
    let g = Number(prompt('enter  input 1?'));
      let h = Number(prompt('enter  input 2?'));

    document.write(`<h2> Before g = ${g} and h = ${h} </h2>`);
 
        g = g ^ h;
        h = g ^ h;
        g = g ^ h;

    document.write(`<h2> After g = ${g} and h = ${h} </h2>`);
}