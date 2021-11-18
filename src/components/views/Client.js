import React from 'react'
import { useSelector } from 'react-redux' 
import Invoices from '../client/invoices/Invoices'
import Profile from '../client/Profile'
import Sidebar from '../client/Sidebar'

import './client.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Freelancers from '../client/homeclient/Freelancers'
import Topbar from '../same/Topbar'

export default function Client() {
  
    const user = useSelector(state => state.auth.user)
    return (
        <div>
            <Topbar/>
        <div className='clientContainer'>
            <div className='right'>
            <Sidebar/>
            </div>
            <div  className='center'>
            <Switch>
                <Route exact path="/client/"> 
                   <Freelancers/>
                </Route>

                <Route  path="/client/Profile/:name">
                    <Profile/>
                </Route>
                
                <Route  Path="/client/innvoice">
                    <Invoices/>
                </Route>
                
            </Switch>
            </div>
        </div>
        </div>
    )
}

