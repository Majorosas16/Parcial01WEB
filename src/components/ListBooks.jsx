
import BookItem from "./BooksItem";

const BookList = ({books, handleClick}) => {

    return(
        <>
            <h1>Libros guardados</h1>
            {books.map((book,i) => 
            <BookItem book={book} key={i} handleClick={handleClick}/>)}
        </>
    )
}

export default BookList;