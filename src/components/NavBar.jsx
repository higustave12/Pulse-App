import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../css/LFADashboard.css';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
          <Fragment>
            <div className="user_signedin_div" style={{float: 'right', marginRight:'20px'}}>
                  <Link to="/">
                    <button
                      type="button"
                      className="user_btn" 
                    >
                      <span className="glyphicon glyphicon-user" style={{paddingRight: '2px'}}></span>
                      Signout
                    </button>
                  </Link>
            </div>
          </Fragment>
        );
    }
}
 
export default NavBar;