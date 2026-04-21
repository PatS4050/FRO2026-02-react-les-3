import './button.css'
import React from 'react';

//
// function Button (props) {
//     return (
//         <button type="button">test </button>
//     )}






function Button ({ label, logText, name, disabled }) {
    function buttonClick(e) {
        console.log(e)
    }
    return (
    <button type="button" name={name} onClick={() => buttonClick(logText)} disabled={false} >{label}</button>
    )}
export default Button