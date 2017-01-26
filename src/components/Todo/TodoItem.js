import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { observer, inject } from 'mobx-react';

@inject('TodoStore')
@observer
class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleCheck = this.handleCheck.bind(this);

    this.state = {
      todo: this.props.todo,
      index: this.props.index
    };
  }

  handleCheck() {
    const index = this.state.index;
    this.props.TodoStore.toggleCompleted(index);
  }

  render() {
    const todo = this.state.todo;

    return (
      <div>
        <ListItem
          leftCheckbox={<Checkbox checked={todo.completed}/>}
          primaryText={todo.task}
          onClick={this.handleCheck}
        />
      </div>
    )
  }
}

export default TodoItem;