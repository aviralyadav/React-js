import React from 'react';
const ValidationComponent = (props) => {
    let text = 'TEXT LONG ENOUGH!';
    if(props.charLen < 5) {
         text = 'TEXT TOO SHORT!'
    }
    return (
    <div>
        <p>{text}</p>
    </div>
);
}

export default ValidationComponent;