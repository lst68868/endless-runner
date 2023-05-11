export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Chakra Petch';
        this.heartImage = document.getElementById("heart");
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
        //draw lives
        for(let i = 0; i < this.game.lives; i++){
            context.drawImage(this.heartImage, 25 * i + 20, 95, 25, 25);
        }
        //game over msg
        if(this.game.gameOver){
            context.textAlign = "center";
            context.font = this.fontSize * 1.5 + "px " + this.fontFamily;
            if(this.game.score >= this.game.winningScore){
                context.fillText("Great job, king!", this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 1 + "px " + this.fontFamily;
                context.fillText("You scored " + this.game.score + " points!", this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                context.fillText("Skill issue :(", this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.65 + "px " + this.fontFamily;
                context.fillText("You needed " + (this.game.winningScore - this.game.score) + " more points!", this.game.width * 0.5, this.game.height * 0.5 + 20);
            }
            
        }

        context.restore();
    }
}