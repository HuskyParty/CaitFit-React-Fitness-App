import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo_1_only.png' // relative path to image 
import logoText from './logo_1_text.png' // relative path to image 
import logoBoth from './logo_1.png' // relative path to image
import Finisher from './finisher';
import WorkoutShell from './WorkoutShell';
import faker from 'faker';
import CaitFit from './CaitFit';
import IntroCard from './IntroCard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
        } from "react-router-dom";

export default function App() {
    return (
        <Router>
        <div>
            {/*Nav Bar*/}
            <div className="ui inverted menu" style={{borderRadius: "0"}}>
                <div className = "ui container">
                    <a className="header item" href="/">
                        <img className="logo" src={logo}></img>
                        Llama Fit
                    </a>
                </div>
            </div>
            <div class="ui vertical pointing menu">
                <a class="item" href="/">
                    Home
                </a>
                <Link to="/about"class="item">About</Link>
                <Link to="/users"class="item">Users</Link>
                
            </div>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            </Switch>
        </div>
        </Router>
    );
}
function Home() {
    return (
        <div className="home">

            <IntroCard heading="Welcome to Cait-Fit.">
            Get yo sweat on!
            </IntroCard>
                    

            {/*Welcome Message
            <div>
                <br></br>
                <h1 class="ui header centered">Welcome to Cait-Fit.</h1>
                <br></br>
                <div class="ui centered card">
                    <div class="ui compact message">
                        <div class="header">
                            We are just here to get a quick workout in..
                        </div>
                        <ul>- knock out the daily circuit </ul>
                        <ul>- post your time?</ul>
                        <ul>- or just jump into the random circuit generator... you do you.</ul>
                    </div>
                </div>
                <br></br>
            </div>
            */}


            {/*Daily Circuit*/}
            
            <WorkoutShell title="Daily Cait-Circuit">
                <CaitFit/>
            </WorkoutShell>
            <br></br>
                

            {/*Finisher
            
            <Finisher />
            */}
        </div>
                    
    );
};

function About() {
    return <h2>About</h2>;
    }

function Users() {
    return <h2>Users</h2>;
    }

ReactDOM.render(<App />, document.querySelector('#root'));