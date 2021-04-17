class Pig{
    constructor(x,y){

        var opt={
            restitution:0.8,
            friction:1,
            density:1.0
        }

this.body=Bodies.rectangle(x,y,50,50,opt);
this.width=50;
this.height=50;
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
       fill("green");
       rect(0, 0, this.width, this.height);
       pop();
    }
}