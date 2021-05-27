export class Rock {
    constructor() {
        console.log("Rock was created");
        this.create();
    }
    create() {
        this.div = document.createElement("rock");
        document.body.appendChild(this.div);
        this.x = 500;
        this.y = 540;
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=rock.js.map