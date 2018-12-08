import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css';

export default function Property(props) {
    return (
        <div className="property">
            {props.data.imgSrc ? <img src={props.data.imgSrc} className="property-img" alt="this property" /> : ""}
            <div className="prop-info">
                <h3 className="address">{props.data.address}</h3>
                <p className="short-desc">{props.data.description}</p>
                <button><Link to={`/dashboard/${props.data.slug}`}>View Property</Link></button>
            </div>
        </div>
    );

};
