import React, { Component } from 'react';
import './PetInteraction.css';
import { domainToUnicode } from 'url';

export default class PetInteraction extends Component {
  state = {
    hungry: 100,
    clean: 100,
    healthy: 100,
    smart: 100,
    decreaseIntervalId: null
  };




  // handleOnClickEat = () => {
  //   const { hungry } = this.state;
  //   this.setState({
  //     hungry: hungry + 30,
  //   });
  // };

  // handleOnClickWash = () => {
  //   const { clean } = this.state;
  //   this.setState({
  //     clean: clean + 30,
  //   })
  // };

  // handleOnClickExcercise = () => {
  //   const { healthy } = this.state;
  //   this.setState({
  //     healthy: healthy + 30,
  //   });
  // };

  // handleOnClickSleep = () => {
  //   const { healthy } = this.state;
  //   this.setState({
  //     healthy: healthy + 50,
  //   });
  // };

  // handleOnClickCode = () => {
  //   const { smart } = this.state;
  //   this.setState({
  //     smart: smart + 30,
  //   });
  // };


  handleUpdateStat = (field, howMuch) => {
    this.setState({
      [field]: this.state[field] + howMuch
    })
    // check if decrease interval id is not null => do nothing
    // if it is null => restart interval
    if (!this.state.decreaseIntervalId) {
      this.handleDecreseStat()
    }
  }


  handleDecreseStat = () => {
    let intervalId = setInterval(() => {
      let { hungry, clean, healthy, smart } = this.state;
      if (hungry <= 0 && clean <= 0 && healthy <= 0 && smart <= 0) {
        clearInterval(this.state.decreaseIntervalId);
        this.setState({ decreaseIntervalId: null })
        console.log("cleared");
      } else {
        hungry -= 1;
        clean -= 1;
        healthy -= 1;
        smart -= 1;
        this.setState({
          hungry: hungry <= 0 ? 0 : hungry >= 100 ? 100 : hungry,
          // toan tu 3 ngoi long vao nhau if1 ? true1: (if2:true2:false2) = false1, 
          clean: clean <= 0 ? 0 : clean >= 100 ? 100 : clean,
          healthy: healthy <= 0 ? 0 : healthy >= 100 ? 100 : healthy,
          smart: smart <= 0 ? 0 : smart >= 100 ? 100 : smart,
        })
      }
    }, 1000);
    this.setState({ decreaseIntervalId: intervalId })
  };

  componentDidMount() {
    this.handleDecreseStat();
  };

  handleStatus = () => {
    const { hungry, clean, healthy, smart } = this.state;
    if (hungry < 30)
      return <div>Your pet is hungry</div>
    else if (clean < 30)
      return <div>Your pet need a shower</div>
    else if (healthy < 20)
      return <div>Your pet is tired</div>
    else if (smart < 10)
      return <div>Your pet is stupid</div>
    else
      return <div>Your pet is happy</div>
  };
  render() {
    const { hungry, clean, healthy, smart } = this.state;
    return (
      <div className="pet-interaction-wrapper">
        <div className="button-wrapper">
          <button className="eatBtn" onClick={() => this.handleUpdateStat("hungry", 30)}>Eat</button>
          <button className="washBtn" onClick={() => this.handleUpdateStat("clean", 30)}>Wash</button>
          <button className="exerciseBtn" onClick={() => this.handleUpdateStat("healthy", 30)}>Exercise</button>
          <button className="sleepBtn" onClick={() => this.handleUpdateStat("healthy", 50)}>Sleep</button>
          <button className="codeBtn" onClick={() => this.handleUpdateStat("smart", 30)}>Code</button>
        </div>
        <div className="display-wrapper">
          <div className="display">Hungry: {hungry}/100</div>
          <div className="display">Clean: {clean}/100</div>
          <div className="display">Healthy: {healthy}/100</div>
          <div className="display">Smart: {smart}/100</div>
        </div>
        <div>Trạng thái</div>
        {this.handleStatus()}
      </div>
    )
  }
}
