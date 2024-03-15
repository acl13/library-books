const openModal = document.getElementById('open-modal');
const dialog = document.querySelector('dialog');
const cancel = document.getElementById('cancel')
const submit = document.getElementById('submit');

openModal.addEventListener('click', () => {
    dialog.showModal();
});

cancel.addEventListener('click', () => {
    dialog.close();
})

submit.addEventListener('click', formSubmit, false);


function formSubmit(event) {
    event.preventDefault();

}

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementsByName('read');

submit.addEventListener('click', () => {    
    for (i = 0; i < read.length; i++) {
        if (read[i].checked) {
            var radioValue = read[i].value;
        }
    }

    addBookToLibrary(title.value, author.value, pages.value, radioValue);
    console.log(myLibrary);

    displayBooks();
}
)


submit.addEventListener('click', () => {
    dialog.close();
})









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

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
addBookToLibrary('Of Mice and Men', 'John Steinbeck', 107, 'not read yet');
addBookToLibrary('Animal Farm', 'George Orwell', 112, 'read');
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 189, 'read');
addBookToLibrary('A Clockwork Orange', 'Anthony Burgess', 192, 'not read yet');


let container = document.querySelector('#container');




function displayBooks() {
    for(book of myLibrary) {
        let div = document.createElement('div');
        let titleAndAuthor = document.createElement('p');
        let pagesNum = document.createElement('p');
        let readStatus = document.createElement('p');
        titleAndAuthor.textContent = `${book.title} by ${book.author}`;
        pagesNum.textContent = `${book.pages} pages`;
        readStatus.textContent = `${book.read}`;
      container.appendChild(div);
      div.appendChild(titleAndAuthor);
      div.appendChild(pagesNum);
      div.appendChild(readStatus);
    }

}



