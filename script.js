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

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
let book2 = new Book('Of Mice and Men', 'John Steinbeck', 107, 'not read yet');
let book3 = new Book('Animal Farm', 'George Orwell', 112, 'read');
let book4 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 189, 'read');
let book5 = new Book('A Clockwork Orange', 'Anthony Burgess', 192, 'not read yet');


function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
console.log(myLibrary);

let container = document.querySelector('#container');

function displayBooks() {
    for(book of myLibrary) {
        console.log(book.title);
        let div = document.createElement('div');
        div.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`;
      container.appendChild(div);
    }

}

console.log(container);
displayBooks();