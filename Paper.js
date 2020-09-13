class Paper {
    constructor (x,y,radius){
        var options = {
            isStatic : false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.paper1 = loadImage("paper.png")
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.paper1,pos.x,pos.y, this.radius,this.radius);
    }
};