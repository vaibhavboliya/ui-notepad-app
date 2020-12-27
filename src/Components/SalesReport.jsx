import React, { Component } from 'react';
import './Components.css';
import {Line} from 'react-chartjs-2'


class SalesReport extends Component {
    render() {
        const state = {
            labels : ["1", "2", "3", "4", "5", "6",'7','8','9','10','11','12','13','14'],
            datasets:[{
              borderColor:'#FF6C40',
              
             backgroundColor:"rgba(0,0,0,0.0)",
                data: [0, 6, 8,12,9,9,7,6,5,10, 12,16,18,19]
            },{
                borderColor:'#826AF9',
                
               backgroundColor:"rgba(0,0,0,0.0)",
               data: [0, 5, 4,5,10,8,7,4,6,12, 10,12,16,18]
              },{
                borderColor:'#FFE700',
                
               backgroundColor:"rgba(0,0,0,0.0)",
               data: [0, 3, 2,8,7,6,10,8,12,6,8,10,12,14]
              }]
        }
        return (
            <div className="SalesReport">
                <div style={{'display':'flex','flexDirection':'column','width':'70%' ,'height':'85%'}}>
                <div>
                <span style={{'color': '#593636','marginLeft':'10px','fontSize':'30px','lineHeight':'36px'}}>Sales Report</span> 
                <span style={{'marginLeft':'10px','fontSize':'24px','color':'#e5e5e5'}}> September 2020</span>
                </div>
                <div style={{'width':'90%','alignSelf':'center', 'height':'80%', 'marginTop':'10px'}}>
                <Line
                data={state}
                options={
                    {
                        elements: {
                            point:{
                                radius: 0
                            }
                        },hover: {
                            intersect: false
                          },
                        legend: {
                            display: false,
                        },
                        tooltips: {
                            callbacks: {
                                label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`, 
                                title: () => null,
                            }
                        },
                                scales: {
                                  xAxes: [{
                                    gridLines: {
                                        display:true
                                    },ticks: {
                                        display: false
                                    }
                                }],
                                    yAxes: [{
                                      scaleLabel: {
                                          display: true,
                                          fontColor: 'yellow'
                                        },ticks: {
                                            display: false
                                        }
                                    }]
                                },
                              defaultFontColor: 'green',
                              showLines:true,
                            }
                }
                
                />
                
                </div>

                </div>
                
            <div className='statsTrack' >
                <div className='statsDate'>

                <span >17 Sep</span>
                </div>
                <div className='yellowbox'>
                    <span style={{'color':'#593636','fontWeight':'500', 'fontSize':'20px','lineHeight':'24px'}}>$1,204.33</span>
                    <span style={{'color':'#593636','fontWeight':'400', 'fontSize':'15px','lineHeight':'18px'}}>Revenue</span>
                </div>
                <div className='greenbox'>
                <span style={{'color':'#593636','fontWeight':'500', 'fontSize':'20px','lineHeight':'24px'}}>33</span>
                    <span style={{'color':'#593636','fontWeight':'400', 'fontSize':'15px','lineHeight':'18px'}}>Quotations</span>
                </div>
                <div></div>
            </div>
            </div>
        );
    }
}

export default SalesReport;
