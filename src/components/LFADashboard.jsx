import React, { Component, Fragment } from 'react';
import '../css/LFADashboard.css';
import EngineersList from './EngineersListCards';

class LFADashboard extends Component {
    render() {
        return (
          <Fragment>
            <div className="w3-row-padding engineers_dashboard_div">
              <div className="w3-col s12" style={{paddingBottom:'10px'}}>
                <hr style={{marginBottom: '40px'}} />
                <EngineersList/>
              </div>
            </div>
          </Fragment>
        );
    }
}
 
export default LFADashboard;