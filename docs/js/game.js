import { Astroid } from "./astroid.js";
import { Player } from "./player.js";
class Game {
    constructor() {
        this.astroid = [];
        this.pause = false;
        this.bgPosition = 0;
        console.log("Game was created!");
        this.player = new Player();
        for (let i = 0; i < (Math.random() * 10); i++) {
            this.astroid.push(new Astroid());
        }
        this.gameLoop();
        const pauseButton = document.querySelector("pause");
        pauseButton.addEventListener("click", () => this.pauseClicked());
        this.scrollingBackground();
    }
    scrollingBackground() {
        const bg = document.querySelector('background');
        this.bgPosition++;
        bg.style.backgroundPosition = `${this.bgPosition}px 0px`;
    }
    pauseClicked() {
        const pauseButton = document.querySelector("pause");
        this.pause = !this.pause;
        if (this.pause) {
            pauseButton.innerText = "Keep going";
        }
        else {
            pauseButton.innerText = "Pause";
            this.gameLoop();
        }
    }
    gameLoop() {
        this.player.update();
        for (const astroid of this.astroid) {
            astroid.update();
            let dinoRect = this.player.getRect();
            let astroidRect = astroid.getRect();
            let hit = this.checkCollision(dinoRect, astroidRect);
            if (hit) {
                this.player.hit();
                astroid.remove();
            }
        }
        if (!this.pause) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map