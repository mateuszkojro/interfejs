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


function create_fluff() {
	for (let i = 0; i < 100; i++) {

		let main = document.getElementById("main");
		main.innerHTML += "<br/> mdziala";

	}
	/*
	hide("q1")
	hide("q2")
	hide("q3")
	hide("q4")
	*/

	document.getElementById("q1").style.display = "none"
	document.getElementById("q2").style.display = "none"
	document.getElementById("q3").style.display = "none"
	document.getElementById("q4").style.display = "none"
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

function login_button() {

	document.cookie = "";
	document.cookie = document.cookie + "id=" + document.getElementById("login").value;
	document.cookie = document.cookie + ";";
	window.location.assign("quiz.html");

}

function register_button(arr){

	window.location.assign("register.html");

}

function show_the_choices() {

	let win = window.location.assign("wybierz.html");

}

//scroll dow and go to quiz section


//go to listy wyborow


function hide(obj) {
	document.getElementById(obj).style.display = "none";
	//window.location.assign("#q3");
}


function write_cookie(arr) {
	cookie_string = "";
	for (let i = 0; i < arr.length; i++) {
		console.log(cookie_string);
		cookie_string = cookie_string + ";" + arr[i];

	}
	document.cookie = cookie_string;
}


function read_cookie() {

	arr = [];
	return arr;

}

function logout(){
	window.location.assign("login.html");
}

//moge pozkaywac i chowac opcje quizu przez chwoanie danej sekcji - ustawianie jej jako hide

