import React, { Component } from 'react';
import './Components.css';
import {Line} from 'react-chartjs-2'

const state = {
    labels : ["27", "28", "1", "2", "3", "4"],
    datasets:[{
      borderColor:'#0000FF',

     backgroundColor:"rgba(0,0,0,0.0)",
        data: [100, 300, 150, 400, 200,500]
    }]}
class ThisMonthStats extends Component {
    render() {
        return (
            <div className="ThisMonthStats">
                <span className='monthTitle'>This Month <hr/></span>
               
                <div style={{'display':'flex','justifyContent':'space-evenly'}}>
                    <span className="monthValue">+7.8%</span>
                    <div style={{'width':'40%'}}>
                    <Line
                data={state}
                options={
                    {
                        elements: {
                            point:{
                                radius: 0
                            }
                        },legend: {
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
                                    ticks: {
                                        display: false
                                    },
                                    gridLines: {
                                        display:false
                                    }
                                }],
                                    yAxes: [{
                                        gridLines: {
                                            display:false
                                        },
                                        ticks: {
                                            display: false
                                        },
                                      scaleLabel: {
                                          display: false,
                                          fontColor: 'yellow'
                                        },
                                    }]
                                },
                              
                              showLines:true,
                            }
                }
                
                />
                </div>
                </div>
            </div>
        );
    }
}

export default ThisMonthStats;
