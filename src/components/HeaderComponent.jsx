import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
export class HeaderComponent extends Component {
    render() {
        let isOnBrowsePage = this.props.location.pathname == '/browse' || this.props.location.pathname == '/';
        console.log(isOnBrowsePage)
        return (

            <div className="headerWrapper">

                <div className="siteTitle">NEDATYPE</div>
                {!isOnBrowsePage ? <Link to="/browse" className="backButton">&larr; Back</Link> : ""}

            </div>
        );
    }
}

export default withRouter(HeaderComponent);
