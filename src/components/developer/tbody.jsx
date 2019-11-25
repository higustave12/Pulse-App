import React, { Component } from 'react';

class Tbody extends Component{
  render(){
    const style = {
      fontSize: '1.6em'
    }
    return <React.Fragment>
      <tr>
        <td style={style} className="bg-info"><a href={`engineer-weekly/${this.props.week.week}`} className="text-white">Week {this.props.week.week}</a></td>
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