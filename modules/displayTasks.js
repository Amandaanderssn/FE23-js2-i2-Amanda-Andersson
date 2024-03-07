import { createAndAppend } from "./createElement.js";

export function displayAllTasks(tasks) {
    const taskBox = document.querySelector('#scrumBoardBox-ToDo');
    const inProgressBox = document.querySelector('#scrumBoardBox-inProgress');
    const doneBox = document.querySelector('#scrumBoardBox-done');

    taskBox.innerHTML = 'To do:';
    inProgressBox.innerHTML = 'In progress: ';
    doneBox.innerHTML = 'Done: '

    for (const key in tasks) {
        const task = tasks[key];
        displayToDoTasks(task, key)
    }

}

function displayToDoTasks(task, id) {

    if (task.status === 'to do') {

        const toDoTaskBoxDiv = document.querySelector('#scrumBoardBox-ToDo');
        const eachTaskCard = createAndAppend(toDoTaskBoxDiv, 'div');

        const taskContent = createAndAppend(eachTaskCard, 'p', task.task);
        const assignToForm = createAndAppend(eachTaskCard, 'form', "");
        const assignToPerson = createAndAppend(assignToForm, 'input')
        const assignToButton = createAndAppend(assignToForm, 'button', "Assign to: ")

        eachTaskCard.id = id
        eachTaskCard.classList.add('eachTaskCard')

        assignToForm.classList.add('assignToForm')
        assignToForm.setAttribute('id', 'assignToForm')

        assignToButton.classList.add('assignToButton');

        if (task.category == 'ux') {
            eachTaskCard.classList.add('uxChoice')
        } else if (task.category == 'dev frontend') {
            eachTaskCard.classList.add('frontendChoice')
        } else eachTaskCard.classList.add('backendChoice');


    }
    else if (task.status === 'in progress') {
        const inProgressBoxDiv = document.querySelector('#scrumBoardBox-inProgress');
        const eachTaskCard = createAndAppend(inProgressBoxDiv, 'div');

        const taskContent = createAndAppend(eachTaskCard, 'p', task.task);
        const assignedTo = createAndAppend(eachTaskCard, 'p', "Assigned to: " + task.assigned);

        const doneButton = createAndAppend(eachTaskCard, 'button', 'Move to done ->')

        eachTaskCard.id = id;
        eachTaskCard.classList.add('eachTaskCard')

        doneButton.classList.add('doneButton')

        if (task.category == 'ux') {
            eachTaskCard.classList.add('uxChoice')
        } else if (task.category == 'dev frontend') {
            eachTaskCard.classList.add('frontendChoice')
        } else eachTaskCard.classList.add('backendChoice');


    } else {
        const doneBoxDiv = document.querySelector('#scrumBoardBox-done');
        const eachTaskCard = createAndAppend(doneBoxDiv, 'div');

        const taskContent = createAndAppend(eachTaskCard, 'p', task.task);
        const assignedTo = createAndAppend(eachTaskCard, 'p', "Assigned to: " + task.assigned);

        const removeButton = createAndAppend(eachTaskCard, 'button', 'Delete X')

        eachTaskCard.id = id;
        eachTaskCard.classList.add('eachTaskCard')
        removeButton.classList.add('removeButton')

        if (task.category == 'ux') {
            eachTaskCard.classList.add('uxChoice')
        } else if (task.category == 'dev frontend') {
            eachTaskCard.classList.add('frontendChoice')
        } else eachTaskCard.classList.add('backendChoice');

    }
}