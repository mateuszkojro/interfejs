let nie_wiem = document.getElementById("drugi");
let wiem = document.getElementById("pierwszy");
//nie_wiem.onclick = nie_wiem_click();
//wiem.onclick = wiem_click();

//create_fluff();
console.log("i am herer");

//ukrywam sekcje z pytaniami powinienem w funkcji gdzies
document.getElementById("q1").style.display = "none";
document.getElementById("q2").style.display = "none";
document.getElementById("q3").style.display = "none";
document.getElementById("q4").style.display = "none";
document.getElementById("koniec").style.display = "none";


for(let i = 0; i < document.getElementsByClassName("in").length;i++){
	document.getElementsByClassName("in")[i].style.display = "none";
}

function show_the_choices(input) {

	document.getElementById("koniec").style.display = "";
	switch(input){
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
		default:

			for(let i = 0; i < document.getElementsByClassName("in").length;i++){
				document.getElementsByClassName("in")[i].style.display = "";
			}

			break;
	}


}


function button1_click() {

	console.log("button 1 click");
	//write_cookie("fuck off you motherfucker");
	window.location.assign("wybierz.html");

	show_the_choices("all");
}

function button2_click() {

	console.log("button 2 click");
	document.getElementById("q1").style.display = "";
	window.location.assign("#quiz");

	read_cookie();

}

function button3_click() {

	document.cookie = document.cookie + "moze,nie,moze,tak";
	document.location.assign("chose.html");
	
}

function button4_click() {
	
	document.getElementById("q2").style.display = "";
	window.location.assign("#q2");

}

function button5_click() {

	show_the_choices();

}

function button6_click() {
	document.getElementById("q3").style.display = "";
	window.location.assign("#q3");
}

function button7_click() {
	document.getElementById("q4").style.display = "";
	window.location.assign("#q4");
}

function button8_click() {

	show_the_choices();

}

function button9_click() {

	show_the_choices();

}

function button10_click() {

	show_the_choices();

}


function hide(obj) {
	document.getElementById(obj).style.display = "none";
	//window.location.assign("#q3");
}

function logout(){
	window.location.assign("login.html");
}


function login_button() {
    
	window.location.assign("quiz.html");

} 
