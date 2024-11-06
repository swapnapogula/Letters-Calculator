import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="">
          <h1>Calculate the Letters You Entered</h1>
          <div className="input-card">
            <label htmlFor="letter" className="label">
              Enter the phrase
            </label>
            <input
              className="input"
              id="letter"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onChange}
            />
          </div>
          <br />
          <p className="btn">No.of letters: {count.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt=" letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
