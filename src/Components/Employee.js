import React, { Component } from 'react'
import { Table,Form,Button } from "react-bootstrap";
import { Input} from 'reactstrap';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Table.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BeatLoader } from "react-spinners";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Bar } from 'react-chartjs-2';
import { Checkbox } from 'material-ui';


export class Employee extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            employeedata: [] ,
            Data: [] ,
            Data1:[],
            startdate: new Date('01-04-2020'),
            enddate: new Date(),
            accode:'',
            itcode:'',
            check1:'',
            check2:'',
            loading: true,
            
        }
        
    }
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
    accode = (e) => {
        this.setState({
            accode: e.target.value
        });
    };
    itcode = (e) => {
        this.setState({
            itcode: e.target.value
        });
    };
    check1 = (e) => {
        this.setState({
            check1: e.target.value
        });
    };
    check2 = (e) => {
        this.setState({
            check2: e.target.value
        });
    };
   

    getEmployeeList() {
        
        axios.get('http://webapi.local/Api/Misrct_new1/showdata')
        .then(response => {
            console.log(response.data);
            this.setState({
                employeedata: response.data,
                

            });
        });  
    }

    componentDidMount() {
        this.getEmployeeList();
        
    }
    onsubmit = (e) => {
        //debugger;
        const data = { accode: this.state.accode, itcode: this.state.itcode, startdate: this.state.startdate, enddate: this.state.enddate };
       
        
        
        e.preventDefault();
        axios.post('http://webapi.local/Api/Misrct_new1/search', data).then(response => {
            console.log(response.data);
            this.setState({
                employeedata: response.data
                 
            });
        });

        
         
    } 

    onsubmit1 = (e) => {
        //debugger;
        const data = { accode: this.state.accode, itcode: this.state.itcode, startdate: this.state.startdate, enddate: this.state.enddate };
        e.preventDefault();
       
           axios.post(`http://webapi.local/Api/Misrct_new1/search`, data)
               .then(response => {
                   console.log(response);
                   const por = response.data;
                   let qty = [];
                   let achead = [];
                   por.forEach(record => {
                       qty.push(record.Qty);
                       achead.push(record.ACHEAD);
                   });
                   this.setState({
                       Data: {
                           labels: achead,

                           datasets: [
                               {
                                   label: 'Quantity',
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
    onsubmit2 = (e) => {
        //debugger;
        const data = { accode: this.state.accode, itcode: this.state.itcode, startdate: this.state.startdate, enddate: this.state.enddate };
        e.preventDefault();
        
        axios.post(`https://webapi.local/Api/Misrct_new1/search`, data)
            .then(response => {
                console.log(response);
                const por = response.data;
                let qty = [];
                let achead = [];
                por.forEach(record => {
                    qty.push(record.Amt);
                    achead.push(record.ACHEAD);
                });
                this.setState({
                    Data: {
                        labels: achead,

                        datasets: [
                            {
                                label: 'Amount',
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
                                ],
                                //borderColor: 'rgb(255, 99, 132)',
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
                <h3 className="m-3 d-flex justify-content-center">Purchase Order Register</h3>
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
                            <input type="text" selected={this.state.itcode}
                                onChange={this.itcode}
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
                        <div className="col-sm-3 form-group">
                            <button type="submit" className="btn btn-success" onClick={this.onsubmit}>Search</button>
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            <label>
                                <input type="button" className="btn btn-success" value="Quantity" selected={this.state.check1} onClick={this.onsubmit1} />
                            </label>
                            &nbsp;&nbsp;&nbsp;
                             &nbsp;&nbsp;&nbsp;
                            <label>
                                <input type="button" className="btn btn-success" value="Amount" selected={this.state.check2} onClick={this.onsubmit2} />
                            </label>
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
                                        barPercentage: 0.4
                                    }
                                ]
                            }
                            }}
                        
                    />
                </div>

                
                
                <Table class="center" stiped bordered hover size="sm">
                    
                    <thead >
                       
                        <tr className="align1">
                            <th>Entry No</th>
                            <th >Date</th>
                            <th >PO</th>
                            <th >Party </th>
                            <th >Qty</th>
                            <th >Rate</th>
                            <th>Amount</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employeedata.map((p,index) => {
                                return <tr key={index}>
                                    <th >{p.EntryNo}</th>
                                    <th>{p.TrDate}</th>
                                    <th>{p.TrDate}<br></br><br></br><strong>{p.ItCode}</strong></th>
                                    <th><strong>{p.ACCode}</strong>{'--' + p.ACHEAD}<br></br><br></br>{p.ITEMNAME}</th>
                                    <th>{p.Qty}</th>
                                    <th>{p.Rate}</th>
                                    <th>{p.Amt}</th>

                                </tr>
                            })
                        }
                    </tbody>
                </Table>

            </div>
        )
        
    }
}

export default Employee;