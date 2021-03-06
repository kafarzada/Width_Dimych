 import React from 'react';


type PropsType = {
    on:boolean
    onChange: (on: boolean) => void
}

 function OnOffSecret(props:PropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding:"2px",
        backgroundColor: props.on ? "green" : "white",
    }
    const OffStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding:"2px",
        backgroundColor: props.on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"

    }
    

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>Onn</div>
            <div style={OffStyle} onClick ={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export const OnOff = React.memo(OnOffSecret)

