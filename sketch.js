var f1, f1Image;
var f2, f2Image;
var f3;
var a1, a1Image;
var GameOver, goI
var score = 0;
var f4, f4Image;
var f3Image;
var PLAY  = 1;
var END = 0;
var gameState = END;
var gameState = PLAY
var knife, knifeImage;
var f1Group, f2Group, f3Group, f4Group;
var swooshSound;

function preload()
{
  f1Image = loadImage("fruit1.png");
  f2Image = loadImage("fruit2.png");
  f3Image = loadImage("fruit3.png");
  f4Image = loadImage("fruit4.png");
  
  a1Image = loadImage("alien1.png");
  GameOver = loadImage("gameover.png");
  
  knifeImage = loadImage("sword.png");
  swooshSound = loadSound("knifeSwooshSound.mp3")
 
}

function setup()
{
  createCanvas(400, 400)
  
  f1Group = createGroup();
  f2Group = createGroup();
  f3Group = createGroup();
  f4Group = createGroup();
  
  a1Group = createGroup();
  
  knife = createSprite(200, 200, 20, 20);
  knife.addImage(knifeImage);
  knife.scale = 0.5;
  
  goI = createSprite(200, 200, 400, 400)
  goI. visible = false
  
}

function draw()
{
 background(180)
  
  knife.x = World.mouseX;
  knife.y = World.mouseY;
  
    if (gameState === PLAY)
    {
      
  spawnF3()
  spawnF1();
  spawnF2();
    
  
      text ("Score = " + score, 50, 50);
  if (f1Group.isTouching(knife) || f2Group.isTouching(knife)||f3Group.isTouching(knife)||f4Group.isTouching(knife))
    {
      score = score + 2
    }

  if (f1Group.isTouching(knife))
    {
      f1Group.destroyEach()
    }
  
  if (f4Group.isTouching(knife))
    {
      f4Group.destroyEach();
    }
  
  
  if (f2Group.isTouching(knife))
    {
      f2Group.destroyEach()
    }
  
  if (f3Group.isTouching(knife))
    {
      f3Group.destroyEach()
    }
  
  if (f1Group.isTouching(knife))
    {
      swooshSound.play()
    }
  
  if (a1Group.isTouching(knife))
    {
      gameState = END;
    }
}
   else if (gameState === END)
     {
        goI.addImage(GameOver)
      goI.visible = true;
       f1.visible = false;
       f2.visible = false;
       f3.visible = false;
       f4.visible = false;
       a1.visible = false;
       over()
     }
  
  spawnA1()
  spawnF4();
  spawnF3();
  drawSprites()
}

function spawnF1()
{
if (frameCount % 63 === 0)
  {
  f1 = createSprite(0,random(50, 350), 20, 20)
  f1.addImage(f1Image);
  f1.scale = 0.25;
  f1Group.add(f1)
  f1.velocityX = 8
 
  }
}

function spawnF2()
{
    if (frameCount % 87 === 0)
  {
  f2 = createSprite(0, random(50, 350),10, 10)
  f2.addImage(f2Image);
  f2.scale = 0.25
  f2Group.add(f2)
  f2.velocityX = 8
  }
}

function spawnF3()
{
  if (frameCount % 111 === 0)
    {
      f3 = createSprite(0, random(50, 350), 30, 30);
      f3.addImage(f3Image);
      f3.scale = 0.20
      f3.velocityX = 8;
      f3Group.add(f3);
    }
}

function spawnF4()
{
  if (frameCount % 133 === 0)
    {
      f4 = createSprite(0, random( 50, 350), 30, 30);
      f4.addImage(f4Image);
      f4.scale = 0.20;
      f4.velocityX = 8;
      f4Group.add(f4)
       
    }
}

function spawnA1()
{
  if (frameCount % 301=== 0)
    {
      a1 = createSprite(0, random( 50, 350), 20, 20)
      a1.addImage(a1Image);
      a1.scale = 1;
      a1.velocityX = 8;
      a1Group.add(a1)
    }
}

function over()
{
  f1.velocityX = 0;
  f1.x = 0;

  
  f2.velocityX = 0;
  f2.x = 0;
 
  
  f3.velocityX = 0;
  f3.x = 0;

  
  f4.velocityX = 0;
  f4.x = 0;
  
  
  
  a1.velocityX = 0;
  a1.x = 0;
  
}


