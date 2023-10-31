let canvas, ctx, num, cellSize, gapX, gapY;

setup();
draw();

window.addEventListener('resize', ()=> {
  setup();
  draw();
})

function setup(){
  canvas = document.querySelector('#canvas');
  ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = "#222";
  ctx.strokeStyle = "#fff";
  num = 8;
  cellSize = canvas.height < canvas.width ? canvas.height * 8/10 / (num +2): canvas.width * 8/10 /(num +2);
  gapX = (canvas.width *8/10 - cellSize*num) / (num -1);
  gapY = (canvas.height *8/10 - cellSize*num) / (num -1);
}

function draw(){
  ctx.beginPath();
  ctx.rect(canvas.width/10, canvas.height/10, canvas.width*8/10, canvas.height*8/10);
  ctx.stroke();

  for(let y = 0; y < num; y++){
    for(let x = 0; x < num; x++){
      ctx.beginPath();
      ctx.rect(canvas.width/10 + (cellSize + gapX) * x, canvas.height/10 + (cellSize + gapY) * y, cellSize, cellSize);
      ctx.stroke();
    }
  }
}
