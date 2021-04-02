class mango{ 
    constructor(x,y,r) { 
      var options={ 
        isStatic:true,
        restitution:0,
         friction:1, 
           } 
         this.x=x; this.y=y;
          this.r=r 
          this.image = loadImage("plucking+mangoes/mango.png");
          this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options) 
          World.add(world, this.body);
        }
         display() {
            var rubberpos=this.body.position;
             push() 
             translate(rubberpos.x, rubberpos.y);
             // rectMode(CENTER) 
             ellipseMode(RADIUS);
              strokeWeight(4);
               stroke("black");
                fill("darkblue"); 
                ellipse(0,0,this.r, this.r);
                 pop() 
                } 
              }