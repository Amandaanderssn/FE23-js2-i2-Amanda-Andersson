import { getScrumBoardTasks, postToDoTask, patchTaskToInProgress, patchTaskToDone, deleteTask } from "./modules/fetch.js"
import { displayAllTasks } from "./modules/displayTasks.js"

const form = document.querySelector('.addNewTaskForm');

const toDoBoxDiv = document.querySelector('#scrumBoardBox-ToDo');
const inProgressBoxDiv = document.querySelector('#scrumBoardBox-inProgress');
const doneBoxDiv = document.querySelector('#scrumBoardBox-done');


//To be able to post a new task
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTask = {
        task: form.querySelector('input').value,
        category: form.querySelector('select').value,
        assigned: "none",
        status: "to do"
    }
    form.reset();

    let id;
    id = newTask.id;

    postToDoTask(newTask)
        .then(getScrumBoardTasks)
        .then(displayAllTasks)
});

toDoBoxDiv.addEventListener('submit', (event) => {
    event.preventDefault();

    let id;
    id = event.target.closest('div').id;

    const assignedToPerson = document.querySelector(`#${id} input`).value

    const taskIsAssigned = {
        assigned: assignedToPerson,
        status: "in progress"
    }

    form.reset();


    patchTaskToInProgress(id, taskIsAssigned)
        .then(getScrumBoardTasks)
        .then(displayAllTasks)
});

inProgressBoxDiv.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.localName == 'button') {
        let id;
        id = event.target.closest('div').id;
        console.log(id);

        const taskIsDone = {
            status: "done"
        }

        patchTaskToDone(id, taskIsDone)
            .then(getScrumBoardTasks)
            .then(displayAllTasks)
    }
});

doneBoxDiv.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.localName == 'button') {
        let id;
        id = event.target.closest('div').id;

        const taskCardElement = document.querySelector(`#${id}`);

        deleteTask(id)
            .then(getScrumBoardTasks)
            .then(displayAllTasks)
    }
});

getScrumBoardTasks().then(displayAllTasks)

