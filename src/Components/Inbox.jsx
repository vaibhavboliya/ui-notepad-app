import React, { Component } from 'react'
import './Components.css';

class Inbox extends Component {
    render () {
        return (
            <div className="Inbox">

                <span style={{"color":'#929292','lineHeight':'24px','fontSize':'24px' }}>Inbox</span>
                <span style={{"fontSize": '40px',"lineHeight": "48px","color": '#593636'}}>23</span>
            </div>
        )
    }
}

export default Inbox