const db=require('../db');
const{v4:uuidv4}=require('uuid');
exports.getAllBooks=async(req,res) =>{
const [rows]=await db.query('SELECT * FROM book_tracker');
res.json(rows);
};
exports.getBookById=async(req,res) =>{
    const [rows]=await db.query('SELECT * FROM book_tracker WHERE id=?',[req.params.id]);
    rows.length ? res.json(rows[0]) : res.status(404).send('NOT Found');
};
exports.addBook=async(req,res) =>{
    const {title,author,status,review}=req.body;
    const id=uuidv4();
    await db.query(`INSERT INTO book_tracker (id,title,author,status,review) VALUES (?,?,?,?,?)`,[id,title,author,status,review]);
    res.send({id,title,author,status,review})
};
exports.updateBook=async(req,res) =>{
    const {title,author,status,review}=req.body;
    await db.query('UPDATE book_tracker SET title=?,author=?,status=?,review=? WHERE id=?',[title,author,status,review,req.params.id]);
    res.send('Updated')
};
exports.deleteBook=async(req,res) =>{
    await db.query('DELETE FROM book_tracker WHERE id=?',[req.params.id]);
    res.send('Deleted');
};
exports.getBooksGroupedByStatus=async (req, res) => {
    const [rows] =await db.query('SELECT * FROM book_tracker');
    const grouped={
        'read':[],
        'reading':[],
        'to-read':[],
    };
    rows.forEach(book=>{
        const status=book.status?.toLowerCase();
        if(grouped[status]){
            grouped[status].push(book);
        }
    });
    res.json(grouped);
};
