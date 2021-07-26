const { addBooksHandler, getAllBooks, getBooksById, EditingBookDataById, deleteBookById } = require('./handler')

const routes = [{
  method: 'POST',
  path: '/books',
  handler: addBooksHandler
},
{
  method: 'GET',
  path: '/books',
  handler: getAllBooks
},
{
  method: 'GET',
  path: '/books/{bookId}',
  handler: getBooksById
},
{
  method: 'PUT',
  path: '/books/{bookId}',
  handler: EditingBookDataById
},
{
  method: 'DELETE',
  path: '/books/{bookId}',
  handler: deleteBookById
}]

module.exports = routes
