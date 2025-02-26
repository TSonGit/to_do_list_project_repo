function addTask() {
    const newElement = document.createElement("li");
    newElement.append(promptUser());
    document.getElementById("task_list").append(newElement);
};

function promptUser() {
    let text;
  let person = prompt("Please title your task:", "Task Name");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = person;
  }
  return text;
}