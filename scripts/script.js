let myLibrary = [new Book('game of thrones', 'george rr martin', 332, 'yes'), new Book('atomic habits', 'doobie', 332, 'yes'), new Book('atomic habits', 'doobie', 332, 'yes'), new Book('atomic habits', 'doobie', 332, 'yes'), new Book('atomic habits', 'doobie', 332, 'yes')];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages}, ${read === true ? 'read' : 'not read yet'}`
  }
}

function addBookToLibrary() {
  let newBook = Object.create(Book.prototype);
  newBook.title = window.prompt("Book name?: ");
  newBook.author = window.prompt("Book author?: ");
  newBook.pages = window.prompt("Book pages?: ");
  newBook.read = window.prompt("Have you read this book? yes or no?");

  myLibrary.push(newBook);
}

function displayBook() {
  const container = document.querySelector('.main');
  myLibrary.forEach(book => {
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    container.appendChild(card);
  })
}

const addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', () => {
  alert("hello, world");
})

displayBook();
