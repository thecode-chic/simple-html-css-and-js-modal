// get modal element
var modal = document.getElementById("myModal")
// function to open model
function openModal(){
    modal.style.display = "block";
}
// function to close the modal
function closeModal(){
    modal.style.display = "none";
}
// close modal when user clicks anywhere outside
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}