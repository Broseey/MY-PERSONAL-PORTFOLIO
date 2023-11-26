// const canvas = document.querySelector("canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     ctx.strokeStyle = "#BADA55";
//     ctx.lineJoin = "round";
//     ctx.lineCap = "round";
//     ctx.lineWidth = 100;

//     let isDrawing = false;
//     let lastX = 0;
//     let lastY = 0;
//     let hue = 0;
//     let direction = true;

//     function draw(e) {
//         if (!isDrawing) return;
//         ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//         ctx.beginPath();
//         ctx.moveTo(lastX, lastY);
//         ctx.lineTo(e.offsetX, e.offsetY);
//         ctx.stroke();
//         [lastX, lastY] = [e.offsetX, e.offsetY];

//         hue++;
//         if (hue >= 360) {
//             hue = 0;
//         }
//     }

//     function clearCanvas() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }

//     canvas.addEventListener("mousedown", (e) => {
//         isDrawing = true;
//         [lastX, lastY] = [e.offsetX, e.offsetY];
//     });

//     canvas.addEventListener("mousemove", draw);
//     canvas.addEventListener("mouseup", () => {
//         isDrawing = false;
//         clearCanvas();
//     });

//     canvas.addEventListener("mouseout", () => {
//         isDrawing = false;
//         clearCanvas();
//     });

const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100; // Adjusted lineWidth for better visibility

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;

  let x, y;

  if (e.type === "mousemove") {
    x = e.offsetX;
    y = e.offsetY;
  } else if (e.type === "touchmove") {
    x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
  }

  ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  [lastX, lastY] = [x, y];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  clearCanvas();
});

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
  clearCanvas();
});

// Touch events
canvas.addEventListener("touchstart", (e) => {
  isDrawing = true;
  [lastX, lastY] = [
    e.touches[0].clientX - canvas.getBoundingClientRect().left,
    e.touches[0].clientY - canvas.getBoundingClientRect().top,
  ];
});

canvas.addEventListener("touchmove", draw);

canvas.addEventListener("touchend", () => {
  isDrawing = false;
  clearCanvas();
});

// Additional adjustment to prevent scrolling on touch devices
canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
});

