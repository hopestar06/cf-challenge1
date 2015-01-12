function Library(name, numShelves) {

    this.name = name;
    this.numShelves = numShelves;
    this.shelves = [numShelves];
    
    this.addShelf = shelves.push(aShelf);
    
    this.listOfBooks="";
    
    this.reportAllBooks = function(){
        for(i=0; i<shelves.length();i++){
              listOfBooks = listOfBooks + shelves[i].books.join();     
        }
        console.log(listOfBooks);
    };
}

function Shelf(shelfID) {
    this.shelfID = shelfID;

    this.books = [];

    //reports all books the shelf contains
    this.getAllBooks = function () {
        return books;
    };

    this.enshelf = function (book) {
        for (i = 0; i<books.length();i++) {
            books.push(book);
        }
    };

    this.unshelf = function (book) {
        for (i = 0; i < books.length(); i++) {
            if (books[i].title == book.title && books.author == book.author) {
                books.splice(i,1);
            }
        }
        
    };
}
        
function Book(title, author) {

    this.title = title;
    this.author= author;
}
