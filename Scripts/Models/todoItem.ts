/// <reference path='../_all.ts' />

module toDoApp {
    'use strict';

    export class TodoItem {
        constructor(
            public title: string,
            public completed: boolean
            ) { }
    }
}