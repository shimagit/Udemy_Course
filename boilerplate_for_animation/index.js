let canvas, ctx, animationId, lastTime, fps, interval;

setup();
animate(0);

window.addEventListener('resize', ()=> {
  setup();
  draw();
})

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
}

function draw(){
  
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
