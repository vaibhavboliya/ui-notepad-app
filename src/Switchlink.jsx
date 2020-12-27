import React, { Component } from 'react';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import Content from './Content';
import AddNote from './AddNote';

const Switchlink =()=>( 
    <BrowserRouter>
    
<Switch>
<Route path="/addnote" component={AddNote}/>
<Route path="/" component={Content}/>
</Switch> 
</BrowserRouter>
)
export default Switchlink;
