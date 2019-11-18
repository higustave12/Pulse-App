import React, { Component } from 'react';
import { weeks } from '../../assets/DB/database'

class Average extends Component{
  quantityAverage(){
    const quantity1 = weeks[0].Quantity.score;
    const quantity2 = weeks[1].Quantity.score;
    const quantity3 = weeks[2].Quantity.score;
    const quantity4 = weeks[3].Quantity.score;
    const quantity5 = weeks[4].Quantity.score;
    const average = (quantity1 + quantity2 + quantity3 + quantity4 + quantity5) / 5;

      return average;
  }

  qualityAverage(){
    const quality1 = weeks[0].Quality.score;
    const quality2 = weeks[1].Quality.score;
    const quality3 = weeks[2].Quality.score;
    const quality4 = weeks[3].Quality.score;
    const quality5 = weeks[4].Quality.score;
    const average = (quality1 + quality2 + quality3 + quality4 + quality5) / 5;

      return average;
  }

  initiativeAverage(){
    const initiative1 = weeks[0].initiative.score;
    const initiative2 = weeks[1].initiative.score;
    const initiative3 = weeks[2].initiative.score;
    const initiative4 = weeks[3].initiative.score;
    const initiative5 = weeks[4].initiative.score;
    const average = (initiative1 + initiative2 + initiative3 + initiative4 + initiative5) / 5;

      return average;
  }

  communicationAverage(){
    const communication1 = weeks[0].Communication.score;
    const communication2 = weeks[1].Communication.score;
    const communication3 = weeks[2].Communication.score;
    const communication4 = weeks[3].Communication.score;
    const communication5 = weeks[4].Communication.score;
    const average = (communication1 + communication2 + communication3 + communication4 + communication5) / 5;

      return average;
  }

  professionalismAverage(){
    const professionalism1 = weeks[0].Professionalism.score;
    const professionalism2 = weeks[1].Professionalism.score;
    const professionalism3 = weeks[2].Professionalism.score;
    const professionalism4 = weeks[3].Professionalism.score;
    const professionalism5 = weeks[4].Professionalism.score;
    const average = (professionalism1 + professionalism2 + professionalism3 + professionalism4 + professionalism5) / 5;

      return average;
  }

  integrationAverage(){
    const integration1 = weeks[0].Integration.score;
    const integration2 = weeks[1].Integration.score;
    const integration3 = weeks[2].Integration.score;
    const integration4 = weeks[3].Integration.score;
    const integration5 = weeks[4].Integration.score;
    const average = (integration1 + integration2 + integration3 + integration4 + integration5) / 5;

      return average;
  }

  setQuantityColor(){
    let color = 'col-md-2 border bg-';
    if(this.quantityAverage() > 1) return color += 'success';
    if(this.quantityAverage() >= 0 && this.quantityAverage() === 1) return color += 'warning';
    if(this.quantityAverage() < 0) return color += 'danger';
  }

  setQualityColor(){
    let color = 'col-md-2 border bg-';
    if(this.qualityAverage() > 1) return color += 'success';
    if(this.qualityAverage() >= 0 && this.qualityAverage() === 1) return color += 'warning';
    if(this.qualityAverage() < 0) return color += 'danger';
  }

  setInitiativeColor(){
    let color = 'col-md-2 border bg-';
    if(this.initiativeAverage() > 1) return color += 'success';
    if(this.initiativeAverage() >= 0 && this.initiativeAverage() === 1) return color += 'warning';
    if(this.initiativeAverage() < 0) return color += 'danger';
  }

  setCommunicationColor(){
    let color = 'col-md-2 border bg-';
    if(this.communicationAverage() > 1) return color += 'success';
    if(this.communicationAverage() >= 0 && this.communicationAverage() === 1) return color += 'warning';
    if(this.communicationAverage() < 0) return color += 'danger';
  }

  setProfessionalismColor(){
    let color = 'col-md-2 border bg-';
    if(this.professionalismAverage() > 1) return color += 'success';
    if(this.professionalismAverage() >= 0 && this.professionalismAverage() === 1) return color += 'warning';
    if(this.professionalismAverage() < 0) return color += 'danger';
  }

  setIntegrationColor(){
    let color = 'col-md-2 border bg-';
    if(this.integrationAverage() > 1) return color += 'success';
    if(this.integrationAverage() >= 0 && this.integrationAverage() === 1) return color += 'warning';
    if(this.integrationAverage() < 0) return color += 'danger';
  }

  render(){
    return (
      <React.Fragment>
        <div className="row">
          <div className={this.setQualityColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Quality</div>
            </div>
            <div className="row">
    <div className="display-3 text-white ml-2">{this.qualityAverage()}</div>
            </div>
          </div>
          <div className={this.setQuantityColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Quantity</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">{this.quantityAverage()}</div>
            </div>
          </div>
          <div className={this.setInitiativeColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Initiative</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">{this.initiativeAverage()}</div>
            </div>
          </div>
          <div className={this.setCommunicationColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Communication</div>
            </div>
            <div className="row">
    <div className="display-3 text-white ml-2">{this.communicationAverage()}</div>
            </div>
          </div>
          <div className={this.setProfessionalismColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Professionalism</div>
            </div>
            <div className="row">
              <div className="display-3 text-white ml-2">{this.professionalismAverage()}</div>
            </div>
          </div>
          <div className={this.setIntegrationColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Integration</div>
            </div>
            <div className="row">
    <div className="display-3 text-white ml-2">{this.integrationAverage()}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Average;