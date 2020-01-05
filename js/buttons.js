function logout(){
	
	window.location.assign("login.html");

}


function login() {
    
	window.location.assign("quiz.html");

} 


function submit(){

	let string = "<h1> Gratulacje! </h1> <h2> wybralas/es </h2>" + wybor;
	
	document.getElementById("endgame").innerHTML = string;

}

function hide(obj) {

	document.getElementById(obj).style.display = "none";

}




//prczyciski dotyczace quizu


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