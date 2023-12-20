import React from 'react'; 

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import './App.css';
import logo from './logo.svg';

import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
  <div>
    <Router>
      <div className= "container">
      <HeaderComponent />
    <div className="container">
      <Switch> 
                <Route path = "/" exact component = {ListEmployeeComponent} />
                <Route path = "/employees" component = {ListEmployeeComponent} />
                <Route path = "/add-employee" component = {CreateEmployeeComponent} />
                <Route path ="/update-employee/:id" component={UpdateEmployeeComponent}/>
                <Route path ="/view-employee/:id" component ={ViewEmployeeComponent}/>
               
        </Switch >
       </div>
      </div>
      
      </Router>
      </div>
       
  );
}

export default App;