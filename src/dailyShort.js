import React from 'react';
import CaitFit from './CaitFit';
import faker from 'faker';

const DailyShort = (props) => {
    return (

        
        <div>

        {/*Icon*/}
        <h2 class="ui center aligned icon header">
            <i class="notched circle loading icon"></i>
            Daily Cait-Circuit
        </h2>

        {/*Workout*/}
        <div class="ui centered card">
            <div class="ui raised segment">
            <div class="ui center aligned container">
                <div class="header">{faker.name.firstName()}</div>
                <a class="avatar">
                <img src={faker.image.animals()}/>
                </a>
                </div>
                <div class="list">
                    <CaitFit />
                </div>
            </div>
        </div>
        
        </div>
        );
    };

export default DailyShort