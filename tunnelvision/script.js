/* VARIABLES */
let screen = 0;
let title, playButton, directionsButton, backButton, mainCharacter, bgImage, bat1, bat2, bat3, leftpButton, rightpButton, bat4, pickaxe, easyButton, digButton, bgImage2, bat5, bat6, diamond1, diamond2, diamond3, font, font2, hiker, batImg, pickaxeImg, diamondImg, titleImg;
let level = 1
let collected = 0

/* PRELOAD LOADS FILES */
function preload(){
  bgImage = loadImage('assets/tunnel.png');
  bgImage2 = loadImage('assets/tunnel1.png');
  hiker = loadImage('assets/hiker.png');
  batImg = loadImage('assets/bat.png');
  pickaxeImg = loadImage('assets/pickaxe.png');
  diamondImg = loadImage('assets/diamond.png');
  titleImg = loadImage('assets/image-removebg-preview (3).png')
  font = loadFont('assets/Prompt/Prompt-Light.ttf');
  font2 = loadFont('assets/Prompt/Prompt-SemiBold.ttf');
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600,600);
  titleImg.resize(500, 0)
  homeScreen();
  

}

/* DRAW LOOP REPEATS */
function draw(){

  //When directions and play button is pressed on home screen
  if (screen == 0){
    if (directionsButton.mouse.presses()) {
      screen = 1;
      fill(105, 55, 8);
      backButton = new Sprite();
      backButton.w = 200;
      backButton.h = 80;
      backButton.x = width/2;
      backButton.y = height/2 + 120;
      backButton.color = "peru";
      textSize(15)
      textFont(font2)
      fill(48, 43, 110);
      backButton.text = ("Back to home");
      backButton.collider = "k";
      
    } else if (playButton.mouse.presses()) {
      screen = 2
      startGame()
    }
  }
  
  //Showing the directions screen
  if (screen == 1) {

    background(240, 197, 156);
    textSize(21);
    fill(105, 55, 8);
    textAlign(CENTER, CENTER)
    directionsButton.pos = {x: -400, y:-400};
    playButton.pos = {x: -800, y: 98};
    title.pos = {x:80, y: -300};
    text("While hiking you fall into a hidden hole\n and find yourself in a tunnel deep\n under the Earth's surface, you must find you way \nto the light at the end of the tunnel.\n Use the arrow keys to move the main character.\nStay hopeful, as this is not an easy challenge!", width/2, height/2 - 100);

    if (backButton.mouse.presses()) {
      screen = 0;
      backButton.pos = {x: - 500, y: -60};
      homeScreen();
    }
  }
  //Starting the first game level
  if (screen == 2) {
    
    background(56, 30, 2);
    directionsButton.pos = {x: -400, y:-400};
    title.pos = {x:80, y: -300};
    textAlign(CENTER, CENTER)
    image(bgImage, 0, 75)
    fill("white")
    textSize(25)
    text("Level: " + level, 60, 40)

    textSize(15)
    text("Oh no! There are so many bats,\navoid them to find you way out!", 430, 30)

    gameMovement()
    if (bat1.collides(mainCharacter)) {
      mainCharacter.x = 35;
      mainCharacter.y = 353;
      mainCharacter.vel.x = 0;
      mainCharacter.vel.y = 0;
    }

    if (mainCharacter.y >= 368) {
      mainCharacter.y = 367
    }

    if (bat2.collides(mainCharacter)) {
      mainCharacter.x = 35;
      mainCharacter.y = 353;
      mainCharacter.vel.x = 0;
      mainCharacter.vel.y = 0;
    }

    if (bat3.collides(mainCharacter)) {
      mainCharacter.x = 35;
      mainCharacter.y = 353;
      mainCharacter.vel.x = 0;
      mainCharacter.vel.y = 0;
    }

    if (mainCharacter.x == 590) {
      screen = 4
      level = 2
      background(224, 149, 94)
      Decision1Buttons()
      bat1.pos = {x: -1000, y: 10090};
      bat1.vel.y = 0
      bat2.pos = {x: 78, y: 1890}
      bat2.vel.y = 0
      bat3.pos = {x: 1000, y: 900}
      bat3.vel.y = 0
      mainCharacter.pos = {x: 670, y: 7000}
    }
  }

  if (screen == 4) {
    textSize(21);
    fill(105, 55, 8);
    textAlign(CENTER, CENTER)
    textFont(font2)
    text("Congrats! You've avoided all the bats, now you are\nmet with 2 passageways. As you take another \nstep, you step on an old \nmining shovel and a note beside\nit. You read the note and it is from a past miner, \n on the note he says to chose the left path to escape.\n What will you do?", 300, 230)

    if (leftpButton.mouse.presses()) {
      screen = 5
      background(162, 237, 135)
      leftpButton.pos = {x: 50, y: 5000}
      rightpButton.pos = {x: -4000, y: 78}
    } else if (rightpButton.mouse.presses()) {
      screen = 6
      leftpButton.pos = {x: 50, y: 5000}
      rightpButton.pos = {x: -4000, y: 78}
      drawLvl2()
    }

  }

  if (screen == 5) {
    textSize(30)
    fill(5, 74, 11)
    textAlign(CENTER, CENTER)
    text("You Escaped!", 300, 270)

    textSize(21)
    textFont(font)
    text("The miner was right! You reached the \nlight at the end of the tunnel and found \nyour way back home!", 300, 340)
  }

  if (screen == 6) {
    background(56, 30, 2);
    image(bgImage, 0, 75)
    fill("white")
    textSize(25)
    textAlign(CENTER, CENTER)
    text("Level: " + level, 60, 40)

    textSize(15)
    text("Oh no, it seems as if the miner was right!\n Remember to push through, avoid the bats,\n and collect the pickaxe!", 400, 35)
    

    if (kb.pressing('right')) {
      mainCharacter.vel.x = 4;
    } else if (kb.pressing('up')) {
      mainCharacter.vel.y = -4
    } else if (kb.pressing('down')) {
      mainCharacter.vel.y = 4
    } else if (kb.pressing('left')) {
        mainCharacter.vel.x = -4
    } else {
      mainCharacter.vel.x = 0
      mainCharacter.vel.y = 0
    }
    if (mainCharacter.y >= 368) {
      mainCharacter.y = 367
    }

    if (mainCharacter.y <= 192) {
      mainCharacter.y = 193
    }

    if (bat4.y > 430){
      bat4.vel.y = -3;
    } else if(bat4.y < 231){
      bat4.vel.y = 3;
    }

    if (bat4.collides(mainCharacter)) {
      mainCharacter.x = 35;
      mainCharacter.y = 353;
      mainCharacter.vel.x = 0;
      mainCharacter.vel.y = 0;
    } 

    if (pickaxe.collides(mainCharacter)) {
      pickaxe.pos = {x: 300, y: -1992029}
      screen = 7
      level = 3
      background(224, 149, 94)
      decision2Buttons()
      mainCharacter.pos = {x: 7070, y: 7000}
      mainCharacter.vel.x = 0
      mainCharacter.vel.y = 0
      bat4.pos = {x: -8000, y: 90000}
      bat4.vel.y = 0
    } 

  }

  if (screen == 7) {
    textSize(21);
    fill(105, 55, 8);
    textFont(font2)
    textAlign(CENTER, CENTER);
    text("Congrats! You've avoided the bat \nand secured the pickaxe! Once again \nthere are 2 passageways. The right path requires you\n to use your pickaxe to dig your way out, the left path\n is easier, you simply have to walk through!\n Which way do you go?", 300, 230)

    if (easyButton.mouse.presses()) {
      screen = 8
      background(162, 237, 135)
      easyButton.pos = {x: 500000, y: -5000}
      digButton.pos = {x: -4000, y: -6009450903}
    } else if (digButton.mouse.presses()) {
      screen = 9
      easyButton.pos = {x: 500000, y: -5000}
      digButton.pos = {x: -4000, y: -6009450903}
      drawLvl3()
    }
  }

  if (screen == 8) {
    textSize(30)
    fill(5, 74, 11)
    textAlign(CENTER, CENTER)
    text("You Escaped!", 300, 250)

    textFont(font)
    textSize(21)
    text("You took the easy way out and \nsimply walked through the passage to escape!\n Congrats!", 300, 340)
  }

  if (screen == 9) {
    background(56, 30, 2);
    image(bgImage2, 0, 75);
    fill("white")
    textSize(25)
    textAlign(CENTER, CENTER)
    text("Level: " + level, 60, 40)

    textSize(15)
    text("You've made the right decision, there are\n 3 diamonds here for you to collect!\n Push through, you can see the light!", 430, 30)

    if (kb.pressing('right')) {
      mainCharacter.vel.x = 6;
    } else if (kb.pressing('up')) {
      mainCharacter.vel.y = -4
    } else if (kb.pressing('down')) {
      mainCharacter.vel.y = 4
    } else if (kb.pressing('left')) {
        mainCharacter.vel.x = -4
    } else {
      mainCharacter.vel.x = 0
      mainCharacter.vel.y = 0
    }

    if (mainCharacter.y >= 368) {
      mainCharacter.y = 367
    }

    if (mainCharacter.y <= 200) {
      mainCharacter.y = 199
    }

    if (mainCharacter.y <= 190) {
      mainCharacter.y = 191
    }

    
    if (bat5.y > 435){
      bat5.vel.y = -4;
    } else if(bat5.y < 231){
      bat5.vel.y = 4;
    }

    if (bat6.y > 420){
      bat6.vel.y = -3;
    } else if(bat6.y < 241){
      bat6.vel.y = 3;
    }

    if (bat5.collides(mainCharacter)) {
      mainCharacter.x = 35;
      mainCharacter.y = 353;
      mainCharacter.vel.x = 0;
      mainCharacter.vel.y = 0;
    } 

    if (bat6.collides(mainCharacter)) {
      mainCharacter.x = 35;
      mainCharacter.y = 353;
      mainCharacter.vel.x = 0;
      mainCharacter.vel.y = 0;
    } 

    if (diamond1.collides(mainCharacter)) {
      collected = collected + 1
      diamond1.pos = {x: 6000000, y:89}
    } 

    if (diamond2.collides(mainCharacter)) {
      collected = collected + 1
      diamond2.pos = {x: -98, y:89}
    } 

    if (diamond3.collides(mainCharacter)) {
      collected = collected + 1
      diamond3.pos = {x: -1234, y:80009}
    } 

    if (collected == 3) {
      background(162, 237, 135)
      screen = 10
      mainCharacter.pos = {x: 7070, y: 7000}
      bat5.pos = {x: -800000, y: 9000000}
      bat5.vel.y = 0
      bat6.pos = {x: -20000000, y: -10000}
      bat6.vel.y = 0
    }
    
  }

  if (screen == 10) {
    textSize(30)
    fill(5, 74, 11)
    textAlign(CENTER, CENTER)
    text("You Escaped!", 300, 250)

    textFont(font)
    textSize(21)
    text("You persevered and dug through! Not only \nhave you escaped this abandoned mine, but you \nalso collected 3 rare diamonds!\n Congrats!", 300, 345)
  
  }

  
}

