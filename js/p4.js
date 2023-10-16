let op = document.getElementById('op');
let out = document.getElementById('output');

function selHandler() {
    let val = op.value;
    console.log('val =', val);

    switch (val) {
        case "square": 
            let x = prompt('Enter a side value?');
            let area = areasqr(Number(x));
              // console.log('output =', area);
            out.innerText = `Area of Square : ${area} units`;
        break;

        case "circle":
            let r = prompt('Enter a radius of a Circle?');
            out.innerText = `Area of Circle : ${areacir(Number(r))} units`;
        break;

        case "rect": 
            let l = prompt('Enter a length of a rectangle:');
            let b = prompt('Enter a breadth of a rectangle:');
            out.innerText = `Area of Rectangle : ${arearect(l,b)} units`;
        break;

        case "tri":
            let be = prompt('Enter a base of triangle:');
            let h = prompt('Enter a height of a triangle:');
            out.innerText = `Area of Triangle : ${areatri(be,h)} units`;
        break;

        case "para":
            let ba = prompt('Enter the base of parallelogram:');
            let he = prompt('Enter the height of a parallelogram:');
            out.innerText = `Area of Parallolegram : ${areapara(ba,he)} units`;
        break;

        case "cube":
            let s = prompt('Enter the sides value:');
            let area1 = areacube(Number(s));
            out.innerText = `Area of Cube : ${area1} units`;
        break;

        case "cyc":
            let ra = prompt('Enter the radius of a cyclinder:');
            let hi = prompt('Enter the height of a cyclinder:');
            out.innerText = `Area of Cyclinder : ${areacyc(ra,hi)} units`;
        break;

        case "trap":
            let b1 = prompt('Enter the base1 of trapezoid:');
            let b2 = prompt('Enter the base2 of trapezoid:');
            let ht = prompt('Enter the height of trapezoid:');
            out.innerText = `Area of Trapezoid : ${areatrap(b1,b2,ht)} units`;
        break;

        default:
            out.innerText = `Choose Proper shapes`;
        break;
    }
}

// function 
function areasqr(x) {
 return x*x;
}

function areacir(r) {
    let pi = Math.PI;
    return pi*r*r;
}

function arearect(l,b) {
    return (Number(l))*(Number(b));
}

function areatri(be,h) {
   return 0.5*(Number(be))*(Number(h));
}

function areapara(ba,he) {
   return (Number(ba))*(Number(he));
} 

function areacube(s) {
   return s*s*s;
}

function areacyc(ra,hi){
    let pi = Math.PI;
    return pi*(Number(ra))*(Number(ra))*(Number(hi));
}

function areatrap(b1,b2,ht) {
    return 0.5 *((Number(b1)) + (Number(b2))) * (Number(ht));
}
