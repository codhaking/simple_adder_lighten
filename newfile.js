document.getElementById("adder").onclick = adderCalc;

function adderCalc(){

const num1 = parseInt(document.getElementById("num1").value)
const num2 = parseInt(document.getElementById("num2").value)
let answer = num1 + num2
document.getElementById("answer").innerHTML = answer

	//add validation
	if (isNaN(num1) || isNaN(num2)) {
		//error message
		alert("Input must be  two valid numbers!")
		document.getElementById("answer").innerHTML = ""
	}else{
		document.getElementById("adder").onclick = adderCalc;
	}

}

document.getElementById("cls").onclick = clearCalc;

function clearCalc(){
document.getElementById("num1").value = ""
document.getElementById("num2").value = ""
document.getElementById("answer").innerHTML = ""
}


