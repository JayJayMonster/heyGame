import { Astroid } from "./astroid.js";
import { Player } from "./player.js";
import { Rock } from "./rock.js";
import { Tree } from "./tree.js";

class Game {

    player: Player
    tree: Tree
    rock: Rock
    astroid: Astroid[] = []
    pause: boolean = false;
    bgPosition: number = 0;

    constructor() {
        console.log("Game was created!");
        this.player = new Player();
        //this.tree = new Tree();
        //this.rock = new Rock();
        for(let i = 0; i < (Math.random() * 10); i++){
            this.astroid.push(new Astroid())
        }
        
        this.gameLoop();
        const pauseButton = document.querySelector("pause")! as HTMLElement
        pauseButton.addEventListener("click", ()=>this.pauseClicked())
        this.scrollingBackground();
    }
    
    scrollingBackground() {
        const bg = document.querySelector('background')! as HTMLElement
        this.bgPosition++
        bg.style.backgroundPosition = `${this.bgPosition}px 0px`
    }
    
    
    pauseClicked() {
        const pauseButton = document.querySelector("pause")! as HTMLElement
        this.pause = !this.pause;
    if(this.pause){
        pauseButton.innerText = "Keep going"
    } else {
        pauseButton.innerText = "Pause"    
        this.gameLoop();
    }
    }

    gameLoop() {
        // update the dino
        this.player.update();
        for(const astroid of this.astroid){
            astroid.update();
            let dinoRect = this.player.getRect();
            let astroidRect = astroid.getRect();
            let hit = this.checkCollision(dinoRect, astroidRect);
            if (hit){
                this.player.hit();
                astroid.remove();
            }
        }

        if(!this.pause) {
        requestAnimationFrame(()=>this.gameLoop())
        } 
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

new Game();

