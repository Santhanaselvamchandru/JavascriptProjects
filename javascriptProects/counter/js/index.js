window.onload= function(){
	var prev_btn = document.getElementById("prev");
	var stop_btn = document.getElementById("stop");
	var start_btn = document.getElementById("start");
	var count = document.getElementById("count");

	var i =0;
	var ID = 0;
	prev_btn.addEventListener("click",function(){
		ID = setInterval(prev_count,1000);
	});

	stop_btn.addEventListener("click",function(){
		clearInterval(ID);
	});

	start_btn.addEventListener("click",function(){
		ID = setInterval(start_count,1000);
	});

	function prev_count(){
		i -= 1;
		setColor(i);
		count.textContent = i;
	}
	function start_count(){
		i += 1;
		setColor(i);
		count.textContent = i;
	}
}
function setColor(i){
	if(i < 0){
		count.style.color="red";
	}
	else if(i == 0){
		count.style.color ="black"
	}
	else{
		count.style.color = "green";
	}
}