import React from 'react';
import './BookList.css'
import Book from '../Book/Book';

export default function BookList( props ) {
    
    const { bookResults } = props;
    console.log('this is bookResults from BookList', bookResults)
    const listOfBooks = bookResults.items
                        .map(( book, index ) => <Book 
                                                    book={ book } 
                                                    key={ index } />);           
    return (
        <>
        <section className="booklist_container">
            <ul>
                { listOfBooks }
            </ul>
        </section>    
        </>
    );
}


