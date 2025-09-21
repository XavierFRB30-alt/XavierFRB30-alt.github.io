//event listeners
document.querySelector("#textButtonBtn").addEventListener("click", changeColor)//REMBER: do not use parenthesis on function argument
//document.querySelector("#textSizeBtn").addEventListener("click", changeColor)//REMBER: do not use parenthesis on function argument

function changeColor() {
    alert("changing color");
    let color = document.querySelector("#textColor").value;
}