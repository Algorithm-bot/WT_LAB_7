import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5000/books";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load books on start
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API);
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addBook = async () => {
    if (!title.trim()) return; // Prevent empty strings

    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, { title });
        setEditingId(null);
      } else {
        await axios.post(API, { title });
      }
      setTitle("");
      fetchBooks();
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const editBook = (book) => {
    setTitle(book.title);
    setEditingId(book.id);
  };

  return (
    <div className="app-container">
      <h2>React Books CRUD Manager</h2>

      {/* Input Group */}
      <div className="input-row">
        <input
          placeholder="Enter book title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addBook()}
        />
        <button className="btn-primary" onClick={addBook}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* List of Books */}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>{book.title}</span>

            <div className="actions">
              <button
                className="btn-sm btn-edit"
                onClick={() => editBook(book)}
              >
                Edit
              </button>
              <button
                className="btn-sm btn-delete"
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
