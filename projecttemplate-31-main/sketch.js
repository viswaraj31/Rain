const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameState = 0;
var r1,r2,r3,r4,r5,r6,r7;
var t1,t2,t3,t4,t5,t6,t7;
var y1,y2,y3,y4,y5,y6,y7;
var u1,u2,u3,u4,u5,u6,u7;
var floor;

var maxDrops=100;

function preload(){
    
}

function setup(){
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    r1 = new Rain(180,50,5);
    r2 = new Rain(46,50,5);
    r3 = new Rain(112,50,5);
    r4 = new Rain(178,50,5);
    r5 = new Rain(246,50,5);
    r6 = new Rain(312,50,5);
    r7 = new Rain(378,50,5);

    t1 = new Rain(180,-50,5);
    t2 = new Rain(46,-50,5);
    t3 = new Rain(112,-50,5);
    t4 = new Rain(178,-50,5);
    t5 = new Rain(246,-50,5);
    t6 = new Rain(312,-50,5);
    t7 = new Rain(378,-50,5);

    y1 = new Rain(180,-150,5);
    y2 = new Rain(46,-150,5);
    y3 = new Rain(112,-150,5);
    y4 = new Rain(178,-150,5);
    y5 = new Rain(246,-150,5);
    y6 = new Rain(312,-150,5);
    y7 = new Rain(378,-150,5);

    u1 = new Rain(180,-250,5);
    u2 = new Rain(46,-250,5);
    u3 = new Rain(112,-250,5);
    u4 = new Rain(178,-250,5);
    u5 = new Rain(246,-250,5);
    u6 = new Rain(312,-250,5);
    u7 = new Rain(378,-250,5);


    
}

function draw(){
    background("black")
    Engine.update(engine);
    
    for(var i=0; i<maxDrops; i++){

    }

    
    
    r1.display();
    r2.display();
    r3.display();
    r4.display();
    r5.display();
    r6.display();
    r7.display();

    t1.display();
    t2.display();
    t3.display();
    t4.display();
    t5.display();
    t6.display();
    t7.display();

    y1.display();
    y2.display();
    y3.display();
    y4.display();
    y5.display();
    y6.display();
    y7.display();

    u1.display();
    u2.display();
    u3.display();
    u4.display();
    u5.display();
    u6.display();
    u7.display();



    console.log(r1.body.speed);
    console.log(r1.body.position.y);
}   

