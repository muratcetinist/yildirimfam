try {
  (function() {
    var canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W, H, mouse = { x: -1000, y: -1000 };
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', function(e) { mouse.x = e.clientX; mouse.y = e.clientY; });
    function Particle() { this.reset(); }
    Particle.prototype.reset = function() {
      this.x = Math.random() * W; this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedY = -(Math.random() * 0.3 + 0.05);
      this.speedX = (Math.random() - 0.5) * 0.2;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.life = Math.random() * 600 + 200; this.age = 0;
    };
    Particle.prototype.update = function() {
      this.age++;
      if (this.age > this.life) this.reset();
      var dx = mouse.x - this.x, dy = mouse.y - this.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) { this.x -= dx * 0.005; this.y -= dy * 0.005; }
      this.x += this.speedX; this.y += this.speedY;
      if (this.y < -10) this.reset();
    };
    Particle.prototype.draw = function() {
      ctx.globalAlpha = this.opacity * (1 - this.age / this.life);
      ctx.fillStyle = '#c9a84c';
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    };
    var particles = [];
    for (var i = 0; i < 80; i++) particles.push(new Particle());
    (function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    })();
  })();
} catch(e) { console.warn('Particles error:', e); }
