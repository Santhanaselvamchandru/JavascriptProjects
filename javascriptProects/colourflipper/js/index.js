window.onload= function(){
	var btn = document.getElementById("btn");
	var color = document.getElementById("hex");
	var body = document.getElementsByTagName("body")[0];

	var hex_values = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];

	btn.addEventListener("click", function(){ 
		var hex = "#";
		for(var i=0; i<6;i++){
			hex += hex_values[randomValue()];
		}
		body.style.backgroundColor=hex;
		color.textContent = hex;
	});


	function randomValue(){
		return Math.floor(Math.random()*hex_values.length);
	}
};