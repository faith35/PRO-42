class Drops {
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.rain = Bodies.circle(x,y,5,options)
        World.add(world, this.rain)
        this.r = 5

    }
    update(){
       if (this.rain.position.y > height) {
           Matter.Body.setPosition(this.rain,{x:random(0,700),y:random(0,700)})
    }
}
    display(){
        var pos = this.rain.position;
        fill("blue")
        ellipse(pos.x,pos.y,5,5)
        

        
    }
}
