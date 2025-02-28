// const { constants } = require("buffer");

function addTask() {
  const task_name_result = promptUser_TaskName();
  if (task_name_result) {
    console.log('in name if');
    const due_date_result = promptUser_DueDate();

    // Creates Elements.
    const newListElement = document.createElement("li");
    const newDivElement = document.createElement("div");
    const newParagraphElement = document.createElement("p");

    //If the user enters a valid task name into the prompt,
    //append those results to the proper elements, and 
    //have them show in the task_board.
    if (due_date_result) {
      console.log('in due if');
      const task_description_result = promptUser_TaskDescription();
      const task_status = 'Incomplete.';
      //Appends to Elements.
      newListElement.append(task_name_result);
      newListElement.append(newDivElement);
      newParagraphElement.append(task_description_result);
      newDivElement.append("> Task Description: ");
      newDivElement.append(newParagraphElement);

      //Appends to Document.
      document.getElementById("task_list").append(newListElement);

      //Sets the classlist of newDivElement to hidden as default.
      newDivElement.classList.add('hidden');

      //Adds attributes to Elements.
      //Upon being clicked, a div will switch between being
      //hidden or shown.
      newListElement.addEventListener("click", checkViewStatus);

      const form = createForm(task_name_result, task_description_result, task_status, due_date_result);
      console.log(form);
      submitNewForm(form);

    } else {
      //If the user enters an invalid due date, or cancels the request.
      window.alert("User did not include a valid due date or cancelled the request.");
    }
  } else {
    //If the user enters an invalid task name, or cancels the request.
    window.alert("User did not include a valid task name or cancelled the request.");
  }
};

//Prompts user for a task name, then returns it in a string.
function promptUser_TaskName() {
  let text;
  let person = prompt("Please title your task:", "Task Name");
  if (person != null && person != "") {
    text = person;
    return text;
  }
}

//Prompts the user for a task description, then returns it in a string.
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

function promptUser_DueDate() {
  let text;
  let person = prompt("Please enter a Due Datea:", "dd/mm/yy");
  if (person != null && person != "") {
    text = person;
    return text;
  }
};

function createForm(name, desc, stat, date) {
  console.log('ran from beginning of createForm.')
  //Create Form
  const newForm = document.createElement('form');
  newForm.classList.add('new_task')
  newForm.action = '/to-do_list/add_task';
  newForm.method = 'POST';

  //Create input: task_name
  const inputName = document.createElement('input1');
  inputName.type = 'text';
  inputName.name = 'task_name';
  inputName.append(name);
  newForm.appendChild(inputName);

  //Create input: task_desc
  const inputDesc = document.createElement('input2');
  inputDesc.type = 'text';
  inputDesc.name = 'task_desc';
  inputDesc.append(desc);
  newForm.appendChild(inputDesc);

  //Create input: task_stat
  const inputStat = document.createElement('input3');
  inputStat.type = 'text';
  inputStat.name = 'task_stat';
  inputStat.append(stat);
  newForm.appendChild(inputStat);

  //Create input: due_date
  const inputDate = document.createElement('input4');
  inputDate.type = 'text';
  inputDate.name = 'due_date';
  inputDate.append(date);
  newForm.appendChild(inputDate);

  document.body.appendChild(newForm);

  console.log('ran from bottom of createForm.')
}

//Finds the current classlist for the description_div: hidden or shown,
//then calls the appropriate function to swap them.
function checkViewStatus(event) {
  const theDiv = event.target.querySelector("div");
  console.log(event.target.querySelector("div"));
  if (theDiv.classList.contains('hidden')) {
    removeHidden_AddShown(theDiv);
  } else if (theDiv.classList.contains('shown')) {
    removeShown_AddHidden(theDiv);
  };
}

//removes the hidden classlist, and replaces it with shown.
function removeHidden_AddShown(element) {
  element.classList.remove("hidden");
  element.classList.add("shown");
}

//removes the shown classlist, and replaces it with hidden.
function removeShown_AddHidden(element) {
  element.classList.remove("shown");
  element.classList.add("hidden");
}

function submitNewForm(event) {
  const theForm = event.target.querySelector("form");
  console.log(event.target.querySelector("form"));
  if (theForm.classList.contains('new_task')) {
    theForm.submit();
  }
} 