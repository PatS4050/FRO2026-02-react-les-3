import './Tile.css';
import React from 'react';
import bag1 from "../../assets/bag_1.png";


function Tile(props) {
    console.log(props)
        return (
        <section>
            {props.children}
        </section>
)}

export default Tile