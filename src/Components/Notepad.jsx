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
                <div style={{'width':'90%','display':'flex','flexWrap':'wrap','overflow':'auto'}}>

                
                <span className="NotepadTitle">Notepad</span>

                {notepadTile}
                {notepadTile}
                {notepadTile}
                {notepadTile}
                </div>
                <div style={{'width':'10%','height':'100%','display':'flex','flexDirection':'column-reverse'}}>
                <Link to="/addnote"><MdAddCircle className='floatingButton' /></Link>
                </div>
            </div>
        )
    }
}

export default Notepad
