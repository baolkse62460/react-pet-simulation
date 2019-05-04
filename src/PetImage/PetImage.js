import React, { Component } from 'react';
import './PetImage.css';
import doge from '../img/DogeAvatar.jpg';


export default class PetImage extends Component {
  render() {
    return (
      <div className="avatar-wrapper">
        <img src={doge}/>
      </div>
    )
  }
}
