let myLibrary = [];

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
