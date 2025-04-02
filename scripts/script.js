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
    showBook(title, author, year, read);
}

const newBook = document.querySelector("#addBookBtn");

newBook.addEventListener("click", (event) => {
    const addBookForm = document.querySelector(".addBookForm");

    newBook.style.display = "none";
    addBookForm.style.display = "inline-block";
});

const addBook = document.querySelector("#addBook");

addBook.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const year = document.querySelector("#year").value;
    const read = document.querySelector("input[name='read']").checked;
    const id = crypto.randomUUID();

    addBookToLibrary(title, author, year, id, read)
});

function showBook(title, author, year, read) {
    const addedBook = document.createElement("div");
    addedBook.classList.add("book-card");
    addedBook.textContent = `${title} by ${author}. Year: ${year}. Read: ${read}.`;

    const addedBooksContainer = document.querySelector(".book-cards");

    addedBooksContainer.appendChild(addedBook);
}

