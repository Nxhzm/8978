var dog,sadDog,happyDog, milkSpr, MilkCont, amilk;
var foodObj;
var foodstock, getFoodStock, updateFoodStock, deductFood;
var buttonAddFood, buttonFeedPet;
var database, firebase;
var foodS;

//AddFood, FeedPet , foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  MilkCont = loadImage ("Images/Milk.png");

}

function setup() {
  //database = foodstock.database();
  //database = firebase.database();
  createCanvas(1000,400);
  

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food (200,200,30,30);

  /*milkSpr = createSprite(250,200,30,30);
  milkSpr.addImage(MilkCont);
  milkSpr.scale=0.15;*/

  /*milk = createSprite(300,200,30,30);
  milk.addImage(Milk);
  milk.scale=0.15;*/


  var title = createElement('h3');
        title.html("VIRTUAL PET");
        title.position(600,100);

        buttonAddFood = createButton('+');
        buttonFeedPet = createButton('FeedPet');

        buttonAddFood.position(900,150);
        buttonFeedPet.position(1000,150);

        buttonAddFood.mousePressed(AddFood);
        buttonFeedPet.mousePressed(FeedPet);

}

function draw() {
  background(46,139,87);
  drawSprites();
  var play;
  play = createButton('Play')


  foodObj.display();
  play.display();

 
}

//function to read food Stock
function AddFood(){
foodS++;
database.ref('/').update({Food:foodS})
};

function FeedPet(){


};

//function to update food stock and last fed time


//function to add food in stock
