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
        this.y = 600;
        this.health = 100;
        
    }
    
    update() {
        // Add the vertical speed to the y-value
        this.x += this.horizontalSpeed;
        // Draw the shark on the right coordinate (x, y)
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    onKeyDownHandler(e: KeyboardEvent): any {
      switch (e.key) {
        case "ArrowLeft":
            this.horizontalSpeed = -5;
            break;
        case "ArrowRight":
            this.horizontalSpeed = 5;
            break;
        case "a":
            this.horizontalSpeed = -5;
            break;
        case "d":
            this.horizontalSpeed = 5;
            break; 
        case " ":
            this.y = 500;
            break;
          default:
            break;
      }
    }
    onKeyUpHandler(e: KeyboardEvent): any {
      if(e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "a" || e.key == "d"){
          this.horizontalSpeed = 0;
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
        this.div.style.filter = "grayscale(100%)";
    }
}