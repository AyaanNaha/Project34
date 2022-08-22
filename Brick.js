class Brick
{
    constructor(x,y,w,h) {
        let options = {
            isStatic:false
        }

        this.body = Bodies.rectangle(x,y,w,h,options);

        this.w=w;
        this.h=h;
        this.x=x;
        this.y=y;
        this.image1 = loadImage('woodplank1.png');
        this.image2 = loadImage('woodplank2.png');

        World.add(world,this.body);
    }

    show() {
        let pos = this.body.position;

        if(this.w>this.h) {
            image(this.image1,pos.x,pos.y,this.w,this.h);
        } else {
            image(this.image2,pos.x,pos.y,this.w,this.h);
        }

        this.x = pos.x;
        this.y = pos.y;
    }
}