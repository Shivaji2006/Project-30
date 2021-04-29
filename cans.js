class Cans{
    constructor(x,y,width,height){
        var options = {
         friction: 1,
         restitution: 1,
         density: 0.2
        }

        this.body = Bodies.rectangle(x,y,20,25);
        this.x = x;
        this.y = y;
        World.add(world,this.body);

    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(x,y,width,height);

    }

}