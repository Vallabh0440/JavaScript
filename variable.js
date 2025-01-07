// let myName = "vallabh"
// let myAnotherName = myName
// myAnotherName="ram"
// console.log(myAnotherName);
// console.log(myName);

// let myyName ={
//     id:1,
//     name:"ram"
// }

// let user = myyName 

// user.id=2
// console.log(user);

// let na = "hello my name is vallabh";
// let hobby = " and i love to play";

// console.log(na+hobby);

// function loginUser(username){
//     if(username===undefined){
//         console.log("please enter user name");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUser())


// (function one(){
//     console.log(`logged in`);
    
// })()

// const month = "march"
// switch(month){
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case "march":
//         console.log("i am march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 1:
//         console.log("jan");
//         break;
//     case 1:
//         console.log("jan");
//         break;
//     case 1:
//         console.log("jan");
//         break;
        
// }

// const day = "wed"
// switch(day){
//     case "mon":
//     console.log("1st");
//     break;
//     case "tues":
//     console.log("2nd");
//     break;
//     case "wed":
//     console.log("3rd");
//     break;
    
// }

// let myCollection = 200
// myCollection <= 500 ? console.log("yess its less than 500"):console.log("no its not");


// let fruits = ["ram","sham","tam"];
// fruits.splice(0,0);
// console.log(fruits);


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value is : ${i}`);
    
    for(let j = 1 ; j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
        

    }
    
}