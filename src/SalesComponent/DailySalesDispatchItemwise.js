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
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Checkbox } from 'material-ui';


export class DailyItemwiseSalesQtyWgt extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            employeedata: [],
            Data: [],
            Data1: [],
            Itcode: '',
            startdate: new Date(),
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

        const data = { Itcode: this.state.Itcode, startdate: this.state.startdate, enddate: this.state.enddate };



        //e.preventDefault();
        axios.post('https://webapi.local/Api/Misrct_new1/DailyItemWiseSalesQuantityWgt', data).then(response => {
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

        const data = { Itcode: this.state.Itcode, startdate: this.state.startdate, enddate: this.state.enddate };



        e.preventDefault();
        axios.post('https://webapi.local/Api/Misrct_new1/DailyItemWiseSalesQuantityWgt', data).then(response => {
            console.log(response.data);
            this.setState({
                employeedata: response.data
            });
        });

        axios.post(`https://webapi.local/Api/Misrct_new1/DailyItemWiseSalesQuantityWgt`, data)
            .then(response => {
                console.log(response);
                const por = response.data;
                let qty = [];
                let wgt = [];
                let achead = [];
                por.forEach(record => {
                    qty.push(record.Quantity);
                    wgt.push(record.Wgt);
                    achead.push(record.Itemcode);
                });
                this.setState({
                    Data: {
                        labels: achead,
                        datasets: [
                            {
                                label: 'Quantity Summary',
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
                                    "#00FFFF"




                                ]
                            },
                            {
                                label: 'Weight Summary',
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
                <h3 className="m-3 d-flex justify-content-center">Daily Sales Dispatch Itemwise Quantity/Weight </h3>
                <br></br>
                <form >
                    <div className="row hdr" >


                        <div className="col-sm-2 form-group">
                            <input type="text" selected={this.state.Itcode}
                                onChange={this.Itcode}
                                placeholder="Item Code"
                            ></input>
                        </div>

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
                            <button type="submit" className="btn btn-success" onClick={this.onsubmit}>Search</button>
                        </div>




                    </div>



                </form>
                <br></br>
                <form>
                    <div className="row hdr" >
                        <div className="col-sm-12 form-group">
                            <Bar data={this.state.Data}
                                width={800} height={300}


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
                            {/*  <Doughnut 
                        data={this.state.Data}
                        width={600} height={300}
                        options={{ maintainAspectRatio: false }} /> */}
                        </div>

                        
                    </div>
                </form>


                <Table class="center" stiped bordered hover size="sm">
                    <thead >
                        <tr className="align1">
                            <th>ItemCode</th>
                            <th>ItemName</th>
                            <th >Date</th>
                            <th >Quantity</th>
                            <th >Weight</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employeedata.map((p, index) => {
                                return <tr key={index}>
                                    <th>{p.Itemcode}</th>
                                    <th>{p.Itemname}</th>
                                    <th>{p.Date}</th>
                                    <th>{p.Quantity}</th>
                                    <th>{p.Wgt}</th>

                                </tr>
                            })
                        }
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default DailyItemwiseSalesQtyWgt;