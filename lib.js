const myLibrary = [];

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
    if (form.style.visibility === 'hidden')
      form.style.visibility = 'visible';
    else{
      form.style.visibility = 'hidden';
    }
  });
});
const display = document.querySelector(".display");
function addBookToLibrary(event) {
    event.preventDefault();

  const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector('input[name="read"]:checked').value;
    let book;
    if(read == "read"){
        book = new Book(title, author, pages, true);
    }
    else{
        book = new Book(title, author, pages, false);
    }
    myLibrary.push(book);
    display.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++){
      const page = document.createElement('div');
      const deleteButton = document.createElement('button'); 
      deleteButton.innerHTML = 'Delete Book';
      deleteButton.style.backgroundColor = 'red';
      deleteButton.style.color = 'white';
      deleteButton.style.borderRadius = '5px';
      deleteButton.style.padding = '5px';
      deleteButton.style.margin = '10px';

      page.classList.add('page');
      display.appendChild(page);
      page.style.backgroundColor = 'black';
      page.style.flexWrap = 'wrap';
      page.style.color = 'white';
      page.style.margin = '20px 40px';
      page.style.padding = '20px';
      page.style.borderRadius = '10px';
      page.style.textAlign = 'center';
      page.style.fontSize = '20px';
      page.style.fontWeight = 'bold';
      page.style.borderLeft = '10px solid rgb(48, 46, 45)';
      page.style.boxShadow = '8px 3px rgb(237, 199, 171), 11px 6px #000000, 12px 7px 0px #000000, 14px 9px 0px #000000';
      page.innerHTML += `${myLibrary[i].title}<br><br>`;
      page.innerHTML += `${myLibrary[i].author}<br><br>`;
      page.innerHTML += `${myLibrary[i].pages}<br><br>`;

      if(myLibrary[i].read){
        page.innerHTML += `<p> Read </p>`;
      }
      else{
        page.innerHTML += `<p> Not Read </p>`;
      }
      page.appendChild(deleteButton);
  }
  
}

document.querySelector('form').addEventListener('submit', addBookToLibrary);
