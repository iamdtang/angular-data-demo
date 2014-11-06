var app = angular.module('library', ['angular-data.DS']);

app.factory('Book', function(DS) {
  return DS.defineResource({
    name: 'book',
    endpoint: '/api/books.json',
    idAttribute: 'isbn13'
  });
});

app.controller('BooksController', function($scope, DS) {
  DS.bindAll($scope, 'books', 'book')

  // fetch books from endpoint and load into the store
  DS.findAll('book').then(function() {
  	// no request made here since this book is already in the store
  	DS.find('book', '978-0596806750').then(function(book) {
	  	console.log(book, 'loaded directly from data store');
	  });
  });
});

app.run(function(Book) {
	// This could be from a server side data dump
	Book.inject([
		{
			"isbn13": "111-2222222222",
			"title": "Test Book"
		}
	]);
});
