class Bird{
    constructor(x,y){

        var opt={

restitution:0.8,
friction:1,
density:1.0
        }

this.body=Bodies.circle(x,y,20,opt);
this.radius=20;
World.add(myWorld,this.body);

    }

    display(){
        //rectMode(CENTER); 
       // rect(this.body.position.x,this.body.position.y,this.width,this.height);
       var pos =this.body.position;
       pos.x= mouseX;
       pos.y= mouseY
       
       
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill("blue");
       stroke("yellow")
       strokeWeight(3)
       ellipse(0, 0, this.radius, this.radius);
       pop();
    }
}