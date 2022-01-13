//to declare the variables we have three options var,let and const.
//var is global variable, let is a block based variable

function a(name, age){
    console.log('name', name);
    console.log('age', age);
}
a("Betty", 18);
a("Harishma",18);
a("Dhivya");

//another syntax[hint:vn fn=fk p]
const b=function(chocolate){
    console.log("fav chocolate",chocolate)
}
b("galaxy");

//another syntax
const c=(flowers)=>{
    console.log("fav flower is", flowers)
}
c("tulip")

//object

let student={
    name:"blesson",
    age:1.5

}
console.log(student.name)
console.log(student["age"])

