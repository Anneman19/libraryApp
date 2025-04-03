// const myLibrary = [];

// function Book(title, author, year, id, read) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.id = id;
//     this.read = read;
// }

// function addBookToLibrary(title, author, year, id, read) {
//     const book = new Book(title, author, year, id, read);
//     myLibrary.push(book);
// }

// const newBook = document.querySelector("#addBookBtn");

// newBook.addEventListener("click", () => {
//     const addBookForm = document.querySelector(".addBookForm");

//     newBook.style.display = "none";
//     addBookForm.style.display = "inline-block";
// });

// const addBook = document.querySelector("#addBook");
// const booksContainer = document.querySelector(".booksContainer");

// addBook.addEventListener("click", (event) => {
//     event.preventDefault();
//     const title = document.querySelector("#title").value;
//     const author = document.querySelector("#author").value;
//     const year = document.querySelector("#year").value;
//     const read = document.querySelector("input[name='read']").checked;
//     const id = crypto.randomUUID();

//     addBookToLibrary(title, author, year, id, read);

//     booksContainer.textContent = "";

//     showBook();
// });

// function showBook() {
//     myLibrary.forEach((book) => {
//         const addedBook = document.createElement("div");
//         addedBook.classList.add("book-card");
//         addedBook.textContent = `${book.title} by ${book.author}. Year: ${book.year}. Read: ${book.read}.`;
    
//         booksContainer.appendChild(addedBook);
//         refreshGrid();
//     });
// }

// function refreshGrid() {
//     booksContainer.style.display = 'none';
//     booksContainer.offsetHeight; // Forces reflow
//     booksContainer.style.display = 'grid';
// }

const myLibrary = [];

function Book(title, author, year, id, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.id = id;
    this.read = read;
}

function addBookToLibrary(title, author, year, id, read) {
    const book = new Book(title, author, year, id, read);
    myLibrary.push(book);
    showBook(book); // ✅ Only adds the new book
}

const newBook = document.querySelector("#addBookBtn");
const addBookForm = document.querySelector(".addBookForm");
const addBook = document.querySelector("#addBook");
const booksContainer = document.querySelector(".books-container"); // ✅ Fixed class name

newBook.addEventListener("click", () => {
    newBook.style.display = "none";
    addBookForm.style.display = "inline-block";
});

addBook.addEventListener("click", (event) => {
    event.preventDefault();
    
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const year = document.querySelector("#year").value;
    const read = document.querySelector("input[name='read']:checked").value === "yes"; // ✅ Correctly gets radio value
    const id = crypto.randomUUID();

    addBookToLibrary(title, author, year, id, read);
});

function showBook(book) {
    const addedBook = document.createElement("div");
    addedBook.classList.add("book-card");
    addedBook.textContent = `${book.title} by ${book.author}. Year: ${book.year}. Read: ${book.read ? "Yes" : "No"}.`;
    
    booksContainer.appendChild(addedBook);
}
