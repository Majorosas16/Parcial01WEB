import BookItem from "./BooksItem";

//Libro del agregado

const ReadBooks = ({read}) => {

    return(
        <>
            <h1>Libros leidos aquí</h1>
            {read.map((book,i) => 

            <BookItem book={book} key={i} read={read}/>

            )}
        </>
    )
}

export default ReadBooks;