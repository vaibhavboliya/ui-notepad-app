import React, { Component } from 'react';
import { MdDashboard,MdSettings,MdSchool } from "react-icons/md";
import './SideNavbar.css';

class SideNavbar extends Component {
    render () {
        return (
            <div className="SideNavbar">
                <div className="navElement active">
                <MdDashboard className="nav-icon"/>
                    
                <span >  Dashboard</span>
                </div>
                <div className="navElement ">
                <MdSchool className="nav-icon"/>
                    
                <span >  Lorem</span>
                </div>
                <div className="navElement ">
                <MdSettings className="nav-icon"/>
                    
                <span >  Ipsum</span>
                </div>
                {/* <span className="navElement"> <MdSchool /> Lorem</span>
                <span className="navElement"><MdSettings /> Ipsum</span> */}


                
            </div>
        )
    }
}

export default SideNavbar