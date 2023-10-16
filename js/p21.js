let inpArray = [1,-2,4,0,-12,20,16];
let out = document.getElementById('out');
let out1 = document.getElementById('out1');

console.log('input =', inpArray);


let asc = document.getElementById('asc');
let dec = document.getElementById('dec');


function ascOrder(arr) {
      for( i=0; i<arr.length; i++) {
        for(let j=0; j< arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


function decOrder(arr) {
    for( i=0; i<arr.length; i++) {
        for(let j=0; j< arr.length; j++) {
            if(arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let res = ascOrder(inpArray);
console.log('asc =', res);
out.innerHTML =`<h1> Asc = ${res} </h1>`;


let res1 = decOrder(inpArray);
console.log('dec =', res1);
out1.innerHTML =`<h1> Dec = ${res1} </h1>`;