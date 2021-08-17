let contestants;
let tempPosX, tempPosY;
let speed = 3;
let diameter = 15;
let rock, paper, scissors;
let gameover = false;
let winner;

function preload(){
  rock = loadImage('https://i.imgur.com/lh0MxIL.jpg');
  paper = loadImage('https://i.imgur.com/uJze8Ez.png');
  scissors = loadImage('https://i.imgur.com/YmNvvp7.jpg');
}

function setup(){
    createCanvas(400, 400);
    contestants = [];
    for(let i = 0; i < 50; i++){
      contestants.push(new object);
    }
}

function draw(){
  if(!gameover){
    background(220);
    checkCollisions();
    checkWin();
  for(let i = 0; i < contestants.length; i++){
    contestants[i].move();
    contestants[i].display();
    }
  } else {
    if(contestants[0].type === 1){
      winner = "Rock";
    } else if (contestants[0].type === 2) {
      winner = "Paper";
    }else if (contestants[0].type === 3) {
      winner = "Scissors";
    } else {
      console.log("WTF");
      winner = "I don't know who"
    }
      textSize(64);
      text(winner + " wins!", 50, 100);
  }
}


class object{
  constructor(){
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
    this.diameter = diameter;
    this.speed = speed;
    this.type = round(random(1, 3));
  }

  move(){
    this.update(generateTempPos(this.x, this.y));
  }

  update(position) {
    this.x = position[0];
    this.y = position[1];
  }

  display(){
    if(this.type === 1){
      image(rock, this.x - this.diameter, this.y - this.diameter, this.diameter * 2, this.diameter * 2);
    } else if (this.type === 2) {
      image(paper, this.x - this.diameter, this.y - this.diameter, this.diameter * 2, this.diameter * 2);
    }else if (this.type === 3) {
      image(scissors, this.x - this.diameter, this.y - this.diameter, this.diameter * 2, this.diameter * 2);
    }
  }
}

function checkCollisions(){
  for(let i = 0; i < contestants.length; i++){
    for(let j = 0; j < contestants.length; j++){
      if(abs(contestants[i].x - contestants[j].x) < 20 && abs(contestants[i].y - contestants[j].y) < 20 && (i != j)){
        contestants[i].type = fight(contestants[i].type, contestants[j].type);
        contestants[j].type = fight(contestants[i].type, contestants[j].type);
      }
    }
  }
}

function fight(typeA, typeB){
  if(typeA === typeB){
    return typeA;
  }

  // 1 = rock, 2 = paper, 3 = scissors
  if(typeA === 1 && typeB === 2){
    return 2;
  }
  if(typeA === 1 && typeB === 3){
    return 1;
  }
  if(typeA === 2 && typeB === 1){
    return 2;
  }
  if(typeA === 2 && typeB === 3){
    return 3;
  }
  if(typeA === 3 && typeB === 1){
    return 1;
  }
  if(typeA === 3 && typeB === 2){
    return 3;
  }
}


function generateTempPos(x, y){
      tempPosX = x + (speed * round(random(-1, 1)));
      tempPosY = y + (speed * round(random(-1, 1)));

      while(!checkTempPos([tempPosX, tempPosY])){
        generateTempPos(x,y)
      }
      return [tempPosX,tempPosY];
}

 function checkTempPos(pos){
   if(pos[0] < width && pos[0] >= diameter &&
       pos[1] < height && pos[1] >= diameter){
     return true;
   } else {
     return false;
   }
 }

function checkWin(){
  let wincounter = 0;
  for(let i = 1; i < contestants.length; i++){
    if(contestants[0].type === contestants[i].type){
      wincounter++;
    }
    if(wincounter === 49){
      gameover = true;
    }
  }

}
