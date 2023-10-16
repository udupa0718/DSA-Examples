function submitHandler(event) {
    event.preventDefault();
    let x = document.getElementById('km');
    let out = document.getElementById('output');

    let miles = 0.6213;
    let result = Number((x.value)) * miles;
    out.innerText = ` Km to miles after Conversion = ${result.toFixed()}`;
}