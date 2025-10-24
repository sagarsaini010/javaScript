let select = document.querySelector('#select');
let h1 = document.querySelector('h1')
select.addEventListener('change',(e) =>{
    h1.textContent = `${e.target.value} Device is selected`;
})