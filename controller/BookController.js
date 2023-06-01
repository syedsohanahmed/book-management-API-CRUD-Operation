const express = require("express");
const mongoose = require("mongoose");
const Book = require("../models/Book");
const BookController = {

  // Retrieve books

  getAllBooks: async (req, res) => {
    const id = req.params.id;

    if (!id) {
      const allBooks = await Book.find({});
      return res.status(200).json(allBooks);
    }

    const book = await Book.find({ _id: id });
    return res.status(200).json(book);
  },

  // Create a new book
  storeBook: (req, res) => {
    const myBook = new Book(req.body);
    myBook
      .save()
      .then(() => {
        res.status(200).send(" Inserted Successfully");
      })
      .catch((error) => {
        res.status(404).send({error: "Something wrong"});
      });
  },

  //  Update a book by ID
   
  updateBook: (req, res) => {
    const id = req.params.id;

    Book.updateOne({ _id: id }, { $set: req.body })
      .then(() => {
        res.status(200).send(" Updated Successfully");
      })
      .catch((error) => {
        res.status(404).send({ error:"Something  wrong"});
      });
  },
//  Deleted a book by ID
 
  deleteBook: (req,res)=> {
    const id = req.params.id

    Book.deleteOne({ _id: id })
      .then(() => res.send("Deleted Successfully "))
      .catch(() => res.send("Something wrong"));

  },
};

module.exports = BookController;
