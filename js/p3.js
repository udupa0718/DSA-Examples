let pr = document.getElementById("pr");
let ti = document.getElementById("yr");
let rate = document.getElementById("rate");

let result = document.getElementById("result");

    
    function submitHandler(e) {
        e.preventDefault();
        
        let p = Number(pr.value);
        let t = Number(ti.value);
        let r = Number(rate.value);

        let a = (p * t * r) / 100;
        result.innerHTML = `<div>
                    <h1> Simple Interest = ${a} </h1>
                    <h1> Principle = ${p} </h1>
                    <h1> Rate of Interest = ${r} </h1>
                    <h1> Time (years) = ${t} </h1>
                </div> `;
}
