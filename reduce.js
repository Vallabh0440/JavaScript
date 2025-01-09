let shoppingCart = [
    {
        itemName:"js cource",
        price:3000
    },
    {
        itemName:"js cource",
        price:3000
    },
    {
        itemName:"js cource",
        price:3000
    }
];

let reduceM = shoppingCart.reduce((acc , item) => acc + item.price,0);
console.log(reduceM)