// bubble.js
(function () {
  let canvas = document.createElement("canvas");
  canvas.id = "bubble-canvas";
  canvas.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:1";
  document.body.appendChild(canvas);
  let ctx = canvas.getContext("2d"),
    width,
    height,
    bubbles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < bubbles.length; i++) {
      let b = bubbles[i];
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + b.alpha + ")";
      ctx.fill();
      b.y -= b.speed;
      if (b.y + b.r < 0) {
        bubbles[i] = newBubble();
      }
    }
    requestAnimationFrame(draw);
  }

  function newBubble() {
    return {
      x: Math.random() * width,
      y: height + Math.random() * 100,
      r: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5,
      alpha: Math.random() * 0.5 + 0.3
    };
  }

  function init() {
    resize();
    for (let i = 0; i < 50; i++) {
      bubbles.push(newBubble());
    }
    draw();
  }

  window.addEventListener("resize", resize);
  init();
})();
