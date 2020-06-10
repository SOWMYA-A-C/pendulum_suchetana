class Chain {
    constructor(bodyA, pointB){
        // this.offsetX = offsetX;
        // this.offsetY = offsetY;
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            //pointB: {x:this.offsetXX, y:this.offsetY},
            stiffness:0.03,
            length:20,
        }
        this.pointB = pointB;
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        stroke(0);
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}