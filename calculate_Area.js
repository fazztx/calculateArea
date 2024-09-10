const calculateArea = () =>{
    // let l = document.getElementById("length"); 
    // let w = document.getElementById("width");
    // console.log(l.value * w.value);
    //It is always good practice to parse the value...
    let l = parseFloat(document.getElementById("length").value); 
    let w = parseFloat(document.getElementById("width").value);

    // The backticks and ${} notation allow for the inclusion of JavaScript variables within a string (using template literals). 
    document.getElementById("result").innerText = `The area is: ${l* w}`;
}

const calculateSum = () =>{
    let q1 = parseFloat(document.getElementById("q1").value);
    let q2 = parseFloat(document.getElementById("q2").value);

    document.getElementById("resultSum").innerHTML = `Total is ${q1+q2}`;
}