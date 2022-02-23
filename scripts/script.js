let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.changeReadBtn = function() {
  this.read = readBtn.textContent;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook() {
  const container = document.querySelector('.main');
  myLibrary.forEach((book, index) => {
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('button');

    read.dataset.i = index;

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;
    read.textContent === 'Read' ? read.classList.toggle('read') : read.classList.toggle('not-read')

    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(createDeleteBtn(index));
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    container.appendChild(card);
    addDeleteBtnListener(index);
    readBtnListener(index);
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
submitBtn.addEventListener('click', submitBook);

const readBtnForm = document.querySelector('#read');
readBtnForm.addEventListener('click', (e) => {
  e.target.textContent = e.target.textContent === 'Read' ? 'Unread' : 'Read'
  e.target.classList.toggle('unread-button-form');
})

function addDeleteBtnListener(index) {
  const cardCloseBtn = document.querySelector(`[data-index="${index}"]`);
  cardCloseBtn.addEventListener('click', () => {
    myLibrary.splice(index, 1);
    clearDisplay();
    displayBook();
  })
}

function readBtnListener(index) {
  const readBtn = document.querySelector(`[data-i="${index}"]`);
  readBtn.addEventListener('click', () => {
    if (readBtn.textContent === 'Read') {
      readBtn.textContent = 'Unread';
      readBtn.classList.remove('read');
      readBtn.classList.toggle('not-read');
    } else {
      readBtn.textContent = 'Read'
      readBtn.classList.remove('not-read');
      readBtn.classList.toggle('read');
    }
    myLibrary[index].changeReadBtn();
    clearDisplay();
    displayBook();
  })
}


// helper functions
function clearDisplay() {
  const container = document.querySelector('.main');
  while(container.firstChild){
    container.removeChild(container.firstChild);
}};

// remove addBtn listener when the form pops up
function addBtnClick() {
  document.querySelector('.popup-form').style.display = 'flex';
  document.querySelector('#overlay').classList.toggle('overlay');
  addBtn.removeEventListener('click', addBtnClick);
}

// turn on addBtn listener when the form is closed with closed button
function closeBookForm() {
  document.querySelector('.popup-form').style.display = 'none';
  document.querySelector('#overlay').classList.toggle('overlay');
  addBtnListener();
}

function submitBook() {
  let newBook = Object.create(Book.prototype);
  newBook.title = title.value;
  newBook.author = author.value;
  newBook.pages = `${pages.value} pages`;
  newBook.read = read.textContent;

  addBookToLibrary(newBook);

  // clear the books from display before displaying again so that display
  // books do not double
  document.querySelector('.form').reset();
  closeBookForm();
  clearDisplay();
  displayBook();
}

function createDeleteBtn(index) {
  const deleteContainer = document.createElement('div');
  const deleteBtn = document.createElement('img');
  deleteBtn.src = "./images/close.svg";
  deleteBtn.dataset.index = index

  deleteContainer.classList.toggle('card-close');

  deleteContainer.appendChild(deleteBtn);
  return deleteContainer;
}

displayBook();
addBtnListener();
