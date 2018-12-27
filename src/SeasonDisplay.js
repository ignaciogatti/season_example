import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {

    summer : {
        text : 'Let\'s hit the beach!',
        icon : 'sun'
    },

    winter: {
        text : 'Burr, it is cold!',
        icon : 'snowflake'
    }

};

const getSeason = (lat, month) => {

    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }

};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    
    return(
        <div className={`season-display ${season}`} >
            <i className={`icon-left huge ${seasonConfig[season].icon} icon`} />
            <h1 className={`text`}>{seasonConfig[season].text}</h1>
            <i className={`icon-right huge ${seasonConfig[season].icon} icon`} />
        </div>
    );
};

export default SeasonDisplay;