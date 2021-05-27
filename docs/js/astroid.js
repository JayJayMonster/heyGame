export class Astroid {
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
        this.y++;
        this.x--;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.y + this.div.clientHeight > 800) {
            this.y = 0;
            this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        }
    }
    getRect() {
        return this.div.getBoundingClientRect();
    }
    remove() {
        this.div.remove();
    }
}
//# sourceMappingURL=astroid.js.map