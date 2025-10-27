// === Pelotas interactivas con colisiones ===
const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');
let W = window.innerWidth, H = window.innerHeight;
canvas.width = W; canvas.height = H;

window.addEventListener('resize', ()=>{
  W = window.innerWidth; H = window.innerHeight;
  canvas.width = W; canvas.height = H;
});

const emojis = ["⚽️","🏀","🎾","🏐"];
const balls = emojis.map((emoji,i)=>({
  emoji,
  x: Math.random()*W,
  y: Math.random()*H,
  vx: (Math.random()-0.5)*6,
  vy: (Math.random()-0.5)*6,
  size: 70,
  dragging:false,
  offsetX:0,
  offsetY:0
}));

let dragging=null;
let last={x:0,y:0};
let vel={x:0,y:0};
const gravity=0.25,bounce=0.9,friction=0.98;

function startDrag(x,y){
  for (const b of balls){
    const dx=x-b.x,dy=y-b.y;
    if (Math.hypot(dx,dy)<b.size/2){
      dragging=b;
      b.dragging=true;
      b.offsetX=dx; b.offsetY=dy;
      break;
    }
  }
}
function moveDrag(x,y){
  if (dragging){
    dragging.x=x-dragging.offsetX;
    dragging.y=y-dragging.offsetY;
  }
  vel.x=x-last.x; vel.y=y-last.y;
  last.x=x; last.y=y;
}
function endDrag(){
  if (dragging){
    dragging.vx=vel.x*0.4;
    dragging.vy=vel.y*0.4;
    dragging.dragging=false;
    dragging=null;
  }
}

canvas.addEventListener('mousedown',e=>startDrag(e.clientX,e.clientY));
canvas.addEventListener('mousemove',e=>moveDrag(e.clientX,e.clientY));
canvas.addEventListener('mouseup',endDrag);
canvas.addEventListener('touchstart',e=>{const t=e.touches[0]; startDrag(t.clientX,t.clientY);});
canvas.addEventListener('touchmove',e=>{const t=e.touches[0]; moveDrag(t.clientX,t.clientY);});
canvas.addEventListener('touchend',endDrag);

// colisiones entre pelotas
function collide(b1,b2){
  const dx=b2.x-b1.x, dy=b2.y-b1.y;
  const dist=Math.hypot(dx,dy);
  const minDist=(b1.size+b2.size)/2;
  if (dist<minDist){
    const overlap=(minDist-dist)/2;
    const nx=dx/dist, ny=dy/dist;
    b1.x-=nx*overlap; b1.y-=ny*overlap;
    b2.x+=nx*overlap; b2.y+=ny*overlap;
    const p=(b1.vx*nx+b1.vy*ny)-(b2.vx*nx+b2.vy*ny);
    b1.vx-=p*nx; b1.vy-=p*ny;
    b2.vx+=p*nx; b2.vy+=p*ny;
  }
}

function draw(){
  ctx.clearRect(0,0,W,H);
  for (let i=0;i<balls.length;i++){
    const b=balls[i];
    if(!b.dragging){
      b.vy+=gravity;
      b.x+=b.vx;
      b.y+=b.vy;
    }
    if(b.x+b.size/2>W){b.x=W-b.size/2; b.vx*=-bounce;}
    else if(b.x-b.size/2<0){b.x=b.size/2; b.vx*=-bounce;}
    if(b.y+b.size/2>H){b.y=H-b.size/2; b.vy*=-bounce; b.vx*=friction;}
    else if(b.y-b.size/2<0){b.y=b.size/2; b.vy*=-bounce;}

    for (let j=i+1;j<balls.length;j++){ collide(b,balls[j]); }

    ctx.font=`${b.size}px sans-serif`;
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.fillText(b.emoji,b.x,b.y);
  }
  requestAnimationFrame(draw);
}
draw();
