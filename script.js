function change() {
    var a = document.getElementById("changeMe");
    a.innerHTML=("Whoa, that is a wierd feeling.")
}
function size() {
    var a = document.getElementById("changeMe");
    a.style.fontSize=("100px")
}
function show() {
    var a = document.getElementById("answer");
    a.style.display=("block")
}
function submit() {
    var a = document.getElementById("input")
    if(a.value!=="2") {
        show();
    }
    else {
        add()
    }
}
function add() {
    var a = document.getElementById("score");
    a.style.color=("green");
}