import React, { Component } from 'react';
import './PetSimulation.css';
import PetImage from '../PetImage/PetImage';
import PetInteraction from '../PetInteraction/PetInteraction';

export default class PetSimulation extends Component {
  render() {
    return (
      <div>
        <PetImage />
        <PetInteraction />
      </div>
    )
  }
}
