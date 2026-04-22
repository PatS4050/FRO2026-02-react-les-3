import './Article.css';
import React from 'react';
import bag1 from "../../assets/bag_1.png";


function Article({condition, imageProduct, nameProduct, priceProduct}) {
    return (
        <article>
        <span>{condition}</span>
        <img src={imageProduct} alt={nameProduct} />
        <p>{nameProduct}</p>
        <h4>{priceProduct}</h4>
        </article>
)}

export default Article