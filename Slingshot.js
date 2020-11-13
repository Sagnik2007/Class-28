class Slingshot{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:10
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(option);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
    var pa = this.sling.bodyA.position
    var pb = this.pointB
        push()
        strokeWeight(5);
        stroke(45);
        line(pa.x,pa.y,pb.x,pb.y)
        pop()
    }
}
}