import './Button.css'
import React, { useState } from 'react';

//
// function Button (props) {
//     return (
//         <button type="button">test </button>
//     )}



›


function Button ({ label, logText, name, isDisabled }) {
    function buttonClick(e) {
        console.log(e)
    }
    return (
    <button type="button" name={name} onClick={() => buttonClick(logText)} disabled={ isDisabled } >{label}</button>
    )}
export default Button