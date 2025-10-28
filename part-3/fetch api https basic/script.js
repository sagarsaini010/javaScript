fetch("https://randomuser.me/api/")
.then(function (data){
    return (data.json())
})
.then(data =>{
    console.log(data.results[0].name.first)
})
.catch(function(err){
    console.log(err)
})