class Bomb {
    constructor() {
        this.body = Bodies.circle(player.x,player.y,15);
        this.image = loadImage('bomb.png');

        World.add(world,this.body);
    }

    show() {
        let pos = this.body.position;
        image(this.image,pos.x,pos.y,30,30);
    }
}