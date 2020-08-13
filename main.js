/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = (todo) => todo.text;
const getPriority = (todo) => todo.priority;
const isComplete = (todo) => todo.complete;
const isHighPriority = (todo) => todo.priority ===2;






/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = (toDos) => toDos.map(getTodoName);
const priorities = (toDos) => toDos.map(getPriority);
const justComplete = (toDos) =>toDos.filter(isComplete);
const justNotComplete =(toDos) => toDos.filter(todo => !todo.complete);
const priority1Only = (toDos) => toDos.filter(todo => todo.priority===1);
const priority2Only = (toDos) => toDos.filter(isHighPriority);
const priorityArr = ["Low", "High"];
const namesAndPriorities = (toDos) =>toDos.map(todo =>todo.text +' - ' +priorityArr[todo.priority-1])







// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
