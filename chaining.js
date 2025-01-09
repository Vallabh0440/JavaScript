let myArray = [1,2,3,4,5,6,7,8,9];

let newArray = myArray
                .map((num)=>num+10)
                .map((num)=>num*2)
                .filter((num)=>num >= 26 && num <=34)
                console.log(newArray)