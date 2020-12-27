import React, { Component } from 'react'
import './Components.css';
class Notification extends Component {
    render () {
        const NotificationTile =({color})=>( <div style={{'display':'flex','justifyContent':'center','alignContent':'center'}}>
            <div style={{'width':'20%'}}> <div style={{'height':'50%','alignSelf':'center' ,'background':color,'margin':'20px 10px'}}></div></div>
            <div style={{'width':'80%'}}>
                <p style={{'fontSize': '15px','lineHeight': '18px','color': '#484848'}}>Admin</p>
                <p style={{'fontSize': '12px','lineHeight': '14px','color': '#756F6F'}}>Your faculty uploaded the syllabus.</p>
                <p style={{'fontSize': '7px','lineHeight': '8px','color': '#756F6F'}} >3 minutes ago</p>
            </div>
        </div>
        )
        return (
            <div className="Notification">
                <div style={{'display':'flex','justifyContent':'center' ,'height':'70px','marginBottom':'15px'}}>
                    <div style={{'paddingTop':'20px','color': '#494949','textAlign':'center','lineHeight':'24px', 'fontSize':'20px', 'width':'50%','borderRadius': '15px 15px 0px 0px'}}>Notification</div>
                    <div style={{'paddingTop':'20px','background': '#FAFAFA','textAlign':'center','lineHeight':'24px', 'color': '#B0B0B0','fontSize':'20px', 'width':'50%','borderRadius': '0px 15px 0px 0px'}}>Event</div>
                </div>
                <div style={{'background': '#FFFFFF',
                            'boxShadow': 'inset 0px 0px 20px rgba(0, 0, 0, 0.05)',
                            'borderRadius': '15px','height':'80%', 'margin':'0 10px','overflow':'hidden'}}>
                                <NotificationTile color='#FFD9D9'/>
                                <NotificationTile color='#D9FFE1'/>
                                <NotificationTile color='#BA99FF'/>
                                <NotificationTile color='#F5E764'/>
                                

                </div>
            </div>
        )
    }
}

export default Notification