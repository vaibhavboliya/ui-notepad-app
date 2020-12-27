import React, { Component } from 'react';
import './Content.css'
import Searchbar  from "./Components/Searchbar";
import Notification  from "./Components/Notification";
import SalesReport  from "./Components/SalesReport";
import Notepad  from "./Components/Notepad";
import Inbox  from "./Components/Inbox";
import MonthStats  from "./Components/MonthStats";
import LastMonthStats  from "./Components/LastMonthStats";
import ThisMonthStats  from "./Components/ThisMonthStats";


class Content extends Component {
    render() {
        return (
            <div className="main">
                <div className="center-container">
                <Searchbar />
                    <SalesReport />
                    <Notepad />
                    <div className="stats-container">
                        <MonthStats />
                        <Inbox />
                    </div>
                    <div className="Months-container">
                        <ThisMonthStats />
                        <LastMonthStats />

                    </div>
                       

                </div>
                <Notification />
            </div>
        );
    }
}

export default Content;
