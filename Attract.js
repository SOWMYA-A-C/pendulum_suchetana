class Attract {
    constructor(bodyA, bodyB){
        // this.offsetX = offsetX;
        // this.offsetY = offsetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            //pointB: {x:this.offsetXX, y:this.offsetY},
            stiffness:1,
            length:1,
        }
        //this.pointB = pointB;
        this.attract = Matter.Constraint.create(options);
        World.add(world, this.attract);
    }
    display(){
        var pointA = this.attract.bodyA.position
        var pointB = this.attract.bodyB.position
        stroke(0);
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}