import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import GroupedBooks from './components/GroupedBooks';
function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path='/add' element={<BookForm/>}/>
        <Route path='/edit/:id' element={<BookForm/>}/>
        <Route path='/grouped' element={<GroupedBooks/>}/>
      </Routes>
    </Router>
  )
}
export default App;
