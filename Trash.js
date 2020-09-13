class Trash {
    constructor (x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = 100;
        this.height = 150;
        this.trash1 = loadImage("dustbingreen.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.trash1,pos.x,pos.y, this.width, this.height);
    }
};