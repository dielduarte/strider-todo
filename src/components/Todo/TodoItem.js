import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { observer } from 'mobx-react';

@observer
class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    const INDEX = this.props.index;
    this.props.TodoStore.toggleCompleted(INDEX);
  }

  render() {
    const todo = this.props.todo;

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
