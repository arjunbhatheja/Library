const myLibrary = [];
const MAX_CAPACITY = 12;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.FormVis');
  const form = document.querySelector('.form');

  button.addEventListener('click', () => {

    if (form.style.transform != "translateX(0%)"){
      button.id = "formVisAnimret";
    form.id = "formAnimret";
    setTimeout(function(){
      form.style.transform = "translateX(0%)";
      form.id = "";
  }, 560);
  setTimeout(function(){
    button.id = "";
    button.style.transform = "translateY(0%)";
    button.style.scale = "1"
}, 990);
}
    else{
      button.id = "formVisAnim";

      form.id = "formAnim";
      setTimeout(function(){
        form.style.transform = "translateX(100%)";
        form.id = "";
    }, 560);

    setTimeout(function(){
      button.id = "";
      button.style.transform = "translateY(-200%)";
      button.style.scale = "1.3"
  }, 990);
    }
  });
});
const display = document.querySelector(".display");
function addBookToLibrary(event) {
    event.preventDefault();
    if (myLibrary.length >= MAX_CAPACITY) {
      alert(`Library is full! Maximum capacity of ${MAX_CAPACITY} books reached.`);
      return;
    }
  const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector('input[name="read"]:checked').value;
    const MAX_PAGES_LENGTH = 4; 

   const page = pages.toString(); 
    if (page.length > MAX_PAGES_LENGTH) {
      alert(`The number of pages cannot exceed ${MAX_PAGES_LENGTH} digits.`);
      return;
    }

    const isDuplicate = myLibrary.some(book => book.title === title && book.author === author && book.pages === pages);

    if (isDuplicate) {
      alert("This book is already in the library.");
      return;
    }

    let book;
    if(read == "read"){
        book = new Book(title, author, pages, true);
    }
    else{
        book = new Book(title, author, pages, false);
    }
    if(title === "" || author === "" || pages === ""){
      return;
    }
    myLibrary.push(book);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    renderLibrary();
  }
  function renderLibrary(){
    display.innerHTML = '';
    myLibrary.forEach((book, index) =>{
      const page = document.createElement('div');
      const deleteButton = document.createElement('button'); 
      deleteButton.classList.add('deleteButton');
      deleteButton.innerHTML = 'Delete Book';
      deleteButton.style.backgroundColor = 'blue';
      deleteButton.style.color = 'white';
      deleteButton.style.borderRadius = '5px';
      deleteButton.style.padding = '5px';
      deleteButton.style.margin = '10px';

      page.classList.add('page');
      page.style.backgroundColor = 'rgb(152, 152, 158)';
      // page.style.opacity = '0.2';
      page.style.flexWrap = 'wrap';
      page.style.color = 'black';
      page.style.margin = '20px 40px';
      page.style.padding = '20px';
      page.style.borderRadius = '10px';
      page.style.textAlign = 'center';
      page.style.fontSize = '20px';
      page.style.overflow = 'hidden';
      page.style.textoverflow= 'ellipsis';
      page.style.whitespace= 'nowrap';
      page.style.fontWeight = 'bold';
      page.style.borderLeft = '10px solid rgb(48, 46, 45)';
      page.style.boxShadow = '8px 3px rgb(219,230,210), 11px 6px #000000, 12px 7px 0px #000000, 14px 9px 0px #000000';
      page.style.maxHeight = '80%';
    
      const titleElem = document.createElement('div');
      titleElem.style.fontWeight = 'bold';
      titleElem.textContent = book.title;
      titleElem.style.paddingRight = '40px';
      page.appendChild(titleElem);
  
      const authorElem = document.createElement('div');
      authorElem.textContent = `Author: ${book.author}`;
      page.appendChild(authorElem);
  
      const pagesElem = document.createElement('div');
      pagesElem.textContent = `Pages: ${book.pages}`;
      page.appendChild(pagesElem);
  
      const readStatus = document.createElement('p');
      readStatus.textContent = book.read ? 'Read' : 'Not Read';
      readStatus.style.color = book.read ? 'green' : 'red';
      page.appendChild(readStatus);
      page.appendChild(deleteButton);
      display.appendChild(page);
      deleteButton.addEventListener('click', () => {
        deleteBook(index);
      });
  })
  }
  function deleteBook(index) {
    myLibrary.splice(index, 1);
    renderLibrary();
  }

const sub = document.querySelector('.submit');

sub.addEventListener('mousedown', () => {
  sub.style.backgroundColor = 'rgb(61, 128, 59)';
  sub.style.scale = '0.98';
  sub.style.color = 'white';
});
sub.addEventListener('mouseover', () => {
  sub.style.backgroundColor = 'rgb(61, 128, 59)';
  sub.style.scale = '1.02';
  sub.style.color = 'white';
})
sub.addEventListener('mouseleave', () => {
  sub.style.backgroundColor = 'rgb(0,0,0)';
  sub.style.scale = '1';
  sub.style.color = 'white';
});
sub.addEventListener('mouseup', () => {
  sub.style.backgroundColor = 'rgb(61, 128, 59)';
  sub.style.scale = '1.02';
  sub.style.color = 'white';
});

document.querySelector('form').addEventListener('submit', addBookToLibrary);
