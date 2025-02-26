function addTask() {
  const task_name_result = promptUser_TaskName();
  // Creates Elements.
    const newListElement = document.createElement("li");
    const newDivElement = document.createElement("div");
    const newParagraphElement = document.createElement("p");

  //Adds ID's to Elements.
    // newListElement.classList.add("task_name");
    // newDivElement.classList.add("description_div");
    // newParagraphElement.classList.add("task_description");

  if (task_name_result) {
    const task_description_result = promptUser_TaskDescription();
    //Appends to Elements.
    newListElement.append(task_name_result);
    newListElement.append(newDivElement);
    newParagraphElement.append(task_description_result);
    newDivElement.append("> Task Description: ");
    newDivElement.append(newParagraphElement);

    //Appends to Document.
    document.getElementById("task_list").append(newListElement);
    // document.getElementsByClassName("task_name").append(newDivElement);

    newDivElement.classList.add('hidden');
    //Adds attributes to Elements.
    newListElement.addEventListener("click", checkViewStatus);
      
  } else {
    window.alert("User cancelled prompt.");
  }
};

function promptUser_TaskName() {
    let text;
  let person = prompt("Please title your task:", "Task Name");
  if (person != null && person != "") {
    text = person;
    return text;
  }
}

function promptUser_TaskDescription() {
    let text;
  let person = prompt("Please describe your task:", "Task Description");
  if (person == null || person == "") {
    text = "User did not include a description."
  } else {
    text = person;
  }
  return text;
}

function checkViewStatus(event) {
  const theDiv = event.target.querySelector("div");
  console.log(event.target.querySelector("div"));
  if (theDiv.classList.contains('hidden')) {
    removeHidden_AddShown(theDiv);
  } else if (theDiv.classList.contains('shown')) {
    removeShown_AddHidden(theDiv);
  };
}

function removeHidden_AddShown(element) {
  element.classList.remove("hidden");
  element.classList.add("shown");
}

function removeShown_AddHidden(element) {
  element.classList.remove("shown");
  element.classList.add("hidden");
}