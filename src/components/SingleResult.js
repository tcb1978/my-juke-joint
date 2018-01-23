import React, { Component } from 'react'

class SingleResult extends Component {
    render() {
        return (
            <a href={this.props.url} className="single-result" target="_blank">
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </div>
            </a>
        )
    }
}

export default SingleResult