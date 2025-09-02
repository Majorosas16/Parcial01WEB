
const BookItem = ({book, handleClick, read}) => {


    return (
    <>
    <h1>Book</h1>
        <p> Title: {book.title}</p>
        <p> Author: {book.author_name}</p>
        <p> Year {book.first_publish_year || 'noYear'}</p>
        <button onClick={() => handleClick(book)}>Agregar a Lista</button>

        {
            read && 
            <select name="addedBooks" id="addedSelect">
                <option value="">--Estado de lectura--</option>
                <option value="hold">Pendiente</option>
                <option value="read">Leyendo</option>
                <option value="finish">Terminado</option>
            </select>

            && <input 
            type="text" 
            placeholder="Notas personales"
             />

             
        }
    </>
    )
}

export default BookItem;

