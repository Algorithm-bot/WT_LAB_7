const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// In-memory DB (Books Array)
let books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" }
];



// ---------------------- CRUD ENDPOINTS ----------------------

// GET ALL BOOKS
app.get("/books", (req, res) => {
  res.json(books);
});

// GET ONE BOOK
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
});

// ADD NEW BOOK
app.post("/books", (req, res) => {
  const newBook = {
    id: Date.now(),
    title: req.body.title
  };

  books.push(newBook);
  res.json(newBook);
});

// UPDATE BOOK
app.put("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) return res.status(404).json({ message: "Book not found" });

  books[index].title = req.body.title;
  res.json(books[index]);
});

// DELETE BOOK
app.delete("/books/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = books.some(b => b.id === id);

  if (!exists) return res.status(404).json({ message: "Book not found" });

  books = books.filter(b => b.id !== id);
  res.json({ message: "Book deleted" });
});

// Start server
app.listen(5000, () => console.log("API running on http://localhost:5000"));
