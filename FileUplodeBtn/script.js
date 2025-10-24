let input = document.querySelector('input')
let btn = document.querySelector('#btn')

btn.addEventListener('click',e =>{
    input.click();
})

input.addEventListener('change', e =>{
    // console.log(e.target.files[0].name);
    let file = e.target.files
    console.log(file)
    if(file.length !== 0){
        btn.textContent = file[0].name;
    }
})