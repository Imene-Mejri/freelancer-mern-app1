import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from './components/views/Home'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAuthUser } from './redux/action/auth-action';
import Client from './components/views/Client';
import Admin from './components/views/Admin';
import Freelancer from './components/views/Freelancer';
import PrivateRoute from './components/routes/privateRoute';




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
 dispatch(getAuthUser())
  }, [])
 
 
 

  return (
    <div className="App">
        <Router> 
          <Route exact path='/' component={Home} />
          <PrivateRoute  path='/client'    component={Client}/>
          <PrivateRoute  path='/admin' component={Admin}  />
          <PrivateRoute  path='/freelancer' component={Freelancer}  /> 
        </Router>
    </div>
  );
}
export default App;
