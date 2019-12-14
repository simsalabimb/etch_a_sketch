You’re going to build a browser version of something between a sketchpad and an Etch-A-Sketch.


https://jackisadog97.github.io/sketch_board/

Figure out how to get border around container so it's inside of a box

Get grid to only print inside of the box




grid-template-columns: repeat(var(--grid-cols), 1fr); grid-template-rows: repeat(autofit, minmax(950px, 1fr));

    grid-template-rows: repeat(var(--grid-rows), 1fr);
    grid-template-columns: repeat(var(--grid-cols), 1fr); 




https://jackisadog97.github.io/sketch_board/ : uses nested divs to create box but not sure how to keep grid contained inside box

    .house {
      margin-left: auto;
      margin-right: auto;
      margin-top: 0px;
      width: 700px;
  }
  

    .grid_container {
      display: grid;
      background: black;
      width: 700px;
      height: 700px;
      border: 4px groove lightcoral;
  }