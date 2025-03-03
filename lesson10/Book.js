class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Invalid title");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Invalid author");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error("Invalid year");
        }
        this._year = value;
    }

    printInfo() {
        console.log(`The book "${this.title}" by ${this.author} was published in ${this.year}.`);
    }

    static findOldestBook(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}

export const book1 = new Book("Meditations", "Marcus Aurelius", 1995);
export const book2 = new Book("The Reconstruction of Nations", "Timothy Snyder", 2003);

book1.printInfo();
book2.printInfo();

export default Book;