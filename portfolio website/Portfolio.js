// Convert HTMLCollection to an array
const projectItems = Array.from(document.getElementsByClassName("project") );

// Initial index and number of items to display
let initial = 0;
const set = 3; // Number of items to display at once

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

function selectLeft(){
    
}

function selectRight(){

}


if (projectItems.length==set){
    rightButton.disabled = true;
    leftButton.disabled = true;
}
else{

}
