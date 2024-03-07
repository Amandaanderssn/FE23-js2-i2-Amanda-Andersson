const baseUrl = "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks";
const header = {
    "Content-type": "application/json; charset=UTF-8"
};

async function getScrumBoardTasks() {
    const url = baseUrl + '.json'
    console.log(url)

    const response = await fetch(url);
    const tasks = await response.json();

    return tasks;
}

async function postToDoTask(task) {
    const url = baseUrl + '.json'

    const options = {
        method: "POST",
        body: JSON.stringify(task),
        headers: header
    }
    const response = await fetch(url, options);
    const info = await response.json();
};

async function patchTaskToInProgress(id, assignedToPerson) {
    const url = baseUrl + `/${id}.json`;

    const options = {
        method: "PATCH",
        body: JSON.stringify(assignedToPerson),
        headers: header
    }
    const response = await fetch(url, options);
    const data = await response.json();
};

async function patchTaskToDone(id, moveTaskToDone) {
    const url = baseUrl + `/${id}.json`;

    const options = {
        method: "PATCH",
        body: JSON.stringify(moveTaskToDone),
        headers: header
    }
    const response = await fetch(url, options);
    const data = await response.json();
};

async function deleteTask(id) {
    const url = baseUrl + `/${id}.json`;
    const options = {
        method: "DELETE",
    }
    const res = await fetch(url, options);
    const info = await res.json();
};

export { getScrumBoardTasks, postToDoTask, patchTaskToInProgress, patchTaskToDone, deleteTask }