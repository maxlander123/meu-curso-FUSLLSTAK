let taskList = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');

// Carrega tarefas do JSON
fetch('tasks.json')
    .then(response => response.json())
    .then(tasks => {
        tasks.forEach(task => {
            addTaskToList(task);
        });
    });

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let newTask = { text: taskText, completed: false };
        addTaskToList(newTask);
        taskInput.value = '';

        // Atualiza o JSON
        updateJSON();
    }
}

function addTaskToList(task) {
    let taskItem = document.createElement('li');
    taskItem.textContent = task.text;
    if (task.completed) {
        taskItem.classList.add('completed');
    }
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        task.completed = !task.completed;

        // Atualiza o JSON
        updateJSON();
    });
    taskList.appendChild(taskItem);
}

function updateJSON() {
    let tasks = [];
    let taskItems = taskList.querySelectorAll('li');
    taskItems.forEach(taskItem => {
        tasks.push({ text: taskItem.textContent, completed: taskItem.classList.contains('completed') });
    });

    // Atualiza o JSON
    fetch('tasks.json', {
        method: 'PUT',
        body: JSON.stringify(tasks),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}