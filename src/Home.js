//import React, { Component } from 'react';

/* export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
              
               
            </div>
        );
    }
} */


import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Login1 from "./Login1";
import { NavMenu } from './Navigation';
import { Layout } from './Layout';
import Employee from './Components/Employee';
//import { useHistory } from "react-router-dom";

function Home() {

    const history = useHistory();
    const user1 = JSON.parse(localStorage.getItem('myData'));
    //console.warn(user)

    function logout() {

        localStorage.clear();
        var a = localStorage.getItem('myData');
        console.warn(a)
        history.push('/login')


    }

   /*  const [user, setuser] = useState({ Username: '', Password: '' });
    useEffect(() => {
        var a = localStorage.getItem('myData');
        var b = JSON.parse(a);
        console.log(b.Username);
        setuser(b)
        console.log(user.USERNAME)

    }, []); */
    
    return (
        <Router>

            <Layout>
                <Switch>
                    <Route exact path={"/"} component={Employee} />
                    {/* <Route path="/fetch-purOrdEntry" component={Employee}/> */}


                    <Route />
                </Switch>
            </Layout>

        </Router>

    )
    
   

}




export default Home
