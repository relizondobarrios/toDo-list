/// <reference path='../_all.ts' />

module toDoApp {
	'use strict';

	/**
	 * The main controller for the app. The controller:
	 * - retrieves and persists the model via the todoStorage service
	 * - exposes the model to the template and provides event handlers
	 */
	export class todo_controller {
		private todos: TodoItem[];
		
		public static $inject = [
			'$scope'
		];
		constructor(
			private $scope: ITodoScope
		) {
			$scope.vm = this;
		};
	}
};