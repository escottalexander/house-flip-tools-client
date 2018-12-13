import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css';

export default function Property(props) {
    return (
        <div className="property">
            <div className="prop-info">
                <h2 className="address">{props.data.address}</h2>
                <p className="short-desc">{props.data.description}</p>
                {props.data.imgSrc ? <img src={props.data.imgSrc} className="property-img" alt="this property" /> : ""}
                <button className="view-property"><Link to={`/dashboard/${props.data.slug}`}>View Property</Link></button>
            </div>
        </div>
    );

};
