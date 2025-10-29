//map-learning
//1


   let findsquare = function () {
  let arr = [1, 2, 3, 4, 5];
  let newArr = arr.map((elem) => {
    return elem ** 2;
  });
  console.table(newArr);
};

//2
let findStringLength = function (){
    let arr = ['Sagar','Saini','Himani','Sagar','Saini']
    let newarr = arr.map((elem) =>{
        return elem.length;
    })
    console.table(newarr);
}

//3
let addSubstring = function(){
    let arr = ["Alice", "Bob", "Charlie"]

    let newArr = arr.map(elem =>{
        return "Hello "+elem;
    })
    console.table(newArr)
}

//4
let celsiusToFahrenheit = function () {
    let celsius = [32,45,64,100,-273]
    let fahrenheit = celsius.map(elem =>{
        return (elem * 9/5) + 32;
    })
    console.table(fahrenheit)
}

//5
 let extractTitle = function (){
  const blogPosts = [
  { id: 1, title: "Understanding JavaScript Closures", author: "Sagar Saini", views: 1200 },
  { id: 2, title: "A Guide to Responsive UI Design", author: "Himani Saini", views: 950 },
  { id: 3, title: "Mastering Backend with Node.js", author: "Ravi Kumar", views: 1800 },
  { id: 4, title: "CSS Grid vs Flexbox", author: "Anjali Mehta", views: 670 },
  { id: 5, title: "Optimizing Web Performance", author: "Sagar Saini", views: 1430 }
];

let titleList = blogPosts.map(elem => elem.title)

console.table(titleList)

 }
//6
let capitalizingWord = function(){
    const words = ["sagar", "saini", "javascript", "frontend", "developer", "portfolio", "branding", "design", "cohort", "learning",''];

    let wordsList = words.map(elem =>elem? elem[0].toUpperCase()+elem.slice(1,elem.length):'')

    console.log(wordsList)
}
//7

let numberToString = function(){
    let num = [1,2,3,4,5,6,7,8,9,10]
    let newNum = num.map(String);
    console.log(newNum)
}

//8

let appendIndex = function(){
    let arr = ['a','b','c','d','e']
    let newArr = arr.map((elem,indx)=> elem +'-'+ indx)
    console.log(newArr)
}
