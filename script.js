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


function show_the_choices() {

	let win = window.location.assign("wybierz.html");

}



function hide(obj) {
	document.getElementById(obj).style.display = "none";
	//window.location.assign("#q3");
}

function logout(){
	window.location.assign("login.html");
}



//Radar graph showing your intrests
//<canvas id="myChart" width="400" height="400"></canvas>
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(250, 0, 0, 0.2)',

            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
		size: 12,
		responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//pie chart showing how many people have chosen any category


function login_button() {
    
	window.location.assign("quiz.html");

} 
