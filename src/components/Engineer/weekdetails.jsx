import React from "react";
import Average from './average';
import 'bootstrap/dist/css/bootstrap.css'

const Weekdetails = () => {
  return <React.Fragment>
            <div className="container">
              <p className="display-4">Average</p>
              <Average />
              <hr/>
              <p className="display-4 text-center mt-4">WEEKLY DEV PULSE RATING  SUMMARY</p>
              <table className="table table-bordered mt-4">
                <thead>
                  <tr>
                    <th className="bg-primary text-white">&nbsp;</th>
                    <th className="bg-primary text-white">Quantity</th>
                    <th className="bg-primary text-white">Quality</th>
                    <th className="bg-primary text-white">Initiative</th>
                    <th className="bg-primary text-white">Communication</th>
                    <th className="bg-primary text-white">Proffesionalism</th>
                    <th className="bg-primary text-white">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-info text-white">Week1</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td className="bg-info text-white">Week2</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td className="bg-info text-white">Week3</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td className="bg-info text-white">Week4</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td className="bg-info text-white">Week5</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </React.Fragment>;
};

export default Weekdetails;
