import { GameObject } from "./gameObject.js";
export class Rock extends GameObject {
    constructor(tagName) {
        super(tagName);
        this.x = Math.floor(Math.random() * window.innerWidth) + window.innerWidth;
        this.y = 600;
    }
    update() {
        this.x -= 3;
        super.update();
        if (this.x < -this.div.clientWidth) {
            this.x = window.innerWidth;
        }
    }
}
//# sourceMappingURL=rock.js.map