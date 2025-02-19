 // Animación del canvas
 const canvas = document.getElementById('animationCanvas');
 const ctx = canvas.getContext('2d');
 let angle = 0;

 function animate() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.fillStyle = '#8B0000';
     ctx.beginPath();
     ctx.arc(
         canvas.width / 2 + Math.cos(angle) * 50,
         canvas.height / 2 + Math.sin(angle) * 50,
         20,
         0,
         Math.PI * 2
     );
     ctx.fill();
     angle += 0.02;
     requestAnimationFrame(animate);
 }

 animate();

 // Asegurar que el canvas sea responsivo
 function resizeCanvas() {
     canvas.width = canvas.offsetWidth;
 }

 window.addEventListener('resize', resizeCanvas);
 resizeCanvas();