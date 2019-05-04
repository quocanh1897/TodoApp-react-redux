import React, {  Component } from "react";
import * as PropTypes from 'prop-types';
import TodoTextInput from "./TodoTextInput";
import autoBind from "react-autobind";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  constructor() {
    super();
    autoBind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo={true}
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
