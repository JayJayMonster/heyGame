export class Astroid {
    
    x : number
    y : number
    div : HTMLElement
    
    constructor() {
        console.log("Astroid was created");

              this.create();
    }
    create() {
        this.div = document.createElement("astroid");
        document.body.appendChild(this.div);
        
        this.x = 600;
        this.y = 270;
    }
    update() {
        this.y ++;
        this.x --;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
        
        if(this.y + this.div.clientHeight > 800) {
            // Place the fish on the right side outside the screen
            this.y = 0;
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