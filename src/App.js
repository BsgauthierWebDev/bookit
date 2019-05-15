import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';
import Filter from './Filter/Filter';

export default class App extends Component {

  state = {
    bookResults: this.props.starterBookResults,
    searchQuery: '', 
    bookFilter: '', 
    printFilter: ''
  }
  
  componentDidMount() {
    // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    console.log('component mounted!')
    // const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const url = 'https://www.googleapis.com/books/v1/volumes?q=harrypotter&key='
    const apiKey = 'AIzaSyCQyLInHW1z1Ev9qqwwdG0MBqxdFcD542w';
    const fullUrl = url + apiKey;
    fetch( fullUrl )
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong on the network. Please try again later.');
        }
        return response;
      })
      .then(response => response.json())
      .then(bookResultsObj => {
        console.log('Good response From Google Books API: ', bookResultsObj)
        this.setState({
          bookResults: bookResultsObj,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  handleSearchSubmit = ( searchSubmitEvent, searchInput ) => {
    searchSubmitEvent.preventDefault();
    console.log('handleSearchSubmit just got this submission: ', searchInput);
    this.setState({
      searchQuery: searchInput
    });
  }

  handlePrintType = ( printTypeFormEvent ) => {
    if ( printTypeFormEvent ) {
      this.setState({
          printFilter: printTypeFormEvent
      });
    } 
  }

  handleBookType = ( bookTypeFormEvent ) => {
    if ( bookTypeFormEvent ) {
      this.setState({
          bookFilter: bookTypeFormEvent
      });
    } 
  }

  render() {
    const { bookResults } = this.state;
    return (
      <>
        <Header />
        <SearchBar 
          handleSearchSubmit={ this.handleSearchSubmit }/>
        <Filter
          handlePrintType={ this.handlePrintType }
          handleBookType={ this.handleBookType } />
        <BookList 
          bookResults={ bookResults } />
      </>
    );
  }
}
