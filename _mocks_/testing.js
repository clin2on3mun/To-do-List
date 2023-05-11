const activity = [];

const addTask = (task) => {
  activity.push(task);
  return activity;
};

const removeTask = (index) => {
  activity.splice(index, 1);
  return activity;
};

const editTask = (task) => {
  const editSpace = document.createElement('input');
  editSpace.id = 'edit';
  editSpace.type = 'text';
  editSpace.value = task.innerHTML;
  task.innerHTML = '';
  task.parentNode.insertBefore(editSpace, task.nextSibling);
  return editSpace;
}

export const complete = (index) => {
  
  activity.forEach((item) => {
    if (item.index === index) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    }
  });

};

exports.addTask = addTask;
exports.removeTask = removeTask;
exports.editTask = editTask;