var [x, y] = ["a", "b"];

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);

var obj = { x, y };
console.log(obj);

class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log(this.isbn);
  }
}

var nb = new Book("js", 123, "123141432");

nb.printIsbn();

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }
}

let jsBook = new ITBook("学习JS", "200", "123432", "javascript");
console.log(jsBook.title);
jsBook.printTechnology();
jsBook.printIsbn();

//
//
//
//
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    return (this._name = value);
  }
}

let lotrChar = new Person("Frodo");
console.log(lotrChar.name);
lotrChar.name = "Gandalf";
console.log(lotrChar.name);
lotrChar._name = "Sam";
console.log(lotrChar.name);
