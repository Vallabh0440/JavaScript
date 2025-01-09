let books = [{
    title:"book one",
    genre:"history",
    publish:2001,
    edition:2005
},
{
    title:"book two",
    genre:"science",
    publish:2002,
    edition:2007
},
{
    title:"book three",
    genre:"maths",
    publish:2003,
    edition:2010
},
{
    title:"book four",
    genre:"geography",
    publish:2004,
    edition:2012
},
{
    title:"book five",
    genre:"english",
    publish:2005,
    edition:2015
}]


let bookpublish = books.filter((bk)=> bk.publish >= 2003);
console.log(bookpublish);

let bookName = books.filter((bk)=>bk.title == "book four")
console.log(bookName)

let bookType = books.filter((bk)=> bk.genre== "english" )
console.log(bookType)