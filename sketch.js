const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var wrecker;
var rope,rope2,rope3,rope4,rope5;
var mouse;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    //let canvasmouse = mouse.create(canvas.elt);
    //canvasmouse.pixelRatio = pixelDensity();
   // let options ={

        //mouse: canvasmouse
    //}
        ground = new Ground(600,790,1200,20);
        box1 =new Wrecker(500,400,150,150);
        box2 =new Wrecker(600,400,150,150);
        box3 =new Wrecker(700,400,150,150);
        box4 =new Wrecker(800,400,150,150);

     
        wrecker=new Wrecker(300,400,150,150)

        rope=new Chain(wrecker.body,{x:400,y:50});
        rope2=new Chain(box1.body,{x:500,y:50});
        rope3=new Chain(box2.body,{x:600,y:50});
        rope4=new Chain(box3.body,{x:700,y:50});
        rope5=new Chain(box4.body,{x:800,y:50});
}
function draw(){
    background("lightblue");
    Engine.update(engine);
        mouseDrag();
        ground.display();
        box1.display();
        box2.display();
        box3.display();
        box4.display();
 

        wrecker.display();
        rope.display();
        rope2.display();
        rope3.display();
        rope4.display();
        rope5.display();
}

    function mouseDrag(){

        Matter.Body.setPosition(wrecker.body,{x:mouseX,y:mouseY});

    }
