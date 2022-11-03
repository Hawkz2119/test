let button = document.getElementById("Check");
button.addEventListener("click", checkTest);
function checkTest(){
  let result = 0;
  let a1 = document.getElementById("q1").value;
if (a1 === "174"){
    result++
}
let a2 = document.getElementById("q2").value;
if (a2 === "650"){
    result++
}
let a3 = document.getElementById("q3").value;
if (a3 === "902"){
    result++
}
let a4 = document.getElementById("q4").value;
if (a4 === "169"){
    result++
}
let a5 = document.getElementById("q5").value;
if (a5 === "268"){
    result++
}
alert("Right Answers" + " " +  result);
}
