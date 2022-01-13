import React, { Component } from 'react';
// . = current directory
// .. = parent directory
// code . = VSC current directory
import MovieInfo from './components/MovieInfo'

class App extends Component {

  state = {
    baseURL: 'http://www.omdbapi.com/?',
    apiKey: 'apikey=' + '3da9fc30',
    query: '&t=',
    movieTitle: '',
    searchURL: '',
    movieInfo: {}
  }

  componentDidMount() {
    console.log('component did mount');
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.apiKey + this.state.query + this.state.movieTitle
    }, () => {
      // fetch request
      // this syntax default is a GET HTTP request
      fetch(this.state.searchURL) // returns a Promise
        // response paramater will represent the Promise we get back from our fetch()
        // thennables
        .then(response => response.json()) // returns second Promise
        .then(data => this.setState({movieInfo: data}))
        .catch(error => console.error(error))
    })
  }

  render() {
    return (
      // React.Fragment
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="movieTitle">Movie Title:</label>
          <input 
            type="text" 
            id='movieTitle' 
            onChange={this.handleChange} 
            value={this.state.movieTitle}
          />
          <button type="submit">Submit</button>
        </form>
        <a href={this.state.searchURL}>{this.state.searchURL}</a>

        <MovieInfo movieInfo={this.state.movieInfo} />
      </>
    );
  }
}

export default App;

