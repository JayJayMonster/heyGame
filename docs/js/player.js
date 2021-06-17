import { GameObject } from "./gameObject.js";
export class Player extends GameObject {
    constructor(g) {
        super("player");
        this.horizontalSpeed = 0;
        this.gameOver = false;
        this.jumping = false;
        this.falling = false;
        this.game = g;
        window.addEventListener("keyup", (e) => this.onKeyUpHandler(e));
        window.addEventListener("keydown", (e) => this.onKeyDownHandler(e));
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = 600;
        this.health = 5;
    }
    update() {
        this.x += this.horizontalSpeed;
        if (this.jumping) {
            if (this.y > 500) {
                this.y -= 4;
                if (this.div.classList.contains("left")) {
                    this.div.classList.add("jumpingLeft");
                    this.div.classList.remove("left", "right", "jumpingRight");
                }
                else if (this.div.classList.contains("right")) {
                    this.div.classList.add("jumpingRight");
                    this.div.classList.remove("right", "left", "jumpingLeft");
                }
            }
            else {
                this.falling = true;
                this.jumping = false;
            }
        }
        if (this.falling) {
            if (this.y < 600) {
                this.y += 2;
            }
            else {
                this.falling = false;
                this.jumping = false;
            }
        }
        super.update();
    }
    onKeyDownHandler(e) {
        switch (e.key) {
            case "a":
            case "ArrowLeft":
                if (!this.jumping) {
                    this.horizontalSpeed = -5;
                    this.div.classList.add("left");
                    this.div.classList.remove("right", "jumpingRight", "JumpingLeft");
                }
                break;
            case "d":
            case "ArrowRight":
                if (!this.jumping) {
                    this.horizontalSpeed = 5;
                    this.div.classList.add("right");
                    this.div.classList.remove("left", "jumpingLeft", "jumpingRight");
                }
                break;
            case " ":
                if (this.y == 600) {
                    this.jumping = true;
                }
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
    }
    hit() {
        this.health--;
        console.log(this.health);
        this.div.style.filter = "grayscale(100%)";
        if (this.health <= 0) {
            console.log("GAME OVER BITCH");
            this.game.gameOver = true;
        }
        setTimeout(() => { this.div.style.filter = "grayscale(0%)"; }, 500);
    }
    reset() {
        this.health = 2;
    }
}
//# sourceMappingURL=player.js.map