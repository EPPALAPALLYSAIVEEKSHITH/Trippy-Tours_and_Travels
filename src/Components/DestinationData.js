import "./DestinationStyles.css"

import React, { Component } from 'react'

export class DestinationData extends Component {
    
  render() {
    return (
    <div className={this.props.cName}>
        <div className='description-text'>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className='image'>
            <img className="img1" alt='J&k' src={this.props.src1}/>
            <img className="img2" alt='J&K' src={this.props.src2}/>
        </div>
    </div>
    )
  }
}

export default DestinationData