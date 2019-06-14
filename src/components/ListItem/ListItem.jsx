import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

 class ListItem extends Component {
    render() {
        return (
            <div style={{ padding: "15px", border: "2px black solid", width: "20%", margin: "10px" }}>
                <p>id: {this.props.item.id}</p>
                <p>name: {this.props.item.name}</p>
                <p>description: {this.props.item.desc}</p>
                <button style={{
                    padding: "10px 5px",
                    backgroundColor: "unset",
                    border: "2px solid black",
                    borderRadius: "5px", cursor: "pointer"
                }}
                    onClick={()=>this.props.deleteItem(this.props.item.id)}
                >Delete</button>
                <Link style={{
                    padding: "10px 5px",
                    backgroundColor: "unset",
                    border: "2px solid blue",
                    borderRadius: "5px", cursor: "pointer",
                    color:"blue",
                    marginLeft:"10px",
                    textDecoration:"none"
                }}
                    to={{pathname:`/detail/${this.props.item.id}`, data :this.props.item}}
                >Info</Link>
            </div>
        )
    }
}

ListItem.propTypes={
    item: PropTypes.shape({
        id:PropTypes.string,
        name:PropTypes.string,
        desc:PropTypes.string,

    })
}

export default ListItem