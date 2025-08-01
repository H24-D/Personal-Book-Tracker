import {useEffect,useState} from 'react';
import axios from 'axios';
export default function BookList(){
    const [books,setBooks]=useState([]);
    useEffect(( )=> {
        axios.get('http://localhost:5000/api/books')
        .then(res => setBooks(res.data));
    },[]);
    return(
        <div className="container">
            <h2>MY Books
                
            </h2>
            <ul>
                {books.map(book => (
                    <li className="book-label"  type="1" key={book.id}>title:{book.title}<br/>Author:{book.author}<br/> Status:{book.status}<br/>review:{book.review} </li>
                ))}
            </ul>
        </div>
    );
}