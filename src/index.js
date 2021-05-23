document.addEventListener("DOMContentLoaded", () => {

  const createTaskForm = document.getElementById("create-task-form");
  
  
  createTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const tasks = document.getElementById("tasks");
    const li = document.createElement('li');
    const newTaskDescription = document.getElementById('new-task-description')
    tasks.appendChild(li);
    li.innerHTML = newTaskDescription.value;

    
  })
})
