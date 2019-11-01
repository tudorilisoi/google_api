import React, { Component } from 'react';
import './GoogleApi.css'
import { throwStatement } from '@babel/types';

class GoogleApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      PrintType: [],
      BookType: [],
      items: [],

    }
  }
  render() {
    return (
      <>
        {this.state.items.map(i => { return (<li>{i.volumeInfo.title}</li>) })}
      </>
    )
  }
  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
    const options = {
      method: 'GET',
      headers: {
        "APIKey": 'AIzaSyDjWWRGP6jDjn_ZVzS4W8ISZ0h30afpkaw',
        'Content-Type': "application/json"
      },
      items: [],

    }

    fetch(url, options)
      .then(res => {

        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(`GOT:`, data)
        this.setState({
          items: data.items,
          // search: "",
          // PrintType: [],
          // BookType: [],
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }
}

export default GoogleApi
