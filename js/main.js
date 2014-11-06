var app = angular.module('library', ['angular-data.DS']);

app.factory('Book', function(DS) {
  return DS.defineResource({
    name: 'book',
    endpoint: '/api/books.json',
    idAttribute: 'isbn13'
  });
});

app.controller('BooksController', function(DS, Book) {
	var vm = this;

  vm.title = "My Books";

  DS.findAll('book').then(function(books) {
  	console.log(books);
    vm.books = books;

    // no request made here since this book is already in the store
    DS.find('book', '978-0596806750').then(function(book) {
    	console.log(book, 'loaded directly from data store');
    });
  });
});

// app.run(function(Book) {

// });