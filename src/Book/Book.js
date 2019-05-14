import React from 'react';
import './Book.css';

export default function Book(props) {

    const { book } = props;

    const author = book.volumeInfo.authors[0];
    const title = book.volumeInfo.title;
    const thumbnailUrl = book.volumeInfo.imageLinks.thumbnail;
    const previewUrl = book.volumeInfo.previewLink;
    const snippet = book.searchInfo.textSnippet;
    const cost = book.saleInfo.saleability === 'FOR_SALE' 
        ? '$' + book.saleInfo.listPrice.amount
        : 'No Price Availalbe';
    
        return (
        <>
            <div className="book_container">
                <a href={ previewUrl } target="blank">
                    <li className="book_li">
                        <img src={ thumbnailUrl } className="book_image" alt={`The cover of the book titled ${title}`}></img>
                        <div className="book_info">
                            <h2 className="book_title">{ title }</h2>
                            <div className="book_author">{ author }</div>
                            <div className="book_cost">{ cost }</div>
                            <p className="book_snippet">{ snippet }</p>
                        </div>
                    </li>
                </a>
            </div>
        </>
    );
}
