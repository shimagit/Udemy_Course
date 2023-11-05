import {Utils} from './utils.js';
const utils = new Utils();

let canvas, ctx, animationId, lastTime, fps, interval;
let p0, p1, cp0, cp1, r, points, mouse, draggablePoint;

setup();
animate(0);

window.addEventListener('resize', ()=> {
  setup();
  animate(0);
})

window.addEventListener('mousedown', mouseDown);
window.addEventListener('mousemove', mouseMove);
window.addEventListener('mouseup', mouseUp);

// window.addEventListener('click', () => {
//   if(animationId){
//     cancelAnimationFrame(animationId);
//     animationId = null;
//     console.log(animationId);
//   }else{
//     animate();
//   }
// })


function setup(){
  canvas = document.querySelector('#canvas');
  ctx = canvas.getContext('2d');
  canvas.style.backgroundColor = "#222";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#fff";
  animationId = null;
  lastTime = 0;
  fps = 30;// frame paer second
  interval = 1000 / fps; //ms
  p0 = {x: canvas.width/10, y: canvas.height/10};
  p1 = {x: canvas.width * 2/10, y: canvas.height * 8/10};
  cp0 = {x: canvas.width * 8/10, y: canvas.height/10};
  cp1 = {x: canvas.width * 6/10, y: canvas.height * 9/10};
  r = 5;
  points = [p0, p1, cp0, cp1];
  mouse = {x: null, y: null};
  draggablePoint = null;
}

function draw(){
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.bezierCurveTo(cp0.x, cp0.y, cp1.x, cp1.y, p1.x, p1.y);
  ctx.stroke();
  points.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, r, 0, Math.PI * 2);
    ctx.fill();
  })
  // p0 ==> cp0
  ctx.beginPath();
  ctx.moveTo(p0.x, p0.y);
  ctx.lineTo(cp0.x, cp0.y);
  ctx.stroke();
   // p1 ==> cp1
   ctx.beginPath();
   ctx.moveTo(p1.x, p1.y);
   ctx.lineTo(cp1.x, cp1.y);
   ctx.stroke();
}

function update(){
 
}

function animate(timestamp){
  // console.log(timestamp);
  if(timestamp - lastTime > interval){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    update();
    lastTime = timestamp;
  }
  animationId = requestAnimationFrame(animate);
}

function mouseDown(e){
  mouse = {x: e.clientX, y: e.clientY};
  points.forEach( p => {
    const mouseOnPoint = Math.sqrt((p.x - mouse.x)**2 + (p.y - mouse.y)**2) < r;
    if(mouseOnPoint){
      draggablePoint = p;
      console.log(draggablePoint);
    }
  })
}

function mouseMove(e){
  if(draggablePoint){
    draggablePoint.x = e.clientX;
    draggablePoint.y = e.clientY;
  }
}

function mouseUp(){
  draggablePoint = null;
}