/* FUNCTIONS */
function homeScreen() {
  background(240, 197, 156);
  textSize(25)
  textFont(font2)
  title = new Sprite();
  title.image = titleImg;
  title.w = 100
  title.h = 100
  title.x = width / 2;
  title.y = 180;
  title.collider = 'k';

  
  fill("peru")

  playButton = new Sprite()
  playButton.w = 150;
  playButton.h = 80;
  playButton.x = 200;
  playButton.y = height/2 + 100;
  playButton.color = "peru";
  playButton.text = ("Play!");
  playButton.collider = "k";

  directionsButton = new Sprite()
  directionsButton.w = 150;
  directionsButton.h = 80;
  directionsButton.x = 400;
  directionsButton.y = height/2 + 100;
  directionsButton.color = "peru";
  directionsButton.text = ("Directions");
  directionsButton.collider = "k";
}

function startGame() {
  playButton.pos = {x: -800, y: 98};
  
  textSize(13)
  
  mainCharacter = new Sprite()
  mainCharacter.w = 65;
  mainCharacter.h = 115;
  mainCharacter.image = hiker;
  mainCharacter.x = 35;
  mainCharacter.y = 368;
  mainCharacter.rotationLock = true;

  bat1 = new Sprite()
  bat1.w = 30;
  bat1.h = 38;
  bat1.x = 150;
  bat1.y = 190;
  bat1.image = batImg
  bat1.collider = 'k';

  bat2 = new Sprite()
  bat2.w = 30;
  bat2.h = 38;
  bat2.x = 320;
  bat2.y = 240;
  bat2.image = batImg
  bat2.collider = 'k';

  bat3 = new Sprite()
  bat3.w = 30;
  bat3.h = 38;
  bat3.x = 470;
  bat3.y = 230;
  bat3.image = batImg
  bat3.collider = 'k';
}

