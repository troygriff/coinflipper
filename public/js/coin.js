var audio = new Audio('sound/coin.wav');



document.addEventListener("keydown", checkkey);


function toss(){
	// content.innerHTML = "<img src ='img/coinstart.png'>";
	//clear();
	// content.innerHTML = "<img src ='img/coinstart.png'>";
	$("#image").attr("src", "");
	audio.play();
	var random = Math.random();//chooses random number beteen 0 and 1
	//var content = document.getElementById("content");
	// content.innerHTML = "<img src ='img/coinstart.png'>";

	var response = document.getElementById("response");
	var answer = document.getElementById("answer")
	if (random > .5) {
		var gifImage = "img/cointosstails.gif"+"?a="+Math.random();
		$("#image").attr("src",gifImage);
		answer.innerHTML ="No, you should not " + response.value;

	} else {
		var gifImage = "img/cointossheads.gif"+"?a="+Math.random();
		$("#image").attr("src",gifImage);
		answer.innerHTML="Yes, you should " + response.value + ".";
	}
}



function checkkey(e) {
	if (e.keyCode == 13) {
		toss();
	}
}
