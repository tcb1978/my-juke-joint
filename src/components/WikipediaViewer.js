import React, { Component } from 'react'
import SearchForm from './SearchForm'
import ResultList from './ResultList'
import axios from 'axios'
class WikipediaViewer extends Component {

    constructor() {
        super()
        this.state = {
            searchTerm: '',
            results: [
                '', [], [], []
            ]
        }
    }

    handleSearch(searchTerm) {
        alert('handleSearch')
        console.log(searchTerm);
        axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&format=json`).then(response => {
            this.setState({
                results: response.body
            })
        })
    }

    render() {
        return (
            <div className="wrapper">
                <SearchForm onSearch={this.handleSearch.bind(this)} />
                <ResultList results={this.state.results} />
            </div>
        )
    }
}

export default WikipediaViewer