const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

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

    console.log(myLibrary);
}

document.querySelector('form').addEventListener('submit', addBookToLibrary);