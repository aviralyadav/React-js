import React from 'react';

const CharComponent = (props) => {
    const style = {
        display: "inline-block",
        padding: 16,
        textAlign: "center",
        margin: 16,
        border: "1px solid black"
    }
    return (
        <div style={style} onClick={props.click}>
            <p>{props.char}</p>
        </div>
    )
};

export default CharComponent;