const input = document.getElementById('button');

function  notification() {
    alert("I was clicked!");
}
function addingEventListener () {
    input.addEventListener("click",notification);
}