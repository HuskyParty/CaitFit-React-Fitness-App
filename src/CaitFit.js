import React from 'react';

const lightCardio = {
    'butt kicks': ['30 seconds', '40 seconds', '50 seconds','60 seconds'], 
    'jumping jacks': ['10 reps', '20 reps', '30 reps'], 
    'high knees': ['10 reps', '20 reps', '30 reps']
    };

const hardCardio = {
    'burpees': ['5 reps', '10 reps', '15 reps'],
    'air squat': ['10 reps', '15 reps', '20 reps'], 
    'air jumping squat': ['5 reps', '10 reps', '15 reps']
    };

const upperStrength = {
    'push ups': ['5 reps', '10 reps', '15 reps'],
    'inch-worm walk out': ['5 reps', '10 reps', '15 reps'], 
    'push up plank': ['30 seconds', '40 seconds', '50 seconds','60 seconds']
    };

const barbell = {
    'barbell curl': ['5 reps', '7 reps', '10 reps'],
    'barbell push press': ['5 reps', '7 reps', '10 reps'],
    'barbell bent-over row': ['5 reps', '7 reps', '10 reps'],
    'barbell upright row': ['5 reps', '7 reps', '10 reps']
    };
const core = {
    'plank': ['30 seconds', '40 seconds', '50 seconds','60 seconds'], 
    'butterfly sit-ups': ['10 reps', '15 reps', '20 reps'],
    'bridges': ['10 reps', '15 reps', '20 reps'],
    'flutter kicks': ['20 reps', '25 reps', '30 reps']
    };
const leg = {
    'wall squat': ['15 seconds', '25 seconds', '35 seconds'], 
    'walking lunges': ['10 reps', '15 reps', '20 reps'], 
    'in-place lunges': ['10 reps', '15 reps', '20 reps'],
    };
const legBB = {
    'barbell jumping squat': ['5 reps', '7 reps', '10 reps'],
    'barbell squat': ['5 reps', '10 reps', '15 reps'], 
    'barbell walking lunge': ['5 reps', '7 reps', '10 reps'],
    'barbell in-place lunges': ['5 reps', '7 reps', '10 reps']
    };

const cardioGroup = [lightCardio, hardCardio];
const upperGroup = [upperStrength, barbell];
const coreGroup = [core];
const legGroup = [leg, legBB];
const rounds = [3,4,5]


const num = (wrkout) => {
    return (
        Math.floor(Math.random() * wrkout.length)
        )
};

const workoutInfo = (group) => {

    //type from group
    const workoutType = group[num(group)]

    //list of workouts from type
    const keys = Object.keys(workoutType)

    //specific workout chosen
    const workoutSelect = keys[num(keys)]
    const workoutSelected = workoutType[workoutSelect]

    //rep chosen
    const workoutRep = workoutSelected[num(workoutSelected)]

    return (
        workoutSelect + ": " + workoutRep
    );
    
}
const round = rounds[num(rounds)]


const CaitFit = () => {

    return (
        <div>
        <span className = "workout">{round + " rounds:"}</span>
        <li className = "workout">{workoutInfo(cardioGroup)}</li>
        <li className = "workout">{workoutInfo(upperGroup)}</li>
        <li className = "workout">{workoutInfo(coreGroup)}</li>
        <li className = "workout">{workoutInfo(legGroup)}</li>
        </div>
    )
};


export default CaitFit



