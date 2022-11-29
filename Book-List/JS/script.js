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

//Add EeventListeners
form.addEventListener('submit', newBook);
bookList.addEventListener('click', removeBook);

//Writting functions
function newBook(e) {
    // console.log("submitted")
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    if (title == "" || author == "" || isbn == "") {
        UI.showalert("Please Fill up all the boxes bellow & try again!", "error")
    }

    else {
        let book = new Book(title, author, isbn);
        //console.log(book)
        UI.addBookList(book)
        UI.clearFields()
        e.preventDefault();
        UI.showalert("Book Added!", "success")
    }
}

function removeBook(e) {
    if (e.target.hasAttribute('href')) {
        UI.deleteFromBook(e.target);
        UI.showalert("Book Removed!", "success");
    }
    e.preventDefault();
}

//UI Class
class UI { //To Add books in the table data

    static addBookList(book) {
        //console.log(book)
        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');
        row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href = '#' class='delete' style="color: red; text-align: center; text-decoration:none;" >x</td>
        `
        list.appendChild(row)

    }

    static clearFields() {
        let title = document.querySelector("#title").value = "";
        let author = document.querySelector("#author").value = "";
        let isbn = document.querySelector("#isbn").value = "";
    }

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

    static deleteFromBook(target) {
        target.parentElement.parentElement.remove()
    }

}