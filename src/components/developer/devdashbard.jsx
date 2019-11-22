import React, { Component } from "react";
import Average from './average';
import Thead from './thead';
import { weeks, users } from '../../assets/DB/database';
//import signin from '../signIn';
import 'bootstrap/dist/css/bootstrap.css'


const findEmail = users.find((e) => e.email === localStorage.getItem('userEmail'));
const findweek = weeks.filter((w) => w.userId === findEmail.userId);

class Devdashbard extends Component{
  state = {
    user: findEmail,
  }

  render(){
    return <React.Fragment>
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <p className="display-4">Average</p>
                </div>
                <div className="col-md-2">
                  <p className="display-5 font-weight-bold">{this.state.user.firstName} {this.state.user.lastName}</p>
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

                  {/* {weeks.map((week, index)=>{
                    return <Tbody key={index} week={week}/>;
                  })} */}
                  {findweek.map((find, index) => {
                    return <tr key={index}>
                      <td className="bg-info text-white">Week {index + 1}</td>
                      <td>{find.Quality.score}</td>
                      <td>{find.Quantity.score}</td>
                      <td>{find.initiative.score}</td>
                      <td>{find.Communication.score}</td>
                      <td>{find.Professionalism.score}</td>
                      <td>{find.Integration.score}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </React.Fragment>;  
  }
};

export default Devdashbard;
