import { GameObject } from "./gameObject.js";
export class Tree extends GameObject {
    constructor(tagName) {
        super(tagName);
        this.x = Math.floor(Math.random() * window.innerWidth) + window.innerWidth;
        this.y = 550;
    }
    update() {
        this.x -= 3;
        super.update();
        if (this.x < -this.div.clientWidth) {
            this.x = window.innerWidth;
        }
    }
}
//# sourceMappingURL=tree.js.map