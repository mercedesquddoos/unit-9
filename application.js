function solveMod(){
	var numOne = document.getElementById("numberOne");
	var numTwo = document.getElementById("numberTwo");
	var numThree = document.getElementById("numberThree")
	var output = document.getElementById("output");
	
	output.innerHTML = "";
	
	for (var i = numOne.value; i <= numTwo.value; i++) {
		if(i % numThree.value == 0){
        output.innerHTML += "<div>" + i + "</div>";
		}
    }         
}