let fInp = document.getElementById('inp');
let result = document.getElementById('result');

const submitHandler = async (event) => {
    event.preventDefault();
    let x = fInp.value;
    let res1 = test(x);
    if(res1) {
        result.innerHTML = `<h1> Input = ${x} is a palindrome </h1>`;
    } else {
        result.innerHTML = `<h1> Input = ${x} is not palindrome </h1>`;
    }
}

// palindrome or not
 function test(x) {
    if(x.length <= 1) {
        return true;
    }
    if(x[0] !== x[x.length-1]) {
        return false;
    } else {
        return test(x.slice(1,x,length-1))
    }
 }