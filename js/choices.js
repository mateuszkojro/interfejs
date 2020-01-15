
function show_the_choices(input) {

	window.location.assign("#koniec");
	document.getElementById("quiz").style.display = "none"
	document.getElementById("main").style.display = "none"
	

	document.getElementById("koniec").style.display = "";
	switch (input) {
		case "b3":
			document.getElementById("pilkas").style.display = "";
			document.getElementById("pilkak").style.display = "";
			document.getElementById("futsal").style.display = "";
			break;
		case "b5":
			document.getElementById("judo").style.display = "";
			document.getElementById("samo").style.display = "";
			break;
		case "b8":
			document.getElementById("tenis").style.display = "";
			document.getElementById("brydz").style.display = "";
			break;
		case "b9":
			document.getElementById("rech").style.display = "";
			document.getElementById("joga").style.display = "";
			document.getElementById("gimn").style.display = "";
			document.getElementById("nordic").style.display = "";
			break;
		case "b10":
			document.getElementById("model").style.display = "";
			document.getElementById("taniec").style.display = "";
			document.getElementById("fitnes").style.display = "";
			document.getElementById("plywanie").style.display = "";
			document.getElementById("ratow").style.display = "";
			break;
		
		default:
			for (let i = 0; i < document.getElementsByClassName("container").length; i++) {
				document.getElementsByClassName("container")[i].style.display = "";
			}

			break;
	}


}