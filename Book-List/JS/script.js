//Getting the UI elements
let form = document.querySelector('#book-form');
let bookList = document.querySelector('#book-list');

//Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

//UI Class
class UI { 

    //To Add books in the table data
    static addBookList(book) {
        //console.log(book)
        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');
        row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href = '#' class='delete' style="color: red; text-align: center; text-decoration:none; margin-left: 22px" >x</td>
        `
        list.appendChild(row)
    }

    //Clears the form
    static clearFields() {
        let title = document.querySelector("#title").value = "";
        let author = document.querySelector("#author").value = "";
        let isbn = document.querySelector("#isbn").value = "";
    }

    //Shows Alert
    static showalert(message, alertClassName) {
        let div = document.createElement('div');
        div.className = `alert ${alertClassName}`; //will create a div with diff alert class of skeleton css
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");
        let form = document.querySelector("#book-form");
        container.insertBefore(div, form); //will add div before form after container

        setTimeout(function () { //to vanish the alert after 3s
            document.querySelector(".alert").remove();
        }, 3000)
    }

    static deleteFromBook(target) { //here, target is the cross (x) a tag
        target.parentElement.parentElement.remove() //removing book form the ui list
        Store.removeBook(target.parentElement.previousElementSibling.textContent.trim()); //Sending data for removing from the local storage as well
    }
}

//Local Storage Class
class Store {
    static getBooks() { //checks if there is a book or not
        let books;
        if (localStorage.getItem('books') == null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        let books = Store.getBooks(); //getting the existing book array
        books.push(book) //pushing new book to the array

        localStorage.setItem('books', JSON.stringify(books)) //Storing in local storage as array
    }

    static displayBooks() { //For displaying books from the storage
        let books = Store.getBooks();
        books.forEach(book => { 
            UI.addBookList(book); //adding single row
        });
    }

    static removeBook(isbn) { //for removing book from storage
        let books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1); //Removing array item 
            }
        })
        localStorage.setItem('books', JSON.stringify(books)); //setting rest of the books to the list
    }
}

//Add EeventListeners
form.addEventListener('submit', newBook);
bookList.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());


//Writting functions
function newBook(e) {
    // console.log("submitted")
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    if (title == "" || author == "" || isbn == "") {
        UI.showalert("Please Fill up all the boxes bellow & try again!", "error")
    }
    else { //adding book
        let book = new Book(title, author, isbn);
        //console.log(book)
        UI.addBookList(book)
        UI.clearFields()
        UI.showalert("Book Added!", "success")
        Store.addBook(book)
    }
    e.preventDefault();
}

function removeBook(e) { 
    if (e.target.hasAttribute('href')) {
        UI.deleteFromBook(e.target); //calling removing function
        UI.showalert("Book Removed!", "success");
    }
    e.preventDefault();
}

