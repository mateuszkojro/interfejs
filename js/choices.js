
function show_the_choices(input) {
	//document.getElementById("koniec").style.display = "";
	switch (input) {
		case "pilkas":
			document.getElementById("pilkas").style.display = "";
			break;
		case "pilkak":
			document.getElementById("pilkak").style.display = "";
			break;
		case "cwicz":
			document.getElementById("cwicz").style.display = "";
			break;
		case "tenis":
			document.getElementById("tenis").style.display = "";
			break;
		case "judo":
			document.getElementById("judo").style.display = "";
			break;
		case "gimn":
			document.getElementById("gimn").style.display = "";
			break;
		case "plywanie":
			document.getElementById("plywanie").style.display = "";
			break;
		case "fitnes":
			document.getElementById("fitnes").style.display = "";
			break;
		case "joga":
			document.getElementById("joga").style.display = "";
			break;
		case "nordic":
			document.getElementById("nordic").style.display = "";
			break;
		case "samo":
			document.getElementById("samo").style.display = "";
			break;
		case "taniec":
			document.getElementById("taniec").style.display = "";
			break;
		case "rech":
			document.getElementById("rech").style.display = "";
			break;
		case "model":
			document.getElementById("model").style.display = "";
			break;
		case "brydz":
			document.getElementById("brydz").style.display = "";
			break;
		case "futsal":
			document.getElementById("futsal").style.display = "";
			break;
		case "ratow":
			document.getElementById("ratow").style.display = "";
			break;
		case "all":
			for (let i = 0; i < document.getElementsByClassName("in").length; i++) {
				document.getElementsByClassName("in")[i].style.display = "";
			}

			break;
	}


}