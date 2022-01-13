import React, { Component } from 'react';

class MovieInfo extends Component {

    componentDidMount() {
        console.log('movieinfo mounted');
    }

    componentWillUnmount() {
        console.log('movieinfo unmounted');
    }

    render() {
        // console.log('MovieInfo', this.props)
        return (
            <div>
                <h1>Title: {this.props.movieInfo.Title}</h1>
                <h2>Year: {this.props.movieInfo.Year}</h2>
                <img src={this.props.movieInfo.Poster} alt="movie poster" />
                <h3>Genre: {this.props.movieInfo.Genre}</h3>
                <h4>Plot: {this.props.movieInfo.Plot}</h4>
            </div>
        );
    }
}

export default MovieInfo;
