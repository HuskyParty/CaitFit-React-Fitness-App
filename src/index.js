import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo_1_only.png' // relative path to image 
import logoText from './logo_1_text.png' // relative path to image 
import logoBoth from './logo_1.png' // relative path to image
import Finisher from './finisher';
import DailyShort from './dailyShort';
import faker from 'faker';



const App = () => {
    return (
        <div className="home">

            {/*Nav Bar*/}
            <div className="ui inverted menu" style={{borderRadius: "0"}}>
                <div className = "ui container">
                    <a className="header item" href="/">
                        <img className="logo" src={logo}></img>
                        Generate Cait-Fit Circuit
                    </a>
                    
                </div>
            </div>

            <div>
                <br></br>
                <h1 class="ui header centered">Welcome to Cait-Fit.</h1>
                
                <br></br>
                <div class="ui centered card">
                <div class="ui raised segment">
                <div class="ui center aligned container">
                        <div class="header">
                            Get yo sweat on!
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <br></br>
                    

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
            
            <DailyShort />
            <br></br>
                

            {/*Finisher
            
            <Finisher />
            */}
        </div>
                    
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));