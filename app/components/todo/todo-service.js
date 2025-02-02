import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/jordan/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos.map(todo => new Todo(todo))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}


	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				console.log(res.data.data)
				_setState('todos', res.data.data)
				// WHAT DO YOU DO WITH THE RESPONSE?
			})
			.catch(err => _setState('error', err))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				console.log(res.data)
				this.getTodos()
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL
		// TODO flip
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
		.then(res => {
			this.getTodos()
			console.log("todo done", todo.completed)
			
		})
		.catch(err => _setState('error', err.response.data))
	}


	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				console.log(res.data.message)
				this.getTodos()
			})
			.catch(err => console.error(err))
		// This one is on you to write.... 
		// The http method is delete at the todoId
	}

}
