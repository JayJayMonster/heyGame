export class Rock {
    
    x : number
    y : number
    div : HTMLElement
    
    constructor() {
        console.log("Rock was created");
        
        //for (let i = 0; i < 3; i++) {
              this.create();
        //}
    }
    create() {
        this.div = document.createElement("rock");
        document.body.appendChild(this.div);
        
        this.x = 500;
        this.y = 540;
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}