import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Login1 from "./Login1";
import { Layout } from './Layout';
//import { useHistory } from "react-router-dom";
import Employee from './Components/Employee';

function Dashboard() {

    const history = useHistory();
    const user1 = JSON.parse(localStorage.getItem('myData'));
    //console.warn(user)

    function logout() {

        localStorage.clear();
        var a = localStorage.getItem('myData');
        console.warn(a)
        history.push('/login')


    }

    const [user, setuser] = useState({ Username: '', Password: '' });
    useEffect(() => {
        var a = localStorage.getItem('myData');
        var b = JSON.parse(a);
        console.log(b.Username);
        setuser(b)
        console.log(user.USERNAME)

    }, []);

    return (
        <>
            <div class="effect">
            <Router>

                <Layout>
                    <Switch>
                        {/* <Route exact path={"/"} component={Employee} /> */}
                        <Route path="/fetch-purOrdEntry" component={Employee}/>


                        <Route />
                    </Switch>
                </Layout>
                

            </Router>
            </div>
            
            

        </>

    )


}

export default Dashboard
