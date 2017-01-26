import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import { Card } from 'material-ui/Card';
import { utils } from '../../assets/glamor/utils';
import { List } from 'material-ui/List';
import TodoItem from './TodoItem';
import {Tabs, Tab} from 'material-ui/Tabs';

@inject('TodoStore')
@observer
class Todo extends Component {
  constructor(props) {
    super(props);
    this.setFilter = this.setFilter.bind(this);
  }

  setFilter(filterName) {
    this.props.TodoStore.setFilter(filterName);
  }

  render() {
    return (
      <div>
        <Card {...utils.card}>
          <Tabs>
             <Tab label="Todos" onClick={() => this.setFilter('all')}></Tab>
             <Tab label="Pendentes" onClick={() => this.setFilter('pending')}></Tab>
             <Tab label="Feitos" onClick={() => this.setFilter('completed')}></Tab>
          </Tabs>
          <List>
            {
              this.props.TodoStore.allTodos.map(
                (todo, idx) => <TodoItem key={idx}
                                         index={idx}
                                         todo={todo}></TodoItem>
              )
            }
          </List>
        </Card>
      </div>
    )
  }
}

export default Todo;
