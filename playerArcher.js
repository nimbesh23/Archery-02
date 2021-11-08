class PlayerArcher {
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.image = loadImage('./assets/playerArcher.png')
        var options = {isStatic : true}
        
        this.body = bodies.rectangle(x,y,w,h,options)
        World.add(world , this.body)
        Matter.Body.setAngle(this.body , 90)
    }

    display() {
        var angle = this.body.angle
      
        

        if (keyCode === ( UP_ARROW)) {
            console.log('UP')
            angle = angle+1 ; 
            Matter.Body.setAngle(this.body , angle )
        }
        
        if (keyCode === ( DOWN_ARROW)) {
            console.log('DOWN')
            angle = angle-1 ; 
            Matter.Body.setAngle(this.body , angle )
        }
        

        push ()
        
        var pos = this.body.position
        translate (pos.x , pos.y)
        rotate (angle)
        imageMode (CENTER)
        image(this.image, 0 , 0 , this.w , this,h)
        pop ()

    }
}

