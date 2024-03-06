import { createAndAppend } from "./modules/createElement.js"
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
    console.log(newTask.id);

    console.log(newTask.category)

    // if(newTask.category == "ux"){
    //     newTask.style.backgroundColor = "rgb(245, 172, 114)";

    // }

    postToDoTask(newTask)
        .then(getScrumBoardTasks)
        .then(displayAllTasks)
    // .catch("error")

    // postToDoTask(newTask).then(()=>{
    //     getScrumBoardTasks().then(displayAllTasks)
    // });

    // console.log(newTask)
})

toDoBoxDiv.addEventListener('submit', (event) => {
    event.preventDefault();

    let id;
    id = event.target.closest('div').id;
    console.log(id);

    const assignedToPerson = document.querySelector(`#${id} input`).value

    console.log(assignedToPerson)

    const taskIsAssigned = {
        assigned: assignedToPerson,
        status: "in progress"
    }
    console.log(taskIsAssigned);
    form.reset();

    // console.log('det funkar');

    patchTaskToInProgress(id, taskIsAssigned)
        .then(getScrumBoardTasks)
        .then(displayAllTasks)
    // .catch("error")

    // patchTask(id, "testar om detta går").then((getScrumBoardTasks)=>{
    //     getScrumBoardTasks().then(displayAllTasks)
    // })
});

inProgressBoxDiv.addEventListener('click', (event) => {
    event.preventDefault();

    // const inProgressTasks = inProgressBoxDiv.querySelector('button')
    // console.log(event.target)
    // console.log(inProgressTasks)

    if (event.target.localName == 'button') {
        let id;
        id = event.target.closest('div').id;
        console.log(id);

        // console.log(event.target.localName)

        const taskIsDone = {
            status: "done"
        }

        // console.log(taskIsDone)

        patchTaskToDone(id, taskIsDone)
            .then(getScrumBoardTasks)
            .then(displayAllTasks)
        // .catch("error")
    }
})

doneBoxDiv.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.localName == 'button') {
        let id;
        id = event.target.closest('div').id;

        const taskCardElement = document.querySelector(`#${id}`);

        deleteTask(id)
            .then(getScrumBoardTasks)
            .then(displayAllTasks)

        console.log(id)
    }


});

getScrumBoardTasks().then(displayAllTasks)

