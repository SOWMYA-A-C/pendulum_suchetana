class Bob{
    constructor(x, y){
        var options = {
            //'restitution':10,
            // 'friction':1.0,
            // 'density':20.0,
            // 'isStatic': true,
            //'mass':200.0,

            isStatic:true,
			restitution:0.2,
			friction:0,
            density:0.8,
           
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radiusX = 50;
        this.radiusY = 50;
        World.add(world, this.body);
        
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        fill("yellow");
      //  ellipseMode(RADIUS)
        ellipse(0, 0, this.radiusX, this.radiusY);   
        pop()
    }
}