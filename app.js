const container = document.getElementById("container");
let clear = document.getElementById("clear");
let active = document.getElementsByClassName('used');
let reset = document.getElementById("reset");


//CREATES THE INITIAL GRID TO BE USED
function makeRows(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
  container.appendChild(cell).className = "grid-item";
  };
};

//WILL BE USED FOR MOUSEOVER EFFECT
let effect = function(e) {
  let gridBox = e.target;
  
  // check if the event target is class "grid-item" and adds "used" format 
  if(gridBox.className == 'grid-item') {
    gridBox.classList.add('used');
  }
}

//function to clear the grid formatting
function removeClass(){
  while (active[0]){
    active[0].classList.remove('used');
  }
}

//function to reset the grid with new dimensions
function newGrid(){
  container.innerHTML = "";
  while (active[0]){
    active[0].classList.remove('used');
  }

  let gridSize = prompt("How many squares per side do you want?");
  makeRows(gridSize);
}

makeRows(16); //starts initial 16 x 16 grid
clear.addEventListener('click', removeClass);
reset.addEventListener('click', newGrid);
addEventListener('mouseover', effect, false);
