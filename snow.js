class Snow{
    constructor(x,y,r){
        var options={
            isStatic:false,
            frictionAir:1.5,
            density:0.5
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Matter.Bodies.circle(this.x,this.y,this.r);
        this.image=loadImage("snow5.webp");
        Matter.World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        rotate(angle);
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
      
        
    }
}