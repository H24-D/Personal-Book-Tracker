import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';
export default function BookForm(){
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [status,setStatus]=useState('to-read');
    const [review,setReview]=useState('');
    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(() =>{
        if(id){
            axios.get(`http://localhost:5000/api/books/${id}`)
            .then(res=>{
                const books=res.data;
                setTitle(books.title);
                setAuthor(books.author);
                setStatus(books.status);
                setReview(books.review);
            });
        }
    },[id]);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data={title,author,status,review};
        if(id){
            await axios.put(`http://localhost:5000/api/books/${id}`,data)
        }else{
            await axios.post(`http://localhost:5000/api/books`,data)
        }
        navigate('/');
    };
    return(
        <div className="container">
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Edit Books' : 'Add New Books'}</h2>
            <div className="form-group">
            <label>
            Title:<input value={title} onChange={(e=>setTitle(e.target.value))} required/>
            </label><br/>
            </div>
            <div className="form-group">
            <label>
            Author:<input value={author} onChange={(e=>setAuthor(e.target.value))} required/>
            </label><br/>
            </div>
            <div className="form-group">
            <label>
            Status:<select value={status} onChange={(e=>setStatus(e.target.value))} required>
                <option value="read">Read</option>
                <option value="reading">Reading</option>
                <option value="to-read">To-Read</option>
                </select>
            </label><br/>
            </div>
            <div className="form-group">
            <label>
            Review:<textarea value={review} onChange={(e=>setReview(e.target.value))} placeholder='Review (Optional)'/>
            </label><br/>
            <button type="submit">Save</button>
            </div>
        </form>
        </div>
    );
}