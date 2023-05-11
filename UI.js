export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Chakra Petch';
    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = "white";
        context.shadowBlur = 0;
        context.font = this.fontSize + "px " + this.fontFamily;
        context.textAlign = "left";
        context.fillStyle = this.game.fontColor;
        //draw score
        context.fillText("Score: " + this.game.score, 20, 50);
        //draw timer
        context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
        context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80); //move decimal over to show seconds
        //game over msg
        if(this.game.gameOver){
            context.textAlign = "center";
            context.font = this.fontSize * 1.5 + "px " + this.fontFamily;
            if(this.game.score > 15){
                context.fillText("Great job, king!", this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("You scored " + this.game.score + " points!", this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                context.fillText("Skill issue :(", this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.65 + "px " + this.fontFamily;
                context.fillText("You scored " + this.game.score + " points!", this.game.width * 0.5, this.game.height * 0.5 + 20);
            }
            
        }

        context.restore();
    }
}