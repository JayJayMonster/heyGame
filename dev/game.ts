import { Astroid } from "./astroid.js"
import { Player } from "./player.js"
import { Rock } from "./rock.js"
import { Tree } from "./tree.js"

export class Game {

    score: number = 0
    scoreElement: HTMLElement
    player: Player
    tree: Tree[] = []
    rock: Rock[] = []
    astroid: Astroid[] = []
    pause: boolean = false
    bgPosition: number = 0
    spawner: number = 0
    gameOver: boolean = false
    
    constructor() {
        console.log("Game was created!")
        this.player = new Player(this)
       
        const pauseButton = document.querySelector("pause")! as HTMLElement
        pauseButton.addEventListener("click", ()=>this.pauseClicked())
        
        this.scoreElement = document.querySelector("score")! as HTMLElement
        this.reset();
    }
    
    private reset(){
        for(let i = 0; i < (Math.random() * 5); i++){
            this.astroid.push(new Astroid("astroid"))
        }
        this.player.reset()
        
        this.score = 0;
        this.gameOver = false
        this.spawner = 0
        
        this.scoreElement.innerText=`Score: ${this.score}`;
        this.gameLoop()
    }

    private cleanScreen(){
        for(let a of this.astroid){
            a.remove()
        }

        for(let r of this.rock){
            r.remove()
        }

        for(let t of this.tree){
            t.remove()
        }
        this.astroid = []
        this.rock = []
        this.tree = []

    const backgroundTag = document.querySelector("background")! as HTMLElement
    backgroundTag.innerHTML = ""

    this.reset()
    }
    
    private gameLoop() {

        this.spawner++
        if(this.spawner > 120) {
            this.spawner = 0
            this.updateScore()
            //this.tree.push(new Tree("tree"))
            this.rock.push(new Rock("rock"))
        }

        // update the dino
        this.player.update()
        for(const astroid of this.astroid){
            astroid.update()
            let dinoRect = this.player.getRect()
            let astroidRect = astroid.getRect()
            let hit = this.checkCollision(dinoRect, astroidRect)
            if (hit){
                this.player.hit()
                astroid.remove()
            }
        }

        for (const tree of this.tree) {
            tree.update()
            let dinoRect = this.player.getRect()
            let treeRect = tree.getRect()

            let hit = this.checkCollision(dinoRect, treeRect)

            if (hit){
                this.player.hit()
                tree.remove()
            }
        }

        for (const rock of this.rock) {
            rock.update()
            let dinoRect = this.player.getRect()
            let rockRect = rock.getRect()

            let hit = this.checkCollision(dinoRect, rockRect)

            if (hit){
                this.player.hit()
                rock.remove()
            }
        }
        
        if(!this.pause && !this.gameOver) {
            requestAnimationFrame(()=>this.gameLoop())
        } 

        if(this.gameOver){
            this.addGameoverScreen();
        }
        
        this.scrollingBackground()
    }

    private updateScore(){
        this.score++
        this.scoreElement.innerText=`Score: ${this.score}`;
    }
    
    private scrollingBackground() {
        this.bgPosition -= 2
        const bg = document.querySelector('background')! as HTMLElement
        bg.style.backgroundPosition = `${this.bgPosition}px 0px`
    }
    
    
    private pauseClicked() {
        const pauseButton = document.querySelector("pause")! as HTMLElement
        this.pause = !this.pause
        if(this.pause){
            pauseButton.innerText = "Keep going"
        } else {
            pauseButton.innerText = "Pause"    
            this.gameLoop()
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

     private addGameoverScreen(){
        const gameOverElement = document.createElement("gameOverScreen")
        gameOverElement.innerHTML = "GAME OVER!"
        const backgroundTag = document.querySelector("background")! as HTMLElement
        backgroundTag.appendChild(gameOverElement);  

        const resetButton = document.createElement("resetButton")
        resetButton.innerHTML = "Start again"
        backgroundTag.appendChild(resetButton)
        resetButton.addEventListener("click", ()=>this.cleanScreen())
     }

} 


new Game()

