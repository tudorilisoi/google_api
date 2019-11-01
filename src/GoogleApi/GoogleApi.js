import React, {Component} from 'react';
import './GoogleApi.css'

class GoogleApi extends Component{
    Constructor(props) {
        super(props)
        this.state = {
            search: "",
            PrintType: [],
            BookType: []

        }
    }
    componentDidMount() {
        const url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms'
        const options = {
            method: 'GET',
            headers: {
                "APIKey": 'AIzaSyDjWWRGP6jDjn_ZVzS4W8ISZ0h30afpkaw',
                'Content-Type': "application/json"
            }

        }

    fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        search: "",
        PrintType: [],
        BookType: [],
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

