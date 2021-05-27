import { Astroid } from "./astroid.js";
import { Player } from "./player.js";
class Game {
    constructor() {
        this.astroid = [];
        console.log("Game was created!");
        this.player = new Player();
        for (let i = 0; i < (Math.random() * 5); i++) {
            this.astroid.push(new Astroid());
        }
        this.gameLoop();
    }
    gameLoop() {
        this.player.update();
        for (const astroid of this.astroid) {
            astroid.update();
        }
        requestAnimationFrame(() => this.gameLoop());
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