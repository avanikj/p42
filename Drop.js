class Drops{
  constructor(x,y){
      var options = {
          friction : 0.001,
          restitution : 0.1
      }
      this.body = Bodies.circle(x,y,5,options)
      World.add(world,this.body)
      this.r = 5
  }

  update(){
      if(this.body.position.y > height){
         Matter.Body.setPosition(this.body,{x:random(0,800),y:0})
      }
  }

  display(){
      fill("blue")
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r+5)
  }

}