export class InputHandler {
    constructor(game){
        this.game = game;
        this.keys = [];
        window.addEventListener('keydown', e => {
            if((e.key === "ArrowDown" || 
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === "Shift") 
                && this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key);
                } else if (e.key === "d") this.game.debug = !this.game.debug; //super useful technique to add a "debug mode"
        });
        
        window.addEventListener('keyup', e => {
            if (e.key === "ArrowDown" || 
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.key === "Shift"){
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
            console.log(e.key, this.keys);
        });

    }
}

//In short: if the key is the arrow down key and the key is not already in the array, add it to the array.
//Once you lift the key, its value is removed from the array.