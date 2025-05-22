// 鼠标点击爱心特效
(function(window, document) {
  var hearts = [];
  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();
  function createHeart(x, y) {
    var heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    document.body.appendChild(heart);
    hearts.push({
      el: heart,
      x: x,
      y: y,
      scale: 1,
      alpha: 1,
      color: "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    });
  }
  function animateHearts() {
    for (var i = 0; i < hearts.length; i++) {
      var heart = hearts[i];
      if (heart.alpha <= 0) {
        document.body.removeChild(heart.el);
        hearts.splice(i, 1);
        i--;
        continue;
      }
      heart.y--;
      heart.scale += 0.004;
      heart.alpha -= 0.013;
      heart.el.style.cssText = "left:" + heart.x + "px;top:" + heart.y + "px;opacity:" + heart.alpha +
        ";transform:scale(" + heart.scale + "," + heart.scale + ");color:" + heart.color +
        ";position: fixed;z-index: 9999;pointer-events: none;";
    }
    requestAnimationFrame(animateHearts);
  }
  document.addEventListener("click", function(event) {
    createHeart(event.clientX - 5, event.clientY - 5);
  });
  animateHearts();
})(window, document);
