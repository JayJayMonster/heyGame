export class Dino {
    constructor() {
        console.log("Dino was created!");
        this.div = document.createElement("dino");
        document.body.appendChild(this.div);
        this.startx = 600;
        this.starty = 500;
        this.div.style.transform = `translate(${this.startx}px, ${this.starty}px)`;
    }
}
//# sourceMappingURL=dino.js.map