import React, { Component }from 'react';
import './SearchBar.css';
// I -- nothing
// O -- the search term the user inputs, sends it to App for fetch and state mgmt
export default class SearchBar extends Component {
    
    state = {
        searchInput: ''
    }

    handleSearchInput = ( searchEvent ) => {
        console.log('handleSearchInput in SearchBar Component just received: ', searchEvent.target.value);
        this.setState({
          searchInput: searchEvent.target.value
        });
    }
    render() {
        const { handleSearchSubmit } = this.props;
        return (
            <>
                <div className="searchbar_container">
                    <form 
                        className="searchbar_form"
                        onSubmit={ submitEvent => handleSearchSubmit(submitEvent, this.state.searchInput) }>
                        <input 
                            className="searchbar_input" 
                            type="text" 
                            placeholder="Search Books ... " 
                            name="search" 
                            onChange={ this.handleSearchInput } />
                        <button type="submit"><i className="fa fa-search search_button" /></button>
                    </form>
                </div>
            </>
        );
    }
    
}