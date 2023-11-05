import {Manager} from './manager.js';
let canvas, ctx, animationId, lastTime, fps, interval;
let manager;

setup();
animate(0);

window.addEventListener('resize', () => {
    setup();
    animate(0);
})

// window.addEventListener('click', () => {
    //     if(animationId){
        //         cancelAnimationFrame(animationId);
        //         animationId = null;
        //     }else{
            //         animate();
            //     }
            // })
            
            function setup(){
                canvas = document.querySelector('#canvas');
                ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                canvas.style.backgroundColor = "#222";
                ctx.fillStyle = "#fff";
                ctx.strokeStyle = "#fff";
                animationId = null;
                lastTime = 0;
                fps = 30; // frame per second
                interval = 1000 / fps; // ms
                manager = new Manager(canvas, ctx);
                manager.controller.getMousePosition();
                manager.controller.addMouseDown();
                manager.controller.clearKeys();
                manager.controller.addKeys();
            }

function draw(){
    manager.draw();
}

function update(){
    manager.update();
}

function animate(timestamp){
    if(timestamp - lastTime > interval){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
        update();
        lastTime = timestamp;
    }
    animationId = requestAnimationFrame(animate);
}
