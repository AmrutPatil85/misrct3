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


export class ItemwiseProductionRejecction extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            employeedata: [],
            Data: [],
            Data1: [],
            Itcode: '',
            startdate: new Date('01-04-2020'),
            enddate: new Date(),

        }



    }

    Itcode = (e) => {
        this.setState({
            Itcode: e.target.value
        });
    };
    Changedate = (e) => {
        this.setState({
            startdate: e
        });
    };
    enddate = (e) => {
        this.setState({
            enddate: e
        });
    };





    getEmployeeList() {

        const data = { Itcode: this.state.Itcode, startdate: this.state.startdate, enddate: this.state.enddate  };



        //e.preventDefault();
        axios.post('https://localhost:44345/Api/Misrct_new1/ItemWiseProductionVsRejectionQuantitySummary', data).then(response => {
            console.log(response.data);
            this.setState({
                employeedata: response.data
            });
        });
    }

    componentDidMount() {
        this.getEmployeeList();
    }
    onsubmit = (e) => {
        //debugger;

        const data = { Itcode: this.state.Itcode, startdate: this.state.startdate, enddate: this.state.enddate  };



        e.preventDefault();
        axios.post('https://localhost:44345/Api/Misrct_new1/ItemWiseProductionVsRejectionQuantitySummary', data).then(response => {
            console.log(response.data);
            this.setState({
                employeedata: response.data
            });
        });

        axios.post(`https://localhost:44345/Api/Misrct_new1/ItemWiseProductionVsRejectionQuantitySummary`, data)
            .then(response => {
                console.log(response);
                const por = response.data;
                let qty = [];
                let wgt = [];
                let achead = [];
                por.forEach(record => {
                    qty.push(record.MOULDQTY);
                    wgt.push(record.POURQTY);
                    achead.push(record.Itemcode);
                });
                this.setState({
                    Data: {
                        labels: achead,
                        datasets: [
                            {
                                label: 'Moulding Summary',
                                data: qty,
                                backgroundColor: [
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",
                                    "#00FFFF",



                                ]

                            }, {
                                label: 'Pouring Summary',
                                data: wgt,
                                backgroundColor: [
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",
                                    "#FF00FF",


                                ]

                            }
                        ]
                    }
                });
            })



    }

    render() {
        const { employeedata } = this.state;
        return (
            <div className="body">
                <h3 className="m-3 d-flex justify-content-center">Itemwise Production VS Rejection Quantity Summary</h3>
                <br></br>
                <form >
                    <div className="row hdr" >

                        <div className="col-sm-2 form-group">
                            <DatePicker className="form-control"
                                selected={this.state.startdate} placeholderText="Select Date" showPopperArrow={false}
                                onChange={this.Changedate}

                            />
                        </div>
                        <div className="col-sm-2 form-group">
                            <DatePicker className="form-control"
                                selected={this.state.enddate} placeholderText="Select Date" showPopperArrow={false}
                                onChange={this.enddate}
                            />

                        </div>


                        <div className="col-sm-2 form-group">
                            <input type="text" selected={this.state.Itcode}
                                onChange={this.Itcode}
                                placeholder="Item Code"
                            ></input>
                        </div>




                        <div className="col-sm-2 form-group">
                            <button type="submit" className="btn btn-success" onClick={this.onsubmit}>Search</button>
                        </div>




                    </div>



                </form>
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
                                        barThickness: 40,
                                        barPercentage: 0.5,
                                        categoryPercentage: 0,
                                    }
                                ]
                            }
                        }}

                    />
                </div><br></br><br></br>


                <Table class="center" stiped bordered hover size="sm">
                    <thead >
                        <tr className="align1">
                            <th>Itemcode</th>
                            <th>Itemname</th>
                            <th>Production Quantity</th>
                            <th>Rejection Quantity</th>





                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employeedata.map((p, index) => {
                                return <tr key={index}>
                                    <th>{p.Itemcode}</th>
                                    <th>{p.Itemname}</th>
                                    <th>{p.MOULDQTY}</th>
                                    <th>{p.POURQTY}</th>
                                    



                                </tr>
                            })
                        }
                    </tbody>
                </Table>



            </div>
        )
    }
}

export default ItemwiseProductionRejecction;