
class Paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.1,
			friction:25.0,
			density:1.2,
			setInertia:1000
   }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-21)/2, options)
		World.add(world, this.body);
        this.image=loadImage("paper.png")
	}
	display()
	{			
			var paperpos=this.body.position;		
      push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			//ellipse(0,0,this.r, this.r);
			image(this.image, 0, -45,110,80 );
			pop()
	}
}