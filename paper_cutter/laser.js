export class Laser{
  constructor(canvas, ctx, x, y, direction){
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.laserEnd = 0;
  }

  draw(){
    this.ctx.save();
    this.ctx.strokeStyle = "#fff";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    switch(this.direction){
      case "RIGHT":
        this.ctx.lineTo(this.x + this.laserEnd, this.y);
        // console.log(this.laserEnd);
        break;
      case "LEFT":
        this.ctx.lineTo(this.x + this.laserEnd, this.y);
        break;
      case "UP":
        this.ctx.lineTo(this.x, this.y + this.laserEnd);
        break;
      case "DOWN":
        this.ctx.lineTo(this.x, this.y + this.laserEnd);
        break;
    }
    this.ctx.stroke();
    this.ctx.restore();
   }  

  update(){
    // console.log(this.direction);
    switch(this.direction){
      case "RIGHT":
        // console.log("sss",this.laserEnd);
        this.laserEnd += (this.canvas.width - this.x) / 2;
        if(this.canvas.width < this.x + this.laserEnd) this.x += 100;
        // console.log(this.laserEnd);
        break;
      case "LEFT":
        this.laserEnd -= this.x / 2;
        if(this.x + this.laserEnd < 0) this.x -= 100;
        break;
      case "UP":
        this.laserEnd -= this.y / 2;
        if(this.y + this.laserEnd  < 0) this.y -= 100;
        break;
      case "DOWN":
        this.laserEnd += (this.canvas.height - this.y) / 2;
         if(this.canvas.height < this.x + this.laserEnd) this.y += 100;
        break;
    }
  }
}