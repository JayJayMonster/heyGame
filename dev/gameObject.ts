export class GameObject {

   protected x : number
   protected y : number
   protected div : HTMLElement

    constructor(tagName : string){
        this.spawn(tagName);
    }

    public getRect(){
        return this.div.getBoundingClientRect();
    }

    public update(){
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    protected spawn(tagName : string) : void {
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);  
    }

    remove(){
        this.div.remove();
    }
}