import React, { useEffect, useState } from 'react';

function GroupedBooks() {
  const [groupedBooks, setGroupedBooks] = useState({});
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/books/grouped-by-status')
      .then(res => res.json())
      .then(data => {
        setGroupedBooks(data);
        setLoading(false);
      });
  }, []);
  if(loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>Books Grouped by Status</h2>
      {['read', 'reading', 'to-read'].map(status => (
        <div key={status}>
          <h3>{status.replace('-', ' ').toUpperCase()}</h3>
          <ul>
            {(groupedBooks[status] || []).length === 0 && <li>No books</li>}
            {(groupedBooks[status] || []).map(book => (
              <li className="book-label" key={book.id}>
                <b>{book.title}</b> by {book.author}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedBooks;