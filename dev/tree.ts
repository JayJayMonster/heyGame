export class Tree {
    
    x : number
    y : number
    div : HTMLElement
    
    constructor() {
        console.log("Tree was created");
        
        //for (let i = 0; i < 3; i++) {
              this.create();
        //}
    }
    create() {
        this.div = document.createElement("tree");
        document.body.appendChild(this.div);
        
        this.x = 400;
        this.y = 500;
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}