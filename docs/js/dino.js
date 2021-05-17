export class Dino {
    constructor() {
        console.log("Dino was created!");
        this.div = document.createElement("dino");
        document.body.appendChild(this.div);
        this.startx = (Math.random() * window.innerWidth);
        this.starty = (Math.random() * window.innerHeight);
        this.div.style.transform = `translate(${this.startx}px, ${this.starty}px)`;
    }
}
//# sourceMappingURL=dino.js.map