class Book {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus;
    }

    getReadingStatus() {
        if (this.readingStatus) {
            return `Already read ${this.title} by ${this.author}.`;
        } else {
            return `You still need to read ${this.title} by ${this.author}.`;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookForm");
    const output = document.getElementById("output");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const readingStatus = document.getElementById("readingStatus").checked;

        if (title && author) {
            const book = new Book(title, author, readingStatus);
            const message = book.getReadingStatus();
            output.textContent = message;
            console.log(message);
        } else {
            alert("Please fill in all fields.");
        }
    });
    });