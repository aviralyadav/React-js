import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let dynamicClasses = [];
    if(props.personsArr.length <= 1) {
      dynamicClasses.push(classes.red);
    }
    if(props.personsArr.length < 1) {
      dynamicClasses.push(classes.bold);
    }
    let buttonClass = null;
    if(props.showToggle){
        buttonClass = classes.Red;
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={dynamicClasses.join(' ')}>This is really working!</p>
            <button className={buttonClass} onClick={props.toggle}>Change Name</button>
        </div>
    )
}

export default cockpit;