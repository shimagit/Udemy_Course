import {Area} from './area.js';

export class Game{
  constructor(canvas, ctx, controller){
    this.canvas = canvas;
    this.ctx = ctx;
    this.clickAcceptable = true;
    this.controller = controller;
    this.menuMap = [{name: "Three Disks", numOfDisks: 3}, {name: "Four Disks", numOfDisks: 4}, {name: "Five Disks", numOfDisks: 5}];
    this.menuIndex = 0;
    this.gameover = false;
    this.areas = null;
    this.numOfDisks = null;
  }

  draw(){
    this.canvas.style.backgroundColor = "#381d2a";
    if(this.areas){
      this.areas.forEach(area => {
        area.draw();
      });
    }
    this.ctx.save();
    this.ctx.restore();
  }

  update(){
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
    this.areas = null;
  }

  createAreas(){
    const areas = [];
    for(let i = 0; i < 3; i++){
      const area = new Area(this.canvas, this.ctx, this.numOfDisks);
      area.x = this.canvas.width/8 + area.areaSize * i;
      area.y = (this.canvas.height - area.areaSize) / 2;
      area.disks = i === 0 ? this.createInitialDisks() : [];
      areas.push(area);
    }
    return areas;
  }

  createInitialDisks(){
    const disks = [];
    for(let i = 0;  i < this.numOfDisks; i++){
      disks.push(i);
    }
    return disks
  }
}