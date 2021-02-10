class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
        this.visibility = 255;
    } 
    display(){
        if(this.body.speed < 9){
          push()
          var pos = this.body.position
          var angle = this.body.angle
          translate(pos.x,pos.y)
          rotate(angle)
          rectMode(CENTER);
          rect(0,0,this.width,this.height);
          pop()
          }
          else{
            World.remove(myWorld,this.body);
            push()
            this.visibility = this.visibility - 5;
            tint(255,this.visibility);
            pop()
          }
    } 
    score(){
      if (this.visibility < 0 && this.visibility > -100){
        score++;
      }
    }
  
}