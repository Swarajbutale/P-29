class SlingShot
{
     constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 40,
            stiffness : 0.2
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
     }
     display() {
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
        // this.sling(pointA,pointB);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
     fly() {
         this.sling.bodyA = null;
     }
}