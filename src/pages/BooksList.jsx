import { useState } from "react";
import { Link } from "react-router-dom";
import EmptyState from "../Components/Emptystate";

function BookList({ books, onDeleteBook }) {
    const [searchText, setSearchText] = useState('');

    const filteredBooks = books.filter(book => {
        const searchValue = searchText.toLowerCase();
        return (
            book.title.toLowerCase().includes(searchValue) ||
            book.author.toLowerCase().includes(searchValue) ||
            book.category.toLowerCase().includes(searchValue)
        );
    });

    function handleDelete(bookid) {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            onDeleteBook(bookid);
        }
    }

    return (
        <section>
            <div className="page-header">
                <div>
                    <h1>Books</h1>
                    <p>View, search, edit and delete books</p>
                </div>

                <Link to="/dashboard/books/add" className="primary-link">
                    Add Book
                </Link>

                <div className="search-bar">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search by title, author or genre"
                    />
                </div>

                {filteredBooks.length === 0 ? (
                    <EmptyState message="No books found. Try adjusting your search or add new books." />
                ) : (
                    <div className="books-grid">
                        {filteredBooks.map(book => (
                            <article key={book.id} className="book-card">
                                <div>
                                    <h3>{book.title}</h3>
                                    <p>Author: {book.author}</p>
                                    <p><strong>Category:</strong> {book.category}</p>
                                    <p><strong>Total Copies:</strong> {book.totalCopies}</p>
                                    <p><strong>Available Copies:</strong> {book.availableCopies}</p>

                                    <button onClick={() => handleDelete(book.id)}>
                                        Delete
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default BookList;