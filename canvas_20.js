let w;
let columns;
let rows;
let board;
let next;


function init() {
    w = 13;
  columns = floor(width / w);
  rows = floor(height / w);
  board = make2dArray(columns,rows);
  next = make2dArray(columns,rows);
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      board[i][j] = 0;
      next[i][j] = 0;
    }
  }
}

function CanvasGo(){
  generate();
  display();
  life();
}

// Fill board randomly
function life() {
  if (bs==20||bs==0) {
    let mouseSpeed = floor((abs(mouseX-pmouseX)+abs(mouseY-pmouseY))/2);
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if ( (0<=i & i<=1) || (columns-2<=i & i<=columns-1) || (0<=j & j<=1) || (rows-2<=j & j<=rows-1) ) {
          board[i][j] = 0;
        }else if (mouseSpeed!=0) {
          let dm = dist(i*w+w/2,j*w+w/2,mouseX,mouseY);
          if(w<=dm & dm<=2*w ){
            mouseSpeed = map(mouseSpeed,0,10,0,1);
            let k = floor(random(1-mouseSpeed));
            if (k <= 0 ) {
              board[i][j] = 1;
              //board[i+1][j] = 1;
              //board[i][j+1] = 1;
              //board[i-1][j] = 1;
              //board[i][j-1] = 1;
              //board[i+1][j+1] = 1;
              //board[i+2][j+2] = 1;
              //board[i+2][j] = 1;
              //board[i][j+2] = 1;
            }
          }
        }
      }      
    }
  }
  if (bs!=0 && bs!=20) {

    newSP = rl;
    let SV = abs(newSP-oldSP);
    if (100<=SV) SV=100;
    oldSP = rl;

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if(floor(columns/6)<=i&i<=columns-1-(floor(columns/6))&floor(rows/5)-3<=j&j<=rows-1-(floor(rows/5))-3) {
          let f = random(9000)-(SV*SV/29);
          let k = floor(f);
          if (k <= 0 ) {
            //board[i][j] = 1;
            //board[i+1][j] = 1;
            //board[i][j+1] = 1;
            //board[i-1][j] = 1;
            //board[i][j-1] = 1;
            board[i+1][j+1] = 1;
            board[i+2][j+2] = 1;
            board[i+2][j] = 1;
            board[i][j+2] = 1;
          }
        }
      }
    }
  }

}


// The process of creating the new generation
function generate() {

  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 2; x < columns - 2; x++) {
    for (let y = 2; y < rows - 2; y++) {
      // Add up all the states in a 3x3 surrounding grid 
      let neighbors = 0;
      //let d = dist(x*w+w/2,y*w+w/2,mouseX,mouseY);
      for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
          neighbors += board[x + i][y + j];
        }
      }

      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= board[x][y];
      // Rules of Life
      if ((board[x][y] == 1) && (neighbors < 5)) {
        next[x][y] = 0;
      }
      // Loneliness
      else if ((board[x][y] == 1) && (neighbors > 9)) {
        next[x][y] = 0;
      } // Overpopulation  
      else if ((board[x][y] == 0) && (neighbors == 7) ) {
        next[x][y] = 1;
      }
      // Reproduction
      else next[x][y] = board[x][y]; // Stasis
    }
  }  
  // Swap!
    let temp = board;
    board = next;
    next = temp;
}


function display(){
  background(255,255,255);
  for (let i = 2; i < columns-2; i++) {
    for (let j = 2; j < rows-2; j++) {
      if (board[i][j] == 1){
        if (bs == 1 || bs == 21 || rbs == 1) {
          fill(random(230,255),random(230,255),random(0,95)); //homepagerightOver
        }else if (s == 1 || s == 21) {
          fill(random(230,255),random(50,135),random(0,35)); //logoDIVOver
        }else{
          fill(random(235,250),90,0); //canvasOver
        }
        noStroke();
        rect((i-1) * w, (j-1) * w, w*3 , w*3 );
      }
    }
  }
   //noFill();
   //strokeWeight(1);
   //stroke(0);
   //rect(0,0,canvasW,canvasH);
}




function make2dArray(tempx,tempy){
  let array = new Array(tempx);
  let x = tempx;
  let y = tempy;
  for (let i = 0; i < array.length ; i++) {
    array[i] = new Array(tempy);
  }
  return array;
}