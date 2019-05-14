import React from 'react';
import './Filter.css'

export default function Filter( props ) {

    const { handlePrintType, handleBookType, handleFilter } = props;
    return (
        <>
            <form 
                action="" 
                className="print_type_filter_form"
                onChange={ e => handlePrintType( e.target.value, handleFilter ) }>
                <select 
                    name="print-type-filter">
                    <option 
                        value="all">
                        All
                    </option>
                    <option 
                        value="books">
                        Only Books
                    </option>
                    <option 
                        value="magazines">
                        Only Magazines
                    </option>
                </select>
            </form> 
            <form 
                action="" 
                className="book_type_filter_form"
                onChange={ e => handleBookType( e.target.value, handleFilter ) }>
                <select 
                    name="book-type-filter">
                    <option 
                        value="ebooks">
                            All eBooks
                    </option>
                    <option 
                        value="free-ebooks">
                        Free eBooks
                    </option>
                    <option 
                        value="paid-ebooks">
                        Paid eBooks
                        </option>
                    <option 
                        value="full">
                        Fully Available eBooks
                    </option>
                    <option 
                        value="partial">
                        Partially Available eBooks
                    </option>
                </select>
            </form> 
        </>
    );
}
