class Log{
    constructor(x,y,height,angle){

        var opt={
restitution:0.8,
friction:1.5,
density:1.0
        }

this.body=Bodies.rectangle(x,y,20,height,opt);
this.width=20;
this.height=height;
Matter.Body.setAngle(this.body, angle)
World.add(myWorld,this.body);

    }

    display(){
        //rectMode(CENTER); 
       // rect(this.body.position.x,this.body.position.y,this.width,this.height);
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("red");
       rect(0, 0, this.width, this.height);
       pop();
    }
}