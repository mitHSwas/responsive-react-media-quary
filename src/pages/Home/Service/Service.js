import React from 'react';
import "./Service.css"

const Service = ({service}) => {
    // {service} = props.service;
    const {name, price, description, img} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3> Price: {price}</h3>
            <p className="mx-3">Description: {description}</p>
        </div>
    );
};

export default Service;