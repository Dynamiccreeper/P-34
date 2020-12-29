class Chain {

    constructor(bodyA,pointB){
    
    var options ={
    
    bodyA:bodyA,pointB:pointB,stiffness:1,lenght:220
    
    }
    
    this.bodyA=bodyA;
    this.pointB=pointB;
 this.rope=Constraint.create(options);
    World.add(world,this.rope);
    
    }

    display(){ 
       
            var pointA=this.bodyA.position;
            var pointB=this.pointB;
            push();
            fill("black");
          //  strokeWeight(3.5);
           // storke("#fff");
           line(pointA.x,pointA.y,pointB.x,pointB.y);
   
            pop();
       

    
    }
    
    
    
    
    }