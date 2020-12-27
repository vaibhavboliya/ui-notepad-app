import React, { Component } from 'react'
import './Components.css';
import {Line} from 'react-chartjs-2'

const state = {
    labels : ["27", "28", "1", "2", "3", "4"],
    datasets:[{
      borderColor:'green',

     backgroundColor:"rgba(0,255,17,0.19)",
        data: [100, 200, 120, 200, 300,250]
    }]
}
class MonthStats extends Component {
    render () {
        // var myChart = new Chart(ctx, {
        //     type: 'line',
        //     data: {
        //         labels: ["27", "28", "1", "2", "3", "4"],
        //         datasets: [{
        //           borderColor:'green',
        //           label:"feb-March",
        //          backgroundColor:"rgba(0,255,17,0.19)",
        //             data: [100, 200, 120, 200, 380,300]
        //         }]
        //     },
        //     options: {
        //         scales: {
        //           xAxes: [{
        //             gridLines: {
        //                 display:false
        //             }
        //         }],
        //             yAxes: [{
                  
        //                 ticks: {
        //                     beginAtZero:true
        //                 },
        //               scaleLabel: {
        //                   display: true,
        //                   fontColor: 'yellow'
        //                 },
        //             }]
        //         },
        //       defaultFontColor: 'green',
        //       showLines:true,
        //     }
        // });
        return (
            <div className="MonthStats">
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
                                    gridLines: {
                                        display:false
                                    }
                                }],
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero:true
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
        )
    }
}

export default MonthStats
