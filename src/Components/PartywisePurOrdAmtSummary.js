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


export class Partywise extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            employeedata: [],
            Data: [],
            Data1: [],
            accode: '',

        }



    }

    accode = (e) => {
        this.setState({
            accode: e.target.value
        });
    };


  

    getEmployeeList() {
         
        const data = { accode: this.state.accode };



        //e.preventDefault();
        axios.post('https://webapi.local/Api/Misrct_new1/PartyWisePurchaseOrderAmount', data).then(response => {
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
       
        const data = { accode: this.state.accode };



        e.preventDefault();
        axios.post('https://webapi.local/Api/Misrct_new1/PartyWisePurchaseOrderAmount', data).then(response => {
            console.log(response.data);
            this.setState({
                employeedata: response.data
            });
        });

        axios.post(`https://webapi.local/Api/Misrct_new1/PartyWisePurchaseOrderAmount`, data)
            .then(response => {
                console.log(response);
                const por = response.data;
                let qty = [];
                let achead = [];
                por.forEach(record => {
                    qty.push(record.Amount);
                    achead.push(record.PartyCode);
                });
                this.setState({
                    Data: {
                        labels: achead,
                        datasets: [
                            {
                                label: 'Amount Summary',
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








    render() {
        const { employeedata } = this.state;
        return (
            <div className="body">
                <h3 className="m-3 d-flex justify-content-center">Partywise Purchase Amount</h3>
                <br></br>
                <form >
                    <div className="row hdr" >


                        <div className="col-sm-2 form-group">
                            <input type="text" selected={this.state.accode}
                                onChange={this.accode}
                                placeholder="Party Code"
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
                                        barPercentage: 0.2,
                                        title: { text: "Months" }
                                    }
                                ]
                            }
                        }}

                    />
                </div><br></br><br></br>


                <Table class="center" stiped bordered hover size="sm">
                    <thead >
                        <tr className="align1">
                            <th>PartyCode</th>
                            <th>PartyName</th>
                            <th >Amount</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employeedata.map((p, index) => {
                                return <tr key={index}>
                                    <th>{p.PartyCode}</th>
                                    <th>{p.PartyName}</th>
                                    <th>{p.Amount}</th>

                                </tr>
                            })
                        }
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default Partywise;