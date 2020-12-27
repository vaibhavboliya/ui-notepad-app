import React, { Component } from 'react'
import {MdSearch} from 'react-icons/md'
import './Components.css';

class Searchbar extends Component {
    render () {
        return (
            <div className="search-div">
                <MdSearch className="icon" />
                <input className="search-input" type="text" placeholder="Search" />
            </div>
        )
    }
}

export default Searchbar