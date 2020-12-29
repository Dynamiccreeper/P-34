class Wrecker {

    constructor(x,y,w,h,angle){
    
    var options ={
    
    restitution:1,friction:0,frictionAir:0.0,slop:1,intertia: Infinity
    
    }
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.angle=angle;
    this.body=Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    
    
    }
    display(){ 
        push();
    fill("black");
        var pos=this.body.position;
        var angle=this.body.angle;
        translate(pos.x,pos.y)
        rotate(angle);
        
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h);

    pop();
    
    
    }
    
    
    
    
    }