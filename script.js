const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} ` 
    }
}


function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R Tolien', 295, 'not read yet');
addBookToLibrary('Of Mice and Men', 'John Steinbeck', 107, 'not read yet');
addBookToLibrary('Animal Farm', 'George Orwell', 112, 'read');
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 189, 'read');
addBookToLibrary('A Clockwork Orange', 'Anthony Burgess', 192, 'not read yet');


let container = document.querySelector('#container');

function displayBooks() {
    for(book of myLibrary) {
        console.log(book.title);
        let div = document.createElement('div');
        div.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`;
      container.appendChild(div);
    }

}

displayBooks();