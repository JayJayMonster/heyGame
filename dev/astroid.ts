import { GameObject } from "./gameObject.js";

export class Astroid extends GameObject {
    
    xSpeed: number
    ySpeed: number
    
    constructor(tagName : string) {
        super(tagName);

              this.x = Math.random()*window.innerWidth;
              this.y = 270-Math.random()*30;
              this.xSpeed = 2;
              this.ySpeed = 2;
    }

    public update() {
        this.y += this.ySpeed;
        this.x -= this.xSpeed;
        
        if(this.y + this.div.clientHeight > 600) {
            // Place the astroid on the right side outside the screen
            this.y = -70;
            // Generate a random x-value
            this.x = 300 + Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        }
        super.update();
    }
}