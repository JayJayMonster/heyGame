export class GameObject {
    constructor(tagName) {
        this.spawn(tagName);
    }
    getRect() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    spawn(tagName) {
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);
    }
    remove() {
        this.div.remove();
    }
}
//# sourceMappingURL=gameObject.js.map