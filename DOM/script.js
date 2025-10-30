function profile(username, cb) {
  setTimeout(() => {
    cb({ _id: 1122, username, age: 26, email: "Sagarsaini@gmail.com" });
  }, 2000);
}

function postLekraao(id,cb){
    setTimeout(() => {
        cb({_id: id, posts:['Hello','good','morning']})
    }, 3000);
}

function savedpostlekraao(id,cb){
    setTimeout(() => {
        cb({_id:id,savedPost: ["!212",'121','3212','3123']})
    }, 2000);
}

profile("Sagar Saini", function (data) {
    
  postLekraao(data._id, function (posts) {

    savedpostlekraao(data._id, function(saved){
        console.log(data)
        console.log(posts)
        console.log(saved)
    })
  });
});
