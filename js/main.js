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
  });
});

// app.run(function(Book) {

// });