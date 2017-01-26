import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Input from '../Input/Input';
import Todo from '../Todo/Todo';
import { observer, inject } from 'mobx-react';

@inject('TodoStore')
@observer
class Home extends Component {
  render() {
    return (
      <div>
        <AppBar title="Strider TODO" showMenuIconButton={false}/>
        <Input />
        <Todo />
      </div>
    )
  }
}

export default Home;
