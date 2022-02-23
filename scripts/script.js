let myLibrary = [new Book('game of thrones', 'george rr martin', 332, 'yes'), new Book('atomic habits', 'doobie', 332, 'yes'), new Book('atomic habits', 'doobie', 332, 'yes'), new Book('atomic habits', 'doobie', 332, 'yes'), new Book('atomic habits', 'doobie', 332, 'yes')];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book);
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


// button event listeners
const addBtn = document.querySelector('.addBtn');
function addBtnListener() {
  addBtn.addEventListener('click', addBtnClick);
}

const formClose = document.querySelector('.close');
formClose.addEventListener('click', closeBookForm);

const submitBtn = document.querySelector('.submit-book');
submitBtn.addEventListener('click', () => {
  let newBook = Object.create(Book.prototype);
  newBook.title = title.value;
  newBook.author = author.value;
  newBook.pages = `${pages.value} pages`;
  newBook.read = read.value;

  addBookToLibrary(newBook);

  // clear the books from display before displaying again so that display
  // books do not double
  document.querySelector('.form').reset();
  closeBookForm();
  clearDisplay();
  displayBook();
})


// helper functions
function clearDisplay() {
  const container = document.querySelector('.main');
  while(container.firstChild){
    container.removeChild(container.firstChild);
}};

function closeBookForm() {
  document.querySelector('.popup-form').style.display = 'none';
  document.querySelector('#overlay').classList.toggle('overlay');
  addBtnListener();
}

function addBtnClick() {
  document.querySelector('.popup-form').style.display = 'flex';
  document.querySelector('#overlay').classList.toggle('overlay');
  addBtn.removeEventListener('click', addBtnClick);
}

displayBook();
addBtnListener();
