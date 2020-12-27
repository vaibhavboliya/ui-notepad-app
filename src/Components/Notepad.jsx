import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {MdAddCircle} from 'react-icons/md';
import './Components.css';
class Notepad extends Component {
    render () {
        const notepadTile = <div className="notepadTile">
            <span>Title </span> <span style={{'opacity':'0.5'}}> Lorem ipsum dolor sit am...</span><br/>
           
        </div>
        return (
            <div className="Notepad">
                <span className="NotepadTitle">Notepad</span>

                {notepadTile}
                {notepadTile}
                {notepadTile}
                {notepadTile}
                
                
                <Link to="/addnote"><MdAddCircle className='floatingButton' /></Link>
            </div>
        )
    }
}

export default Notepad