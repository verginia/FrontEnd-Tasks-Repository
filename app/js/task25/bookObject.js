// Define the Book object
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = parseInt(document.getElementById('currentPageInput').value) || 0;

    this.read = function(numPages) {
        this.currentPage += numPages;
        if (this.currentPage > this.pages) {
            this.currentPage = this.pages;
        }
        document.getElementById("bookCurrentPage").innerHTML = `Current page: <input type="number" id="currentPageInput" value="${this.currentPage}">`;
        document.getElementById("currentPageInput").value = this.currentPage;
        console.log(`Reading ${numPages} pages`);
    };

    this.checkPage = function() {
        console.log(`Current page: ${this.currentPage}`);
        document.getElementById("bookCurrentPage").innerHTML = `Current page: <input type="number" id="currentPageInput" value="${this.currentPage}">`;
    };

    this.checkPercentage = function() {
        const percentage = ((this.currentPage / this.pages) * 100).toFixed(2);
        console.log(`Percentage read: ${percentage}%`);
        document.getElementById("bookPercentage").textContent = `Percentage read: ${percentage}%`;
    };

    this.isRead = function() {
        return this.currentPage === this.pages;
    };
}

// Create a Book instance
const myBook = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 300);

// Function to read the book
function readBook() {
    const pagesToRead = parseInt(document.getElementById("pagesToRead").value);
    if (!isNaN(pagesToRead) && pagesToRead > 0) {
        myBook.read(pagesToRead);
        updateBookInfo();
    } else {
        alert("Please enter a valid number of pages to read");
    }
}

// Function to check the current page
function checkPage() {
    myBook.currentPage = parseInt(document.getElementById('currentPageInput').value) || 0;
    myBook.checkPage();
}

// Function to check the percentage read
function checkPercentage() {
    myBook.checkPercentage();
}

// Function to check if the book is read
function checkIsRead() {
    const isRead = myBook.isRead();
    const statusText = isRead ? "You have finished reading the book." : "You have not finished reading the book.";
    console.log(statusText);
    document.getElementById("bookStatus").textContent = statusText;
}

// Function to update the book info display
function updateBookInfo() {
    document.getElementById("bookTitle").textContent = `Title: ${myBook.title}`;
    document.getElementById("bookAuthor").textContent = `Author: ${myBook.author}`;
    document.getElementById("bookPages").textContent = `Pages: ${myBook.pages}`;
    myBook.checkPercentage();
}