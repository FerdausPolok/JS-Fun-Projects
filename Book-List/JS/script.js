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
    let ui = new UI

    if(title == "" || author == "" || isbn == "" ){
        ui.showalert("Please Fill up all the boxes bellow & try again!", "error")
    }

    else{
        let book = new Book(title, author, isbn);
        //console.log(book)
        ui.addBookList(book)
        ui.clearFields()
        e.preventDefault();

        ui.showalert("Book Added!", "success")
    }


    
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
        <td> <a href = '#' class='delete' style="color: red; text-align: center; text-decoration:none;" >x</td>
        `
        list.appendChild(row)
        
    }

    clearFields(){
        let title= document.querySelector("#title").value = "";
        let author= document.querySelector("#author").value = "";
        let isbn= document.querySelector("#isbn").value = "";
    }

    showalert(message, alertClassName){
        let div = document.createElement('div');
        div.className = `alert ${alertClassName}`; //will create a div with diff alert class of skeleton css
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");
        let form = document.querySelector("#book-form");
        container.insertBefore(div, form); //will add div before form after container

        setTimeout(function(){ //to vanish the alert after 3s
            document.querySelector(".alert").remove();
        }, 3000)

    }
}