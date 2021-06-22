import React, { Component } from 'react'
import { Table, Form, Button } from "react-bootstrap";
import { Input } from 'reactstrap';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Table.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Bar } from 'react-chartjs-2';
import { Checkbox } from 'material-ui';


export class InventoryGRN extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            employeedata: [],
            Data: [],
        }
    }
    getEmployeeList() {

        //const data = { startdate: this.state.startdate, enddate: this.state.enddate, accode: this.state.accode };
        //e.preventDefault();
        axios.post('https://webapi.local/Api/Misrct_new1/InventoryGRN').then(response => {
            console.log(response.data);
            this.setState({
                employeedata: response.data
            });
        });

        axios.post(`https://webapi.local/Api/Misrct_new1/InventoryGRN`)
            .then(response => {
                console.log(response);
                const por = response.data;
                let qty = [];
                let achead = [];
                por.forEach(record => {
                    qty.push(record.Count);
                    achead.push(record.Flag);
                });
                this.setState({
                    Data: {
                        labels: achead,
                        datasets: [
                            {
                                label: 'Flag Count',
                                data: qty,
                                backgroundColor: [

                                    "#3cb371",
                                    "#0000FF",
                                    "#9966FF",
                                    "#4C4CFF",
                                    "#00FFFF",
                                    "#f990a7",
                                    "#aad2ed",
                                    "#FF00FF",
                                    "Blue",
                                    "Red",
                                    "#3cb371",
                                    "#0000FF",
                                    "#9966FF",
                                    "#4C4CFF",
                                    "#00FFFF",
                                    "#f990a7",
                                    "#aad2ed",
                                    "#FF00FF",
                                    "Blue",
                                    "Red"


                                ]
                            }
                        ]
                    }
                });
            })


    }

    componentDidMount() {
        this.getEmployeeList();
    }
    render() {
        const { employeedata } = this.state;
        return (
            <div className="body">
                <h3 className="m-3 d-flex justify-content-center">Entries - Inventory GRN</h3>
                <br></br>

                <div>
                    <Bar data={this.state.Data}
                        width={600} height={300}


                        options={{

                            responsive: true,
                            maintainAspectRatio: false,
                            barThickness: 1,

                            scales: {
                                xAxes: [
                                    {
                                        barPercentage: 0.1,

                                    }
                                ]
                            }
                        }}

                    />
                </div><br></br><br></br>


                <table align="center" width="500" border="3" class="center" stiped bordered hover size="sm">
                    <thead >
                        <tr className="align1">
                            <th>Flag</th>
                            <th>Count</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employeedata.map((p, index) => {
                                return <tr key={index}>
                                    <th>{p.Flag}</th>
                                    <th>{p.Count}</th>

                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default InventoryGRN;