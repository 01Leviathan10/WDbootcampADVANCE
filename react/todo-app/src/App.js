import React, { Component } from 'react';
import './App.css';

const TodoItem = (props) => (
  <li>{props.text}</li>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      todos: [],
      newTodo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }



  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} />
    ));
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            className="todo-input"
            autoComplete="off"
            name="newTodo"
            placeholder="What needs to be don?"
            value={newTodo}
            onChange={(e) => this.setState({[e.target.name]:e.target.value})}
          />
          <button
            type="submit"
            className="save-button"
          >
            SAVE
          </button>
        </form>
        <div className="todo-contnet">
          <ol>{todos}</ol>
        </div>
      </div>

    );
  }
}

export default App;
