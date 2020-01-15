function logout(){
	
	window.location.assign("login.html");

}


function login() {
    if(document.getElementById("login").value == "user" && document.getElementById("pssd").value == "123"){
		window.location.assign("quiz.html");
	}
	//window.location.assign("quiz.html");

} 


function submit(){
	document.getElementById("koniec").style.display = "none";

	
	
	for (let i =0 ; i < document.getElementsByClassName("checkmark").length;i++){
		if(document.getElementsByClassName("checkmark")[i].value == true){
			wybor  = document.getElementsByClassName("checkmark")[i].id
		}
	}

	let string = "<h1> Gratulacje! </h1> <h2> Dziękujemy za dokonanie wyboru!! </h2> <button onclick='window.location.reload(true)'>Powrót</button>";

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

	wybor = "b3";
	show_the_choices(wybor);
	
}

function button4_click() {
	
	document.getElementById("q2").style.display = "";
	window.location.assign("#q2");

}

function button5_click() {

	wybor = "b5";
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

	wybor = "b8";
	show_the_choices(wybor);

}

function button9_click() {

	wybor = "b9";
	show_the_choices(wybor);

}

function button10_click() {

	wybor = "b10";
	show_the_choices(wybor);

}