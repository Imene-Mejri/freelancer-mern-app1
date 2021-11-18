import React from 'react'
import Clients from '../admin/clients/Clients'
import Freelancers from '../admin/freelancers/Freelancers'
import Projects from '../admin/project/Projects'
import Sidebar from '../admin/SideBar'
import Topbar from '../same/Topbar'
import { useSelector } from 'react-redux' 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import "./admin.css"
function Admin() {
    const user = useSelector(state => state.auth.user)
    return (
        <div>
            <Topbar/>
            <div className='AdminContainer'>
                <div className='Aright'>
                <Sidebar/>
                </div><div  className='Acenter'>
                <Switch>
                    <Route exact path="/admin/">
                        <Freelancers/>
                    </Route>
                    <Route path="/admin/clientsList">
                        <Clients/>
                    </Route>
                    <Route path="/admin/projectsList">
                        <Projects/>
                    </Route>
                </Switch>
                </div>
            </div>
        </div>
    )
}

export default Admin
