# LAB 7 - React CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application for managing books. This project consists of a React frontend and an Express.js backend API.

## Features

- ✅ Create new books
- ✅ Read/View all books
- ✅ Update existing books
- ✅ Delete books
- ✅ Real-time UI updates
- ✅ RESTful API architecture

## Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **Vite** 7.2.2 - Build tool and dev server
- **Axios** 1.13.2 - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express** 5.1.0 - Web framework
- **CORS** 2.8.5 - Cross-origin resource sharing

## Project Structure

```
LAB7/
├── backend/
│   ├── server.js          # Express API server
│   ├── package.json       # Backend dependencies
│   └── node_modules/      # Backend dependencies
├── frontend/
│   └── react-crud/
│       ├── src/
│       │   ├── App.jsx    # Main React component
│       │   ├── App.css    # Component styles
│       │   ├── main.jsx   # React entry point
│       │   └── index.css  # Global styles
│       ├── package.json   # Frontend dependencies
│       └── vite.config.js # Vite configuration
└── README.md              # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend/react-crud
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Step 1: Start the Backend Server

From the `backend` directory:
```bash
node server.js
```

The API server will start on `http://localhost:5000`

### Step 2: Start the Frontend Development Server

From the `frontend/react-crud` directory:
```bash
npm run dev
```

The React app will start on `http://localhost:5173` (or another port if 5173 is busy)

## API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a single book by ID |
| POST | `/books` | Create a new book |
| PUT | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |

### Example API Requests

**Get all books:**
```bash
GET http://localhost:5000/books
```

**Create a book:**
```bash
POST http://localhost:5000/books
Content-Type: application/json

{
  "title": "My New Book"
}
```

**Update a book:**
```bash
PUT http://localhost:5000/books/1
Content-Type: application/json

{
  "title": "Updated Book Title"
}
```

**Delete a book:**
```bash
DELETE http://localhost:5000/books/1
```

## Usage

1. Start both the backend and frontend servers (see instructions above)
2. Open your browser and navigate to the frontend URL (typically `http://localhost:5173`)
3. Use the input field to add new books
4. Click "Edit" to modify an existing book
5. Click "Delete" to remove a book from the list

## Data Storage

Currently, the application uses an in-memory array to store books. This means:
- Data is lost when the server restarts
- Data is not persisted between sessions

For production use, consider integrating a database (MongoDB, PostgreSQL, etc.)

## Development

### Frontend Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

ISC

## Author

Created for LAB 7 - Web Technologies Course

