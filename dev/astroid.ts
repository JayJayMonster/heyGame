export class Astroid {
    
    x : number
    y : number
    div : HTMLElement
    xSpeed: number
    ySpeed: number
    
    constructor() {
        console.log("Astroid was created");

              this.create();
    }
    create() {
        this.div = document.createElement("astroid");
        document.body.appendChild(this.div);
        
        this.x = Math.random()*window.innerWidth;
        this.y = 270-Math.random()*30;
        this.xSpeed = Math.random();
        this.ySpeed = Math.random();
    }
    update() {
        this.y += this.ySpeed;
        this.x -= this.xSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        
        if(this.y + this.div.clientHeight > 800) {
            // Place the fish on the right side outside the screen
            this.y = -70;
            // Generate a random x-value
            this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        }
    }

    getRect(){
        return this.div.getBoundingClientRect();
    }

    remove(){
        this.div.remove();
    }
}