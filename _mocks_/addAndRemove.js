const activity = [];

const addTask = (task) => {
  activity.push(task);
  return activity;
};

const removeTask = (index) => {
  activity.splice(index, 1);
  return activity;
};
exports.addTask = addTask;
exports.removeTask = removeTask;