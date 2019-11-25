import React, { Component } from "react";
import Average from './average';
import Thead from './thead';
import Tbody from './tbody';
import { weeks, users } from '../../assets/DB/database';
import 'bootstrap/dist/css/bootstrap.css'


const findEmail = users.find((e) => e.email === localStorage.getItem('userEmail'));
const findweek = weeks.filter((w) => w.userId === findEmail.userId);

class Devdashbard extends Component{
  state = {
    user: findEmail,
  }

  render(){
    const style = {
      fontSize: '1.2em'
    }
    return <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <p className="display-4">Average</p>
                </div>
                <div className="col-md-2">
                  <p style={style}>{this.state.user.firstName} {this.state.user.lastName}</p>
                </div>
              </div>
                <Average />
              <hr/>
              <p className="display-4 text-center mt-4">WEEKLY DEV PULSE RATING  SUMMARY</p>
              <table className="table table-bordered mt-4">
                <thead>
                  <Thead />
                </thead>
                <tbody>

                  {findweek.map((week, index)=>{
                    return <Tbody key={index} week={week}/>;
                  })}
                </tbody>
              </table>
            </div>
          </React.Fragment>;  
  }
};

export default Devdashbard;
