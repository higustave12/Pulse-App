import React, { Component, Fragment } from 'react';
import '../css/LFADashboard.css';
import EngineersList from './EngineersListCards';

class LFADashboard extends Component {
    render() {
        return (
          <Fragment>
              <div>
                <EngineersList/>
              </div>
          </Fragment>
        );
    }
}
 
export default LFADashboard;