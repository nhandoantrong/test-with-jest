import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        console.log(this.props);
        const data = this.props.location.data? this.props.location.data : null
        return (
            <div>
                this is {this.props.match.params.id} url
                <p>this is {data && data.name? data.name : ""}</p>
            </div>
        )
    }
}
