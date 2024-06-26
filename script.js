const myLibrary = [];
const container = document.querySelector('#container');

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
  
    toggle () {
        if (this.read === 'yes') {
            this.read = 'no';
            return this.read;
        } else if (this.read === 'no') {
            this.read = 'yes';
            return this.read;
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'no');
addBookToLibrary(`The Hitchhiker's Guide to the Galaxy`, 'Douglas Adams', 224,  'yes');
addBookToLibrary('Of Mice and Men', 'John Steinbeck', 107, 'no');
addBookToLibrary('Animal Farm', 'George Orwell', 112, 'yes');
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 189, 'yes');
addBookToLibrary('A Clockwork Orange', 'Anthony Burgess', 192, 'no');

function displayBooks() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

   for(book of myLibrary) {
        const div = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('h3');
        const pagesNum = document.createElement('p');
        const readStatus = document.createElement('p');
        const removeBook = document.createElement('button');
        const toggle = document.createElement('label');
        const yesOrNo = document.createElement('input');
        const slider = document.createElement('span');

        title.textContent = `${book.title}`;
        author.textContent = `by ${book.author}`;
        pagesNum.textContent = `${book.pages} pages`;
        readStatus.textContent = 'Have you read this book?';
        removeBook.textContent = 'Remove Book From Library';
        toggle.classList.add('switch');
        yesOrNo.setAttribute('type', 'checkbox');
        yesOrNo.classList.add('checkbox');
        slider.classList.add('slider');
        slider.classList.add('round');

      container.appendChild(div);
      div.appendChild(title);
      div.appendChild(author);
      div.appendChild(pagesNum);
      div.appendChild(readStatus);
      div.appendChild(yesOrNo);
      div.appendChild(toggle);
      toggle.appendChild(yesOrNo);
      toggle.appendChild(slider);
      div.appendChild(removeBook);

      if (book.read === 'yes') {
        yesOrNo.checked = true;
      } else if (book.read === 'no') {
        yesOrNo.checked = false;
      }

      yesOrNo.addEventListener('click', () => {
        book.toggle();
      })

      removeBook.addEventListener('click', () => {
     
        myLibrary.splice(div.dataset.index, 1);
        div.remove();

        for(book of myLibrary) {
            let index = myLibrary.indexOf(book);
            div.dataset.index = index;
            return div.dataset.index;
        }
    }
    )
    }
}

displayBooks();

const openModal = document.getElementById('open-modal');
const dialog = document.querySelector('dialog');
const bookForm = document.getElementById('book-form');
const cancel = document.getElementById('cancel')
const submit = document.getElementById('submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementsByName('read');

openModal.addEventListener('click', () => {
    dialog.showModal();
});

cancel.addEventListener('click', () => {
    dialog.close();
})

function preventFormDefault(event) {
    event.preventDefault();
}

submit.addEventListener('click', preventFormDefault, false);

submit.addEventListener('click', () => {  
    if(!bookForm.checkValidity()) {
        alert('Please fill out all required fields');
     } else {
         
    for (i = 0; i < read.length; i++) {
        if (read[i].checked) {
            var radioValue = read[i].value;
        }
    }

    addBookToLibrary(title.value, author.value, pages.value, radioValue);
    console.log(radioValue);
    console.log(myLibrary);

    displayBooks();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = undefined;
    dialog.close();
    }
}
)