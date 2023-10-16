/*

A
A B
A B C
A B C D
A B C D E

*
* *
* * *
* * * *
* * * * * 

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

let n = 7;
let str = '';

for(let i=1; i<=n; i++) {
    for(let j=0; j<i;j++) {
        str += String.fromCharCode(j+97); // lowercase a-z
    }
    str += "\n";
}
console.log(str);


// for uppercase
let str1 = '';

for(let i=1; i<=n; i++) {
    for(let j=0; j<i;j++) {
        str1 += String.fromCharCode(j+65); // uppercase A-Z
    }
    str1 += "<br>";
}
document.getElementById("res1").innerHTML = str1;


// for lowercase
let str2 = ""; 

for(let i=1; i<=n; i++) {
    for(let j=0; j<i;j++) {
        str2 += String.fromCharCode(j+97); // lowercase a-z
    }
    str2 += "<br>";
}
document.getElementById("res2").innerHTML = str2;


// for asterisk
let str3 = '';

for(let i=1; i<=n; i++) {
    for(let j=0; j<i;j++) {
        str3 += "*"; // asterisk *
    }
    str3 += "<br>";
}
document.getElementById("res3").innerHTML = str3;


// for number
let str4 = "";

for(let i=1; i<=n;i++) {
    for(let j=1; j<=i;j++) {
        str4 += `${j}`; // number 123
    }
    str4 += "<br>";
}
document.getElementById("res4").innerHTML = str4;


