class drops{
	constructor(x,y,r)
	{
		var options={
			friction: 0.1,
			}
		this.x=x;
        this.y=y;
        this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
        World.add(world, this.body);
	}
    }
	display()
	{
		var dropsPos=this.body.position;	
		push()
		translate(dropsPos.x, dropsPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		ellipseMode(CENTER);
		pop()
 }