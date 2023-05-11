const activity = [{ task: 'go to mall', index: 1, completed: false }, { task: 'go to gym', index: 2, completed: false }, { task: 'eat lunch', index: 3, completed: false }];

const editTask = (task) => {
  const editSpace = document.createElement('input');
  editSpace.id = 'edit';
  editSpace.type = 'text';
  editSpace.value = task.innerHTML;
  task.innerHTML = '';
  task.parentNode.insertBefore(editSpace, task.nextSibling);
  return editSpace;
};

const complete = (index) => {
  const status = activity.find((item) => item.index === index);
  status.completed = true;
  return status;
};

const clearAll = () => {
  const activities = activity.filter((item) => item.completed === false);
  return activities;
};

exports.editTask = editTask;
exports.complete = complete;
exports.clearAll = clearAll;