function gameMovement() {
  if (kb.pressing('right')){
    mainCharacter.vel.x = 5;
  } else {
    mainCharacter.vel.x = 0;
  }

  if (bat1.y > 410){
    bat1.vel.y = -3;
  } else if(bat1.y < 191){
    bat1.vel.y = 3;
  }


  if (bat2.y > 420){
    bat2.vel.y = -2;
  } else if(bat2.y < 241){
    bat2.vel.y = 2;
  }


  if (bat3.y > 383){
    bat3.vel.y = -3;
  } else if(bat3.y < 231){
    bat3.vel.y = 3;
  }
}

function Decision1Buttons() {
  textSize(14)
  fill(59, 35, 4)
  textFont(font)

  //Button to go to the left path
  leftpButton = new Sprite()
  leftpButton.w = 160;
  leftpButton.h = 70;
  leftpButton.x = 200;
  leftpButton.y = height/2 + 100;
  leftpButton.color = "white";
  leftpButton.text = ("Hope the note is right\n and go left");
  leftpButton.collider = "k";
  
  //Button to go to the right path
  rightpButton = new Sprite()
  rightpButton.w = 160;
  rightpButton.h = 70;
  rightpButton.x = 400;
  rightpButton.y = height/2 + 100;
  rightpButton.color = "white";
  rightpButton.text = ("Don't trust the note\n and go right");
  rightpButton.collider = "k";
  
}

