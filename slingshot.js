class slingshot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:50
        }
        this.pointB=point2;
        this.slingshot=Constraint.create(options)
        World.add(world,this.slingshot)
    }
    fly(){
        this.slingshot.bodyA=null
    }
    display(){ var pointA = this.slingshot.bodyA.position;
               var pointB = this.pointB;
               strokeWeight(4); 
               line(pointA.x, pointA.y, pointB.x, pointB.y); }
}