import React from 'react';
import './Book.css';

export default function Book(props) {

    const { book } = props;
    // Not all responses are created equal... 
    const author = book.volumeInfo.authors[0] 
        ? book.volumeInfo.authors[0]
        : 'No authors listed'
    const title = book.volumeInfo.title 
        ? book.volumeInfo.title
        : 'No authors listed';
    const thumbnailUrl = book.volumeInfo.imageLinks.thumbnail 
        ? book.volumeInfo.imageLinks.thumbnail
        : 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg';
    const previewUrl = book.volumeInfo.previewLink 
        ? book.volumeInfo.previewLink
        : 'https://books.google.com/';
    const snippet = book.searchInfo.textSnippet 
        ? book.searchInfo.textSnippet
        : 'No description available';
    const cost = book.saleInfo.saleability === 'FOR_SALE' 
        ? '$' + book.saleInfo.listPrice.amount
        : null;

        return (
        <>
            <div className="book_container">
                <a href={ previewUrl } target="blank">
                    <li className="book_li">
                        <img src={ thumbnailUrl } className="book_image" alt={`The cover of the book titled ${title}`}></img>
                        <div className="book_info">
                            <h2 className="book_title">{ title }</h2>
                            <h4 className="book_author">{ author }</h4>
                            <div className="book_cost">{ cost }</div>
                            <p className="book_snippet">{ snippet }</p>
                        </div>
                    </li>
                </a>
            </div>
        </>
    );
}
