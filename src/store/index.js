import { createStore } from 'vuex';

const getTodosFromLocalStorage = function () {
	const todos = JSON.parse(localStorage.getItem('todos'));
	return todos;
};

const store = createStore({
	state() {
		return {
			todos: getTodosFromLocalStorage() || [],
		};
	},
	getters: {
		getTodos: state => state.todos,
	},
	mutations: {
		addTodo(state, payload) {
			state.todos.push(payload);
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		removeTodo(state, payload) {
			state.todos = [...state.todos].filter(x => x.id !== payload.id);
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
	},
	actions: {},
});

export default store;
