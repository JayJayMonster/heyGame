export class Player {

    x : number;
    y : number;
    div : HTMLElement;
    horizontalSpeed: number = 0;
    health: number;

    constructor() {
        console.log("Rex was created!")

        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUpHandler(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDownHandler(e))
        
        this.create()
    }
    
    create() {
        this.div = document.createElement("player")
        document.body.appendChild(this.div)

        // generate x and y values
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = 550;
        this.health = 5;
        
    }
    
    update() {
        // Add the vertical speed to the y-value
        this.x += this.horizontalSpeed;
        // Draw the player on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    onKeyDownHandler(e: KeyboardEvent): any {
        switch (e.key) {
            case "a":
            case "ArrowLeft" :
                this.horizontalSpeed = -5
                break
            case "d":
            case "ArrowRight":
                this.horizontalSpeed = 5
                break
            case " ":
                this.y = 500;
        }
    }
    onKeyUpHandler(e: KeyboardEvent): any {
        switch (e.key) {
            case "a":
            case "d":
            case "ArrowLeft" :
            case "ArrowRight":
                this.horizontalSpeed = 0
                break
        }
      if(e.key == " "){
          this.y = 550; 
      }
    }

    getRect(){
        return this.div.getBoundingClientRect();
    }

    hit(){
        this.health --;
        console.log(this.health);
        this.div.style.filter = "grayscale(100%)";

        if(this.health <= 0){
            console.log("GAME OVER BITCH");
        }
    }
}