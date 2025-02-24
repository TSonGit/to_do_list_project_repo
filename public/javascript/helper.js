function addTask() {
    console.log("attempted to run addTask")
    const newElement = document.createElement("li");
    newElement.append("This is a new task.");
    document.getElementById("task_list").append(newElement);
};