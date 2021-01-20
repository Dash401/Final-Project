var miner;
var stoneImage, goldImage, diamondImage, ironImage, woodImage,coalImage,redstoneImage,lapisImage;
var spritesGroup;

function preload() {
  stoneImage = loadAnimation("Images/Stone 2d.jpg");
  goldImage = loadAnimation("Images/gold.png");
  diamondImage = loadAnimation("Images/Diamond.png");
  ironImage = loadAnimation("Images/iron ore.png");
  coalImage = loadAnimation("Images/Coal.png");
  woodImage = loadAnimation("Images/Wood.jpg");
  redstoneImage = loadAnimation("Images/Redstone.png");
  lapisImage = loadAnimation("Images/Lapis.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  miner = createSprite(width/2, height/2, 50, 50);
  miner.shapeColor = "lime";

  spritesGroup = new Group();

  createStones();
  removeOverlappingSprites();
}

function draw() {
  background(0);  

  moveTheMiner();

  drawSprites();
}

function removeOverlappingSprites () {
  for(var i = 0; i < spritesGroup.length; i++) {
    var sprite = spritesGroup.get(i);
    for(var j = i+1; j < spritesGroup.length; j++ ) {
      var otherSprite = spritesGroup.get(j);
      if(sprite.isTouching(otherSprite)) {
        otherSprite.destroy();
      }
    }
  }
}

function createStones() {
  var numOfStones = Math.round(random(35, 40));
  for(var i = 0; i < numOfStones; i++) {
    var stone = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    stone.addAnimation("stone", stoneImage);
    stone.scale = 0.2;
    spritesGroup.add(stone)
  }

  for(var i = 0; i < numOfStones/2; i++) {
    var gold = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    gold.addAnimation("gold", goldImage);
    gold.scale = 0.2;
    spritesGroup.add(gold);
  }

  for(var i = 0; i < numOfStones/5; i++) {
    var diamond = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    diamond.addAnimation("diamond", diamondImage);
    diamond.scale = 0.2;
    spritesGroup.add(diamond);
  }
  for(var i = 0; i < numOfStones - 10; i++) {
    var iron = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    iron.addAnimation("iron", ironImage);
    iron.scale = 0.2;
    spritesGroup.add(iron);
  }
  for(var i = 0; i < numOfStones + 15; i++) {
    var coal = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    coal.addAnimation("coal", coalImage);
    coal.scale = 0.2;
    spritesGroup.add(coal);
  }
  for(var i = 0; i < numOfStones - 5; i++) {
    var wood = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    wood.addAnimation("wood", woodImage);
    wood.scale = 0.2;
    spritesGroup.add(wood);
  }
  for(var i = 0; i < numOfStones - 5; i++) {
    var lapis = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    lapis.addAnimation("Lapis", redstoneImage);
    lapis.scale = 0.2;
    spritesGroup.add(lapis);
  }
  for(var i = 0; i < numOfStones - 5; i++) {
    var Redstone = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    Redstone.addAnimation("RedStone", lapisImage);
    Redstone.scale = 0.2;
    spritesGroup.add(Redstone);
  }

}

function moveTheMiner() {
  if(keyDown("w")) {
    miner.y = miner.y - 5;
  }
  if(keyDown("a")) {
    miner.x = miner.x - 5;
  }
  if(keyDown("s")) {
    miner.y = miner.y + 5;
  }
  if(keyDown("d")) {
    miner.x = miner.x + 5;
  }
}