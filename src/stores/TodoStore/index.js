import { observable, action, computed } from 'mobx';

class observableTodoStore {
	@observable todos = [];

  @observable filter = 'all';

	@computed get allTodos() {
		if(this.filter === 'pending') {
			return this.todos.filter(
				todo =>  todo.completed === false
			);
		} else if (this.filter === 'completed') {
			return this.todos.filter(
				todo =>  todo.completed === true
			);
		} else {
			return this.todos;
		}
  }


	@action addTodo(task) {
		this.todos.push({
			task: task,
			completed: false
		});
	}

  @action toggleCompleted(index) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  @action setFilter(filterName) {
    this.filter = filterName;
  }
}


export const TodoStore = new observableTodoStore();
