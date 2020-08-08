class Nonplayer{
    constructor(x,y,width,height){
        this.body= Bodies.rectangle(x,y,width,height)
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        //if(this.body.speed>4){
        //    World.remove(world,this.body)
            
      //  }
       // else{
        fill(255)
       
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
   // }
    }
     moving(){
        this.body.position.x-=10
        if(this.body.position.x<752){
        this.body.position.x+=14;
        }
    }
    
     
}