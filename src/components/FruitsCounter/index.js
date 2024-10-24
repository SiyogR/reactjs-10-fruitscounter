// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrementMango = () => {
    const {mango, banana} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncrementBanana = () => {
    const {mango, banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="count">
            Bob ate <span className="style">{mango}</span>mangoes
            <span className="style">{banana}</span>bananas
          </h1>
          <div className="fruits-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="img"
              alt="mango"
            />

            <button className="button" onClick={this.onIncrementMango}>
              Eat Mango
            </button>

            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="img"
              alt="banana"
            />
            <button className="button" onClick={this.onIncrementBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
