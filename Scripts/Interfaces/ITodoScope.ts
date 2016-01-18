/// <reference path='../_all.ts' />

module toDoApp {
	export interface ITodoScope extends ng.IScope {
		todos: TodoItem[];
		newTodo: string;
		editedTodo: TodoItem;
		originalTodo: TodoItem;
		remainingCount: number;
		doneCount: number;
		allChecked: boolean;
		reverted: boolean;
		statusFilter: { completed?: boolean };
		vm: todo_controller;
	}
}