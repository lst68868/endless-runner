export class InputHandler {
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', e => {
            if((e.key === "ArrowDown" || 
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === "Enter") 
                && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                }
            console.log(e.key, this.keys);
        });
        
        window.addEventListener('keyup', e => {
            if (e.key === "ArrowDown" || 
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === "Enter"){
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
            console.log(e.key, this.keys);
        });

    }
}

//In short: if the key is the arrow down key and the key is not already in the array, add it to the array.
//Once you lift the key, its value is removed from the array.