import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../freelancer/Sidebar'
import Profile from '../freelancer/Profile'
import Feedbacks from '../freelancer/feedback/Feedbacks'
import Projects from '../freelancer/Home/Projects'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import './freelancer.css'
import Topbar from '../same/Topbar'
export default function Freelancer() {
 
const user = useSelector(state => state.auth.user)

    return (
        <div>
            <Topbar/>
        <div className='clientContainer'>
            <div className='right'>
            <Sidebar/>
            </div><div  className='center'>
            <Switch>
                <Route exact path="/freelancer/"> 
                   <Projects/>
                </Route>

                <Route  path="/freelancer/profile">
                    <Profile/>
                </Route>
                <Route  Path="/freelancer/Feedbacks">
                    <Feedbacks/>
                </Route>
            </Switch>
            </div>
        </div>
        </div>
    )
}
