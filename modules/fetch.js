const baseUrl = "https://scrum-board-4eb67-default-rtdb.europe-west1.firebasedatabase.app/tasks";
const header = {
    "Content-type": "application/json; charset=UTF-8"
};

async function getScrumBoardTasks() {
    const url = baseUrl + '.json'
    console.log(url)

    const response = await fetch(url);
    const tasks = await response.json();
    // console.log(tasks)
    return tasks;
}

async function postToDoTask(task) {
    const url = baseUrl + '.json'
    // console.log(url)

    const options = {
        method: "POST",
        body: JSON.stringify(task),
        headers: header
    }

    const response = await fetch(url, options);
    const info = await response.json();

    // console.log(info);
    // console.log(task)

}

async function patchTaskToInProgress(id, assignedToPerson) {
    const url = baseUrl + `/${id}.json`;
    console.log(url)
    // console.log(JSON.stringify(done))
    // console.log(assignedToPerson)

    const options = {
        method: "PATCH",
        body: JSON.stringify(assignedToPerson),
        headers: header
    }
    console.log(options);
    const response = await fetch(url, options);
    const data = await response.json();


    // console.log(data);
}

async function patchTaskToDone(id, moveTaskToDone) {
    const url = baseUrl + `/${id}.json`;
    // console.log(url);

    const options = {
        method: "PATCH",
        body: JSON.stringify(moveTaskToDone),
        headers: header
    }
    console.log(options);
    const response = await fetch(url, options);
    const data = await response.json();


    // console.log(data);
}

async function deleteTask(id) {
    const url = baseUrl + `/${id}.json`;
    const options = {
        method: "DELETE",
    }

    const res = await fetch(url, options);
    const info = await res.json();

    // console.log(info);
}

export { getScrumBoardTasks, postToDoTask, patchTaskToInProgress, patchTaskToDone, deleteTask }