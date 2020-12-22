class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.sling1=loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke("brown");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+40, pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            pop();
        }
    }
    
}