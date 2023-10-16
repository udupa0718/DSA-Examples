let nums = document.getElementById('nums');
let out = document.getElementById("output");

function submitHandler(event) {
   event.preventDefault();
    let inp = nums.value;
        console.log('nums =', nums.value);

// string to array
    let arr = inp.split(',');
    console.log('arr =', arr);


// array of strings to number array conversion
    let numArr = arr.map((item) => {
    return Number(item);
    });
    console.log('numArray =', numArr);

   let large = Math.max(...numArr);
   let small = Math.min(...numArr);

   out.innerHTML =`<h1>Largest = ${large} and Smallest =${small}</h1>`;
}

// using looping method
function largest(numbers) {
    let x = numbers[0];
    for(let i=1;i<numbers.length; i++){
        if(numbers[i] > x){
            x = numbers[i];
        }
    }
    return x;
}

function smallest(numbers) {
    let x = numbers[0];
    for(let i=1; i<numbers.length; i++){
        if(numbers[i] < x){
            x = numbers[i];
        }
    }
    return x;
}