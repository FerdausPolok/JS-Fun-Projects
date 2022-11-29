//Getting the UI elements
let form = document.querySelector('#book-form');

//Book Class
class Book{
    constructor(title, author, isbn){
        this.title= title;
        this.author = author;
        this.isbn= isbn
    }
}

//Add EL
form.addEventListener('submit', newBook);


//Writting functions
function newBook(e){
    // console.log("submitted")
    let title= document.querySelector("#title").value;
    let author= document.querySelector("#author").value;
    let isbn= document.querySelector("#isbn").value;

    let book = new Book(title, author, isbn);
    //console.log(book)
    let ui = new UI
    
    ui.addBookList(book)
    ui.clearFields()
    e.preventDefault();
    
}

//UI Class
class UI{ //To Add books in the table data
    constructor(){

    }
    addBookList(book){
        //console.log(book)
        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');
        row.innerHTML= `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href = '#' class='delete'>X</td>
        `
        list.appendChild(row)
        
    }

    clearFields(){
        let title= document.querySelector("#title").value = "";
        let author= document.querySelector("#author").value = "";
        let isbn= document.querySelector("#isbn").value = "";
    }
}