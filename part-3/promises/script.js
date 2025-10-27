let pr = new Promise(function(resolve, reject){
       let a = Math.floor(Math.random() * 10);
       if(a % 2 == 0){
           resolve("Even number and Promise resolved: " + a);
       } else {
           reject("Odd number and Promise rejected: " + a);
       }
});

pr.then(function(message){
    console.log(message);
}).catch(function(message){
    console.log(message);
});