export class Tree {
    constructor() {
        console.log("Tree was created");
        this.create();
    }
    create() {
        this.div = document.createElement("tree");
        document.body.appendChild(this.div);
        this.x = 400;
        this.y = 500;
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=tree.js.map