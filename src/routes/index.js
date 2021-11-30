const express = require('express');
const {booksController} = require('../controllers');

const router = new express.Router();

/**
 * @swagger
 * /api/v1/books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: An array of books
*/
router.get('/books', booksController.getBooks);
router.get('/books/:bookId', booksController.getBook);
router.post('/books', booksController.saveBook);
router.put('/books/:bookId', booksController.updateBook);

module.exports = router;
