import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumb.css';
import './button.css';

export default function BreadCrumb(props) {
    return (
        <Link className="bttn-xs bttn-simple top-z back-crumb link" to={`/`}><span className="breadcrumb">back</span></Link>
    )
}