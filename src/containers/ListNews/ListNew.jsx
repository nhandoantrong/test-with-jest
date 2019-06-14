import React, { Component } from 'react'
import ListItem from '../../components/ListItem/ListItem';

export default class ListNew extends Component {

    constructor(props){
        super(props);
        this.state ={
            data:[{
                name:"item 01",
                id:1,
                desc:"This is 01 item"
            }, {
                name:"item 02",
                id:2,
                desc:"This is 02 item"
            }]
        }
    }

    deleteItem = (id) =>{
        this.setState({
            data : this.state.data.filter(item => item.id!==id)
        })
    }


    render() {
        const renderListItem = this.state.data.map(item => <ListItem deleteItem={this.deleteItem} item={item} key={item.id}/>)

        return (
            <div style={{display:"flex", flexWrap:"wrap", width:"100%"}}>
                {renderListItem}
            </div>
        )
    }
}
