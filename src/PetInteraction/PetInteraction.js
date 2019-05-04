import React, { Component } from 'react';
import './PetInteraction.css';


export default class PetInteraction extends Component {
  state = {
    hungry: 100,
    clean: 100,
    healthy: 100,
    smart: 100,
    decreaseIntervalId: null
  };

  handleEatStat = () => {
    const { hungry } = this.state;
    if (hungry === 0)
      return;
    this.setState({
      hungry: hungry - 1,
    });
  };

  handleEat = () => {
    const { hungry } = this.state;
    if (hungry + 30 > 100) {
      this.setState({
        hungry: 100,
      });
      return;
    }
    this.setState({
      hungry: hungry + 30,
    });
  };

  handleWashStat = () => {
    const { clean } = this.state;
    if (clean === 0)
      return;
    this.setState({
      clean: clean - 1,
    });
  };

  handleWash = () => {
    const { clean } = this.state;
    if (clean + 30 > 100) {
      this.setState({
        clean: 100,
      });
      return;
    }
    this.setState({
      clean: clean + 30,
    });
  };

  handleSleepStat = () => {
    const { healthy } = this.state;
    if (healthy === 0)
      return;
    this.setState({
      healthy: healthy - 1,
    });
  };

  handleSleep = () => {
    const { healthy } = this.state;
    if (healthy + 50 > 100) {
      this.setState({
        healthy: 100,
      });
      return;
    }
    this.setState({
      healthy: healthy + 50,
    });
  };

  handleExerciseStat = () => {
    const { healthy } = this.state;
    if (healthy === 0) return;
    this.setState({
      healthy: healthy - 1,
    });
  };

  handleExercise = () => {
    const { healthy } = this.state;
    if (healthy + 30 > 100) {
      this.setState({
        healthy: 100,
      });
      return;
    }
    this.setState({
      healthy: healthy + 30,
    });
  };

  handleWorkStat = () => {
    const { smart } = this.state;
    if (smart === 0)
      return;
    this.setState({
      smart: smart - 1,
    });
  };

  handleWork = () => {
    const { smart } = this.state;
    if (smart + 30 > 100) {
      this.setState({
        smart: 100,
      });
      return;
    }
    this.setState({
      smart: smart + 30,
    });
  };

  componentDidMount() {
    this.sleepId = setInterval(this.handleSleepStat, 1000);
    this.eatId = setInterval(this.handleEatStat, 1000);
    this.washId = setInterval(this.handleWashStat, 1000);
    this.workId = setInterval(this.handleWorkStat, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.sleepId);
    clearInterval(this.eatId);
    clearInterval(this.washId);
    clearInterval(this.exerciseId);
    clearInterval(this.workId);
  }

  handleOveralStatus = () => {
    const { hungry, clean, healthy, smart } = this.state;
    if (hungry >= 30 && clean >= 30 && healthy >= 20 && smart >= 10)
      return <div>-Your pet is happy</div>
    return;
  }

  handleHungryStatus = () => {
    const { hungry } = this.state;
    if (hungry < 30)
      return <div>-Your pet is hungry</div>
    return;
  }

  handleCleanStatus = () => {
    const { clean } = this.state;
    if (clean < 30)
      return <div>-Your pet need a shower</div>
    return;
  }

  handleHealthyStatus = () => {
    const { healthy } = this.state;
    if (healthy < 20)
      return <div>-Your pet is tired</div>
    return;
  }

  handleSmartStatus = () => {
    const { smart } = this.state;
    if (smart < 10)
      return <div>-Your pet is stupid</div>
    return;
  }


  render() {
    const { hungry, clean, healthy, smart } = this.state;
    return (
      <div className="pet-interaction-wrapper">
        <div className="button-wrapper">
          <button className="eatBtn" onClick={this.handleHungry}>Eat</button>
          <button className="washBtn" onClick={this.handleClean}>Wash</button>
          <button className="exerciseBtn" onClick={this.handleExercise}>Exercise</button>
          <button className="sleepBtn" onClick={this.handleSleep}>Sleep</button>
          <button className="codeBtn" onClick={this.handleWork}>Code</button>
        </div>
        <div className="display-wrapper">
          <div className="display">Hungry: {hungry}/100</div>
          <div className="display">Clean: {clean}/100</div>
          <div className="display">Healthy: {healthy}/100</div>
          <div className="display">Smart: {smart}/100</div>
        </div>
        <div>Trạng thái</div>
        {this.handleOveralStatus()}
        {this.handleHungryStatus()}
        {this.handleHealthyStatus()}
        {this.handleSmartStatus()}
        {this.handleCleanStatus()}
      </div>
    )
  }
}
