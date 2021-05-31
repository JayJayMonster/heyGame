export class Player {
    constructor() {
        this.horizontalSpeed = 0;
        console.log("Rex was created!");
        window.addEventListener("keyup", (e) => this.onKeyUpHandler(e));
        window.addEventListener("keydown", (e) => this.onKeyDownHandler(e));
        this.create();
    }
    create() {
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = 550;
        this.health = 5;
    }
    update() {
        this.x += this.horizontalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    onKeyDownHandler(e) {
        switch (e.key) {
            case "a":
            case "ArrowLeft":
                this.horizontalSpeed = -5;
                break;
            case "d":
            case "ArrowRight":
                this.horizontalSpeed = 5;
                break;
            case " ":
                this.y = 500;
        }
    }
    onKeyUpHandler(e) {
        switch (e.key) {
            case "a":
            case "d":
            case "ArrowLeft":
            case "ArrowRight":
                this.horizontalSpeed = 0;
                break;
        }
        if (e.key == " ") {
            this.y = 550;
        }
    }
    getRect() {
        return this.div.getBoundingClientRect();
    }
    hit() {
        this.health--;
        console.log(this.health);
        this.div.style.filter = "grayscale(100%)";
        if (this.health <= 0) {
            console.log("GAME OVER BITCH");
        }
    }
}
//# sourceMappingURL=player.js.map