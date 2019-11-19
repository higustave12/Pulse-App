import React from "react";
import Average from './average';
import Thead from './thead';
import Tbody from './tbody';
import { weeks } from '../../assets/DB/database';
import 'bootstrap/dist/css/bootstrap.css'

const Devdashbard = () => {
  console.log('Devdashbard');
  
  return <React.Fragment>
            <div className="container">
              <p className="display-4">Average</p>
                <Average />
              <hr/>
              <p className="display-4 text-center mt-4">WEEKLY DEV PULSE RATING  SUMMARY</p>
              <table className="table table-bordered mt-4">
                <thead>
                  <Thead />
                </thead>
                <tbody>
                  {weeks.map((week, index)=>{
                    return <Tbody key={index} week={week}/>;
                  })}
                </tbody>
              </table>
            </div>
          </React.Fragment>;
};

export default Devdashbard;
