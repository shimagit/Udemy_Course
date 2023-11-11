import {Player} from './player.js';

export class Game{
  constructor(canvas, ctx, controller){
    this.canvas = canvas;
    this.ctx = ctx;
    this.clickAcceptable = true;
    this.controller = controller;
    this.menuMap = [{name: "Easy", speed: 2}, {name: "Meduim", speed: 4}, {name: "difficult", speed: 6}];
    this.menuIndex = 0;
    this.gameover = false;
    this.player = new Player(this.canvas, this.ctx, this.controller);
  }

  draw(){
    this.canvas.style.backgroundColor = "#CDDDDD";
    this.player.draw();
  }

  update(){
    this.player.update();
  // clickAcceptableの使用例
  // if (this.controller.isMouseInsideRect(sx, sy, w, h) && this.controller.keys.includes('mousedown') && this.clickAcceptable) {
  //     this.count++;
  //     this.clickAcceptable = false;
  // }
  // if (!this.controller.keys.includes('mousedown')) this.clickAcceptable = true;
  }

  init(){
    this.menuIndex = 0;
    this.gameover = false;
    this.clickAcceptable = true;
  }
}