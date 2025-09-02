import { useState, useEffect } from 'react'
import BookList from './components/ListBooks'
import './App.css'
import ReadBooks from './components/ReadBooks';

function App() {

    const [books, setBooks] = useState([]);
    console.log(books)
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');  
    const [added, setAdded] = useState([]);
    console.log(added);
    

 const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));  

  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?q=${search}&limit=2`)
    // fetch(`https://openlibrary.org/search.json?${search}&limit=10`)
    .then((res) => res.json())
    .then((datos) => setBooks(datos.docs))
    .catch((error) => setError(error))
    .finally(()=> setLoading(false))
  },[search])

  if(error) return <p>Hay un error: {error}</p>
  if(loading) return <p>Cargando.....</p>

      const handleClick = (item) => {
      const booksAdded = [...added, item]; 
      setAdded(booksAdded);
    }

  return (
    <>
      <input 
      type='text'
      placeholder='Search the title of the book'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <BookList books={filteredBooks} handleClick={handleClick}></BookList>
      <ReadBooks read={added}></ReadBooks>
    </>
  )
}

export default App
