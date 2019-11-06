/*class cookie{
    constructor(text){
        let arr = text.split("=");
        this.func = arr[0];
        this.args = arr[1].split(",");
    }


}*/
hide();
show(["pilkas", "judo", "futsal"]);

function hide() {

    arr = document.getElementsByClassName('in');

    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
    }
}
function show(arr) {

    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.display = "";
    }

}