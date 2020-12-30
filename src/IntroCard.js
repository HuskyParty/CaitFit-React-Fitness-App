import React from 'react';

const IntroCard = (props) => {

    return (
        
        <div className="IntroCard">
            <div>
                <br></br>
                <h1 class="ui header centered">{props.heading}</h1>
                <br></br>
                <div class="ui centered card">
                    <div class="ui raised segment">
                        <div class="ui center aligned container">
                            <div class="header">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        

            <br></br>
        </div>
        );
    }

export default IntroCard