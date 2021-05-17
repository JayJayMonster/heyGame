export class Dino {

    startx: number;
    starty: number;
    div: HTMLElement;

    constructor() {
        console.log("Dino was created!")
        this.div = document.createElement("dino")
        document.body.appendChild(this.div)
        //this.startx = (Math.random() * window.innerWidth)
        this.startx = 600;
        this.starty = 500;
        //this.starty = (Math.random() * window.innerHeight)
        this.div.style.transform = `translate(${this.startx}px, ${this.starty}px)`
    }
}