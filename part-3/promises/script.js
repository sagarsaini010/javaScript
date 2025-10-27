let pr = new Promise(function(resolve, reject){
    setTimeout(() => {
       let a = Math.floor(Math.random() * 10);
       if(a % 2 == 0){
           resolve("Even number and Promise resolved: " + a);
       } else {
           reject("Odd number and Promise rejected: " + a);
       }
   }, 2000);
});

async function abcd() {
    try {
        let val = await pr;
        console.log(val);
    } catch(err) {
        console.log(err);
    }
}

abcd();