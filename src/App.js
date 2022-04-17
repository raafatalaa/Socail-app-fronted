import React, {useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

import './App.css'

export default function App() {
    

    const [users,setUsers] = useState([]);
    const [posts,setPosts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
    try {
      
        const response = await fetch('http://localhost:5000/api/user', {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const result = await response.json();
        setUsers(result);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await fetch('http://localhost:5000/api/post', {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const result = await response.json();
        setPosts(result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    },[]);



    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" ><HomePage users={users} posts={posts} /></Route>
                </Switch>
            </div>
        </Router>
    )
}

