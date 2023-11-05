import {Controller} from "./controller.js";
import {Game} from "./game.js";

export class Manager{
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.controller = new Controller();
    this.game = new Game(this.canvas, this.ctx, this.controller);
    this.states = ["START", "PLAY", "GAMEOVER"];
    this.state = this.states[0];
  }

  draw(){
    if(this.state === this.states[0]){
      this.showStartPage();
    }else if(this.state === this.states[1]){
      this.game.draw();
    }else if(this.state === this.states[2]){
      this.showGameOverPage();
    }
  }

  update(){
    if(this.state === this.states[0]){
      this.selectAndPlay();
    }else if(this.state === this.states[1]){
      this.game.update();
    }else if(this.state === this.states[2]){
      this.backToStart();
    }
  }

  showStartPage(){
    this.ctx.save();
    this.canvas.style.backgroundColor = "#0d1b2a";
    this.ctx.lineWidth = 8;
    this.ctx.lineJoin = "round";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    // frame
    this.ctx.strokeStyle = "#e0e1dd";
    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width/6, this.canvas.height/6, this.canvas.width* 4/6, this.canvas.height* 4/6);
    this.ctx.stroke();
    // title
    this.ctx.fillStyle = "#f8c537";
    this.ctx.font = `${this.canvas.width/18}px Candara`;
    this.ctx.fillText("GAME TITLE", this.canvas.width/2,100);
    // description
    this.ctx.fillStyle = "#ffdda1";
    this.ctx.font = `italic ${this.canvas.width/45}px Candara`;
    this.ctx.fillText("game description: click the box!", this.canvas.width/2,200);    
    // menu
    this.ctx.font = `${this.canvas.width/25}px Candara`;
    for(let i =0; i < this.game.menus.length; i++){
      this.ctx.fillStyle = "#e0e1dd";
      this.ctx.fillText(this.game.menu[i], this.canvas.width/2, 300 + 50 * i);
    }
    // how to start
    this.ctx.fillStyle = "#ffdda1";
    this.ctx.font = `italic ${this.canvas.width/35}px Candara`;
    this.ctx.fillText("Click Menu to Start", this.canvas.width/2, 600);

    this.ctx.restore();

  }

  ShowGameOverPage(){

  }

  selectAndPlay(){

  }

  backToStart(){

  }
}