let playerState='idle';

const dropdown  = document.getElementById("animationSelect");
dropdown.addEventListener("change", (e) =>{
  playerState = e.target.value;
})
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();

playerImage.src = "shadow_dog.png";

// let x=0;
// let y=0;
// function animate() {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   ctx.fillRect(x, y, 100, 100);
//   x++;
//   y++;
//   if(y==CANVAS_HEIGHT)
//   {
//     y=0;
//   }
//   if(x==CANVAS_HEIGHT)
//   {
//     x=0;
//   }
//   requestAnimationFrame(animate);
// }

const spriteWidth = 575;
const spriteHeight = 523;
// let frameX = 0;
// let frameY = 1;
let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];

const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },
];


animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});
// console.log(animationStates)
console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.drawImage(playerImage, sx, sy, sw, sh, dx, dy, dw, dh);
  let position =
    Math.floor(gameFrame / staggerFrame) % spriteAnimations[playerState].loc.length;

  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  // slow animate easy way
  // if (gameFrame % staggerFrame == 0) {
  //   if (frameX < 6) frameX++;
  //   else frameX = 0;
  // }

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
