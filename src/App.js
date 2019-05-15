import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';
import Filter from './Filter/Filter';

export default class App extends Component {

  state = {
    bookResults: this.props.starterBookResults,
    searchQuery: 'lord+of+the+rings', 
    bookFilter: '', 
    printFilter: ''
  }
  
  // componentDidMount() {
  //   console.log('component mounted!')
  //   const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
  //   const key = 'AIzaSyCQyLInHW1z1Ev9qqwwdG0MBqxdFcD542w';
  //   const formattedSearchUrl = this.formatQuery( baseUrl, key )
  //   fetch( formattedSearchUrl )
  //     .then(response => {
  //       if(!response.ok) {
  //         throw new Error('Something went wrong on the network. Please try again later.');
  //       }
  //       return response;
  //     })
  //     .then(response => response.json())
  //     .then(bookResultsObj => {
  //       console.log('Good response From Google Books API: ', bookResultsObj)
  //       this.setState({
  //         bookResults: bookResultsObj,
  //         error: null
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error: error.message
  //       });
  //     });
  // }

  handleSearchSubmit = ( searchSubmitEvent, searchInput ) => {
    searchSubmitEvent.preventDefault();
    console.log('handleSearchSubmit just got this submission: ', searchInput);
    console.log('searchInput was this --> ', this.state.searchQuery);
    this.setState({
      searchQuery: searchInput
    });
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    const key = 'AIzaSyCQyLInHW1z1Ev9qqwwdG0MBqxdFcD542w';
    const formattedSearchUrl = this.formatQuery( baseUrl, searchInput, key );
    fetch( formattedSearchUrl )
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

  formatQuery = ( baseUrl, searchInput, key ) => {
    // e.g. https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey
    const { bookFilter, printFilter } = this.state;
    let formattedQuery;
    if ( searchInput !== '') {
      formattedQuery = '?q=' + searchInput; 
    }
    if ( bookFilter !== '') {
      formattedQuery = formattedQuery + '&filter=' + bookFilter;
    }
    if ( printFilter !== '') {
      formattedQuery = formattedQuery + '&bookType=' + printFilter;
    }
    const formattedUrl  = baseUrl + formattedQuery + '&key=' + key; 
    console.log('formatted URL: ', formattedUrl);   
    return formattedUrl;    
  }

  handlePrintType = ( printTypeFormEvent ) => {
    if ( printTypeFormEvent ) {
      console.log(printTypeFormEvent);
      this.setState({
          printFilter: printTypeFormEvent
      });
    } 
  }

  handleBookType = ( bookTypeFormEvent ) => {
    if ( bookTypeFormEvent ) {
      console.log(bookTypeFormEvent);
      this.setState({
          bookFilter: bookTypeFormEvent
      });
    } 
  }

  render() {
    const { bookResults } = this.state;
    console.log('Re-rendering app component')
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
