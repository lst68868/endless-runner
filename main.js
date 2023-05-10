import { Player } from './player.js';
import { InputHandler } from './input.js';

window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.groundMargin = 50;
            this.speed = 3;
            this.player = new Player(this); //this refers to the game
            this.input = new InputHandler();
        }
        update(deltaTime){
            //updates animation frames, triggers calculations, etc.
            this.player.update(this.input.keys, deltaTime); //pass input.keys to player update method
        }
        draw(context){
            //draw images, score, etc.
            this.player.draw(context);
        }
    }
    

    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    let lastTime = 0;

    function animate (timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});

//time stamp 7:38:53