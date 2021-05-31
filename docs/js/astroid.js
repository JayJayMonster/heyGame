export class Astroid {
    constructor() {
        console.log("Astroid was created");
        this.create();
    }
    create() {
        this.div = document.createElement("astroid");
        document.body.appendChild(this.div);
        this.x = Math.random() * window.innerWidth;
        this.y = 270 - Math.random() * 30;
        this.xSpeed = 2;
        this.ySpeed = 2;
    }
    update() {
        this.y += this.ySpeed;
        this.x -= this.xSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.y + this.div.clientHeight > 600) {
            this.y = -70;
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