import React, { Component } from 'react'

class QuizQuestionButton extends Component {

  handeClick() {
    this.props.clickHandler(this.props.button_text);
  }

  render() {
    return (
      <li key={this.props.key}>
        <button onClick={this.handeClick.bind(this)}>{this.props.button_text}</button>
      </li>
    )
  }
}

export default QuizQuestionButton;
