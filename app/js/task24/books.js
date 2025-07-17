// Array of book objects
const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: false, year: 1937 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false, year: 1954 },
    { title: "Vindecarea celor 5 rani", author: "Lise Bourbeau", alreadyRead: true, year: 2021 },
    { title: "Atomic Habits", author: "James Clear", alreadyRead: false, year: 2019 },
    { title: "Sapiens", author: "Yuval Noah Harari", alreadyRead: true, year: 2017 }
];

// Function to display books
function displayBooks() {
    const bookListContainer = document.getElementById("bookListContainer");
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";

        const bookTitle = document.createElement("p");
        bookTitle.textContent = book.title;
        bookDiv.appendChild(bookTitle);

        const aboutButton = document.createElement("button");
        aboutButton.textContent = "About book";
        aboutButton.addEventListener("click", () => showBookDetails(bookDiv, book));
        bookDiv.appendChild(aboutButton);

        const bookDetails = document.createElement("ul");
        bookDetails.className = "details";
        bookDiv.appendChild(bookDetails);

        bookListContainer.appendChild(bookDiv);
    });
}

// Function to show book details
function showBookDetails(bookDiv, book) {
    const bookDetails = bookDiv.querySelector('.details');
    if (bookDetails.style.display === "none" || bookDetails.style.display === "") {
        bookDetails.innerHTML = `
            <li>Title: ${book.title}</li>
            <li>Author: ${book.author}</li>
            <li>Year: ${book.year}</li>
            <li>${book.alreadyRead ? `You already read "${book.title}" by ${book.author}` : `You still need to read "${book.title}" by ${book.author}`}</li>
        `;
        bookDetails.style.display = "block";
    } else {
        bookDetails.style.display = "none";
    }
}

// Initial call to display books
displayBooks();