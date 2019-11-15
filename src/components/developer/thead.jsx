import React, { Component } from 'react';

class Thead extends Component{

  render(){
    return <tr>
    <th className="bg-primary text-white">&nbsp;</th>
    <th className="bg-primary text-white">Qualiity</th>
    <th className="bg-primary text-white">Quantity</th>
    <th className="bg-primary text-white">Initiative</th>
    <th className="bg-primary text-white">Communication</th>
    <th className="bg-primary text-white">Proffesionalism</th>
    <th className="bg-primary text-white">Integration</th>    
  </tr>
  }
}

export default Thead;