function drawLvl2() {
  textSize(11)

  mainCharacter.pos = {x: 35, y: 360}

  pickaxe = new Sprite()
  pickaxe.w = 45;
  pickaxe.h = 48;
  pickaxe.x = 565;
  pickaxe.y = 250;
  pickaxe.image = pickaxeImg
  pickaxe.collider = 'k';

  bat4 = new Sprite()
  bat4.w = 30;
  bat4.h = 38;
  bat4.x = 260;
  bat4.y = 230;
  bat4.image = batImg
  bat4.collider = 'k';
}

function decision2Buttons() {
  textSize(14)
  textFont(font)

  //Button to go to the left path
  easyButton = new Sprite()
  easyButton.w = 160;
  easyButton.h = 70;
  easyButton.x = 200;
  easyButton.y = height/2 + 100;
  easyButton.color = "white";
  easyButton.text = ("Take the easy way \nout and go left");
  easyButton.collider = "k";

  //Button to go to the right path
  digButton = new Sprite()
  digButton.w = 160;
  digButton.h = 70;
  digButton.x = 400;
  digButton.y = height/2 + 100;
  digButton.color = "white";
  digButton.text = ("Dig your way out\n and go right");
  digButton.collider = "k";

}

function drawLvl3() {
  textSize(11)

  mainCharacter.pos = {x: 35, y: 353}

  diamond1 = new Sprite()
  diamond1.w = 51;
  diamond1.h = 40;
  diamond1.x = 565;
  diamond1.y = 200;
  diamond1.image = diamondImg
  diamond1.collider = 'k';

  diamond2 = new Sprite()
  diamond2.w = 51;
  diamond2.h = 40;
  diamond2.x = 565;
  diamond2.y = 280;
  diamond2.image = diamondImg
  diamond2.collider = 'k';

  diamond3 = new Sprite()
  diamond3.w = 51;
  diamond3.h = 40;
  diamond3.x = 565;
  diamond3.y = 370;
  diamond3.image = diamondImg
  diamond3.collider = 'k';

  bat5 = new Sprite()
  bat5.w = 30;
  bat5.h = 38;
  bat5.x = 215;
  bat5.y = 230;
  bat5.image = batImg
  bat5.collider = 'k';

  bat6 = new Sprite()
  bat6.w = 30;
  bat6.h = 38;
  bat6.x = 360;
  bat6.y = 230;
  bat6.image = batImg
  bat6.collider = 'k';
}
