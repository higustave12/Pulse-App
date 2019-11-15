import React, { Component } from 'react';

class Tbody extends Component{
  render(){
    return <React.Fragment>
      <tr>
        <td className="bg-info text-white">Week {this.props.week.week}</td>
                    <td>{this.props.week.Quality.score}</td>
                    <td>{this.props.week.Quantity.score}</td>
                    <td>{this.props.week.initiative.score}</td>
                    <td>{this.props.week.Communication.score}</td>
                    <td>{this.props.week.Professionalism.score}</td>
                    <td>{this.props.week.Integration.score}</td>
                  </tr>
    </React.Fragment>
  }
}
export default Tbody;