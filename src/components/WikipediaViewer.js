import React, { Component } from 'react'
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
        axios.get(`/wiki/${searchTerm}`).then(response => {
            console.log(response);
            this.setState({
                results : response
            })
        })
    }

    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let searchTerm = this.state.searchTerm.trim()

        if (!searchTerm) {
            return;
        }
        this.setState({ 
            searchTerm: searchTerm 
        })
    }

    render() {
        return(
            <div className="search-box-container" >
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input className="search-box-text" type="text" placeholder="Search for something..." onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm} />
                </form>
                <div>{this.state.searchTerm}</div>
                <div>{this.state.results}</div>
            </div>
        )
    }
}

export default WikipediaViewer