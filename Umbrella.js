class Umbrella{
    constructor(x,y){

        var options = {
            isStatic : true,
        }
        
        this.image = loadImage("images/Walking Frame/walking_1.png")
        this.body = Bodies.circle(x,y,115,options)
        World.add(world,this.body)
    }

display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,300,300)

}

}