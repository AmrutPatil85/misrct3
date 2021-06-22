import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";
import axios from 'axios';
import Dashboard from "./Dashboard";
function Login1(props) {
    const [employee, setemployee] = useState({ Username: '', Password: '' });
    const apiUrl = "http://webapi.local/api/employee/Login";
    const Login = (e) => {
        e.preventDefault();
        //debugger;
        const data = { Username: employee.Username, Password: employee.Password };
        axios.post(apiUrl, data)
            .then((result) => {
                //debugger;
                console.log(result.data);
                const serializedState = JSON.stringify(result.data.UserDetails);
                var a = localStorage.setItem('myData', serializedState);
                console.log("A:", a)
                const user = result.data.UserDetails;
                console.log(result.data.message);
                if (result.data.status == '200')
                    props.history.push('/Dashboard')
                else
                    alert('Invalid User');
            })
    };



    const onChange = (e) => {
        e.persist();
        // debugger;
        setemployee({ ...employee, [e.target.name]: e.target.value });
    }
    return (
        
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-8 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">

                            <div class="row">
                                {/* <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                                <div class="col-lg-12">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4 ">Riddhi Casting Pvt Ltd</h1>
                                            <h1 class="h4 text-gray-900 mb-4 ">Welcome Back!</h1>
                                        </div>
                                        <form onSubmit={Login} class="user">
                                            <div class="form-group" >
                                                <input type="text" class="form-control" value={employee.Username} onChange={onChange} name="Username" id="Email" placeholder="Enter Username" />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" value={employee.Password} onChange={onChange} name="Password" id="DepPasswordartment" placeholder="Password" />
                                            </div>

                                            <div class="text-center">
                                                <button type="submit" className="btn btn-info mb-1 " block><span>Login</span></button>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="effect">
                <Router>

                    
                        <Switch>
                            {/* <Route exact path={"/"} component={Employee} /> */}
                            <Route path='/Dashboard' component={Dashboard}/>

                           
                        </Switch>


                </Router>
            </div>
        </div>
        
      
            
            
            

      
    )
}

export default Login1



