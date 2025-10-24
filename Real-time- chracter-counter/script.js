let text = document.querySelector('textarea');
let span = document.querySelector('span')
text.addEventListener('input', e =>{
    let left = 20 - e.target.value.length;
    span.textContent = left;
    if (left < 0){
        span.style.color = 'red'
    }
    else{
        span.style.color = 'white'
    }
})