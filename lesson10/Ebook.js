import Book, { book1, book2 } from "./Book.js";

class Ebook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Invalid file format");
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`The book "${this.title}" by ${this.author} was published in ${this.year}. Book format is ${this.fileFormat}.`);
    }

    static createEbookFromBook(book, format) {
        return new Ebook(book.title, book.author, book.year, format);
    }
}

const ebook1 = new Ebook("Kobzar", "Taras Shevchenko", 1840, "epub");
const ebook2 = new Ebook("1984", "George Orwell", 1949, "mobi");

ebook1.printInfo();
ebook2.printInfo();

const books = [book1, book2, ebook1, ebook2];

const oldestBook = Book.findOldestBook(books);
console.log(`The oldest book is "${oldestBook.title}" by ${oldestBook.author}, published in ${oldestBook.year}.`);

const ebookFromBook = Ebook.createEbookFromBook(book1, "pdf");
ebookFromBook.printInfo();