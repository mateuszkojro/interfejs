let nie_wiem = document.getElementById("drugi");
let wiem = document.getElementById("pierwszy");

let wybor = "";

console.log("i am herer");

document.getElementById("q1").style.display = "none";
document.getElementById("q2").style.display = "none";
document.getElementById("q3").style.display = "none";
document.getElementById("q4").style.display = "none";
document.getElementById("koniec").style.display = "none";


for(let i = 0; i < document.getElementsByClassName("in").length;i++){
	document.getElementsByClassName("in")[i].style.display = "none";
}


function submit(){

	let string = "<h1> Gratulacje! </h1><h2> wybralas/es </h2>" + wybor;
	
	document.getElementById("endgame").innerHTML = string;
	

}


function button1_click() {

	wybor = "all";
	show_the_choices(wybor);
	
}

function button2_click() {

	document.getElementById("q1").style.display = "";
	window.location.assign("#quiz");

}

function button3_click() {

	wybor = "";
	show_the_choices(wybor);
	
}

function button4_click() {
	
	document.getElementById("q2").style.display = "";
	window.location.assign("#q2");

}

function button5_click() {

	wybor = "";
	show_the_choices(wybor);

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

	wybor = "";
	show_the_choices(wybor);

}

function button9_click() {

	wybor = "";
	show_the_choices(wybor);

}

function button10_click() {

	wybor = "";
	show_the_choices(wybor);

}


function hide(obj) {

	document.getElementById(obj).style.display = "none";

}

function logout(){
	
	window.location.assign("login.html");

}


function login() {
    
	window.location.assign("quiz.html");

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