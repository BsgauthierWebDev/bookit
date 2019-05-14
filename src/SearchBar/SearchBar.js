import React from 'react';
import './SearchBar.css';
// I -- nothing
// O -- the search term the user inputs, sends it to App for fetch and state mgmt
export default function SearchBar( props ) {
    return (
        <>
            <div className="searchbar_container">
                <form className="searchbar_form">
                    <input 
                        className="searchbar_input" 
                        type="text" 
                        placeholder="Search Books ... " 
                        name="search" />
                    <button type="submit"><i className="fa fa-search search_button" /></button>
                </form>
            </div>
        </>
    );
}