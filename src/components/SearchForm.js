import React, { Component } from 'react'

class SearchForm extends Component {
    constructor(props) {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        let searchTerm = this.state.searchTerm.trim()

        if (!searchTerm) { 
            return
        }
        this.props.onSearch(searchTerm)
        this.setState({ searchTerm: '' })
    }

    render() {
        return (
            <div className="search-box-container" >
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input className="search-box-text" type="text" placeholder="Search for something..." onChange={this.handleInputChange.bind(this)} value={this.state.searchTerm} />
                </form>
            </div>
        )
    }
}

export default SearchForm