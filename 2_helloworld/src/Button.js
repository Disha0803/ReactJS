import React from 'react';
import './style.css'

const Button = ({title="By Default"}) => (
    <button className="button">{title}</button>
);

export default Button;