import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class HeaderComponent extends Component {
    render() {
        return (
            <div className="headerWrapper">
                <div className="siteTitle">NEDATYPE</div>
                <Link to="/browse" className="backButton">&larr; Back</Link>
            </div>
        );
    }
}

export default HeaderComponent;
