class umbrella {
    constructor(x,y){
        
    }
    ellipse(x,y);
    varimage = loadImage("images/Walking Frame/walking_1.png")
    image(){

    }
}
class umbrella
{
	constructor(x,y,r)
	{
		var options={
			isStatic
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/Walking Frame/walking_1.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var umbrellaPos=this.body.position;		
			push()
			translate(umbrellaPos.x, umbrellaPos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}