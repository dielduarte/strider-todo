import React, {Component} from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { utils } from '../../assets/glamor/utils';

class Input extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      newTodoName: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodoName = this.state.newTodoName;
    this.props.TodoStore.addTodo(newTodoName);
    this.setState({
      newTodoName: ''
    });
  }

  handleChange(e) {
    this.setState({
      newTodoName: e.target.value
    });
  }

  render() {
    return (
      <div>
          <Card {...utils.card}>
            <form {...utils.p1} onSubmit={this.handleSubmit}>
              <TextField hintText="O que precisa ser feito ?"
                      floatingLabelText="O que precisa ser feito ?"
                      fullWidth={true}
                      value={this.state.newTodoName}
                      onChange={this.handleChange}/>
            </form>
          </Card>
      </div>
    )
  }
}

export default Input;
