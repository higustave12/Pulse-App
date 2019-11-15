import React, { Component } from 'react';

class Average extends Component{
  render(){
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2 bg-success">
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Quantity</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">1.6</div>
            </div>
          </div>
          <div className="col-md-2 bg-warning">
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Quality</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">1.1</div>
            </div>
          </div>
          <div className="col-md-2 bg-danger">
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Initiative</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">0.6</div>
            </div>
          </div>
          <div className="col-md-2 bg-warning">
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Communication</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">1.3</div>
            </div>
          </div>
          <div className="col-md-2 bg-success">
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Professionalism</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">1.9</div>
            </div>
          </div>
          <div className="col-md-2 bg-danger">
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Integration</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">0.9</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Average;