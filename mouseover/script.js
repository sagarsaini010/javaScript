let main = document.querySelector(".main");

window.addEventListener('mousemove', e =>{
     main.style.top = e.clientY + 'px';
     main.style.left = e.clientX + 'px';
})
