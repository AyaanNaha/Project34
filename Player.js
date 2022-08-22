class Player
{
    constructor() {
        this.x=200;
        this.y=30;
        this.spaceshipImage = loadImage("spaceship.png");
        
    }

    show() {
        imageMode(CENTER);
        image(this.spaceshipImage,this.x,this.y,120,100);
    }

    handleControls() {
        if(keyIsDown(RIGHT_ARROW) && this.x < 340) {
            this.x += 2;
        }

        if(keyIsDown(LEFT_ARROW) && this.x > 60) {
            this.x -= 2;
        }
    }



}