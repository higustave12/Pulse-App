import React, { Component } from 'react';
import { weeks, users } from '../../assets/DB/database'

const findEmail = users.find((e) => e.email === localStorage.getItem('userEmail'));
const findweek = weeks.filter((w) => w.userId === findEmail.userId);

class Average extends Component{

  findAverage(){
    const average = {
      quantity: 0,
      quality: 0,
      initiative: 0,
      communication: 0,
      professionalism: 0,
      integration: 0,
    };
    
    findweek.forEach(week => {
      average.quantity += week.Quantity.score;
      average.quality += week.Quality.score;
      average.initiative += week.initiative.score;
      average.communication += week.Communication.score;
      average.professionalism += week.Professionalism.score;
      average.integration += week.Integration.score;
    });
    
    average.quantity = average.quantity / findweek.length;
    average.quality = average.quality / findweek.length;
    average.initiative = average.initiative / findweek.length;
    average.communication = average.communication / findweek.length;
    average.professionalism = average.professionalism / findweek.length;
    average.integration = average.integration / findweek.length;

    return average;
  }
  
  setQuantityColor(){
    let color = 'col-md-2 border bg-';
    if(this.findAverage().quantity > 1) return color += 'success';
    if(this.findAverage().quantity >= 0 || this.findAverage().quantity === 1) return color += 'warning';
    if(this.findAverage().quantity < 0) return color += 'danger';
  }

  setQualityColor(){
    let color = 'col-md-2 border bg-';
    if(this.findAverage().quality > 1) return color += 'success';
    if(this.findAverage().quality >= 0 || this.findAverage().quality === 1) return color += 'warning';
    if(this.findAverage().quality < 0) return color += 'danger';
  }

  setInitiativeColor(){
    let color = 'col-md-2 border bg-';
    if(this.findAverage().initiative > 1) return color += 'success';
    if(this.findAverage().initiative >= 0 || this.findAverage().initiative === 1) return color += 'warning';
    if(this.findAverage().initiative < 0) return color += 'danger';
  }

  setCommunicationColor(){
    let color = 'col-md-2 border bg-';
    if(this.findAverage().communication > 1) return color += 'success';
    if(this.findAverage().communication >= 0 || this.findAverage().communication === 1) return color += 'warning';
    if(this.findAverage().communication < 0) return color += 'danger';
  }

  setProfessionalismColor(){
    let color = 'col-md-2 border bg-';
    if(this.findAverage().professionalism > 1) return color += 'success';
    if(this.findAverage().professionalism >= 0 || this.findAverage().professionalism === 1) return color += 'warning';
    if(this.findAverage().professionalism < 0) return color += 'danger';
  }

  setIntegrationColor(){
    let color = 'col-md-2 border bg-';
    if(this.findAverage().integration > 1) return color += 'success';
    if(this.findAverage().integration >= 0 || this.findAverage().integration === 1) return color += 'warning';
    if(this.findAverage().integration < 0) return color += 'danger';
  }

  state = {
    quality: '',
    quantity: '',
    initiative: '',
    communication: '',
    professionalism: '',
    integration: ''
  }

  quality = () => {
    if (this.findAverage().quality > 1) {
      this.setState({ quality: 'Good' });
    } else if(this.findAverage().quality >= 0 || this.findAverage().quality === 1) {
      this.setState({ quality: 'Fair' });
    } else {
      this.setState({ quality: 'Poor' });
    }
  }

  quantity = () => {
    if (this.findAverage().quantity > 1) {
      this.setState({ quantity: 'Good' });
    } else if(this.findAverage().quantity >= 0 || this.findAverage().quantity === 1) {
      this.setState({ quantity: 'Fair' });
    } else {
      this.setState({ quantity: 'Poor' });
    }
  }

  initiative = () => {
    if (this.findAverage().initiative > 1) {
      this.setState({ initiative: 'Good' });
    } else if(this.findAverage().initiative >= 0 || this.findAverage().initiative === 1) {
      this.setState({ initiative: 'Fair' });
    } else {
      this.setState({ initiative: 'Poor' });
    }
  }

  communication = () => {
    if (this.findAverage().communication > 1) {
      this.setState({ communication: 'Good' });
    } else if(this.findAverage().communication >= 0 || this.findAverage().communication === 1) {
      this.setState({ communication: 'Fair' });
    } else {
      this.setState({ communication: 'Poor' });
    }
  }

  professionalism = () => {
    if (this.findAverage().professionalism > 1) {
      this.setState({ professionalism: 'Good' });
    } else if(this.findAverage().professionalism >= 0 || this.findAverage().professionalism === 1) {
      this.setState({ professionalism: 'Fair' });
    } else {
      this.setState({ professionalism: 'Poor' });
    }
  }

  integration = () => {
    if (this.findAverage().integration > 1) {
      this.setState({ integration: 'Good' });
    } else if(this.findAverage().integration >= 0 || this.findAverage().integration === 1) {
      this.setState({ integration: 'Fair' });
    } else {
      this.setState({ integration: 'Poor' });
    }
  }

  render(){
    return (
      <React.Fragment>
        <div className="row">
          <div onMouseOver={this.quality} className={this.setQualityColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Quality</div>
            </div>
            <div className="row display-5 font-weight-bold text-white ml-2">{this.state.quality}</div>
            <div className="row">
  <div className="display-3 text-white ml-2">{this.findAverage().quality}</div>
            </div>
          </div>
          <div onMouseOver={this.quantity} className={this.setQuantityColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Quantity</div>
            </div>
            <div className="row display-5 font-weight-bold text-white ml-2">{this.state.quantity}</div>
            <div className="row">
              <div className="display-3 text-white ml-2">{this.findAverage().quantity}</div>
            </div>
          </div>
          <div onMouseOver={this.initiative} className={this.setInitiativeColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Initiative</div>
            </div>
            <div className="row display-5 font-weight-bold text-white ml-2">{this.state.initiative}</div>
            <div className="row">
              <div className="display-3 text-white ml-2">{this.findAverage().initiative}</div>
            </div>
          </div>
          <div onMouseOver={this.communication} className={this.setCommunicationColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Communication</div>
            </div>
            <div className="row display-5 font-weight-bold text-white ml-2">{this.state.communication}</div>
            <div className="row">
    <div className="display-3 text-white ml-2">{this.findAverage().communication}</div>
            </div>
          </div>
          <div onMouseOver={this.professionalism} className={this.setProfessionalismColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Professionalism</div>
            </div>
            <div className="row display-5 font-weight-bold text-white ml-2">{this.state.professionalism}</div>
            <div className="row">
              <div className="display-3 text-white ml-2">{this.findAverage().professionalism}</div>
            </div>
          </div>
          <div onMouseOver={this.integration} className={this.setIntegrationColor()}>
            <div className="row">
              <div className="display-5 font-weight-bold text-white ml-2">Integration</div>
            </div>
            <div className="row display-5 font-weight-bold text-white ml-2">{this.state.integration}</div>
            <div className="row">
    <div className="display-3 text-white ml-2">{this.findAverage().integration}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Average;