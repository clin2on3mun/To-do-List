export const addTask = (description) => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);

  let activity = [];
  if (get) {
    activity = get;
  }
  activity.push({
    description,
    completed: false,
    index: activity.length,
  });

  localStorage.setItem('toDoList', JSON.stringify(activity));
};

export const removeTask = (indexNo) => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);

  let activity = [];
  if (get) {
    activity = get;
  }
  activity.splice(indexNo, 1);
  localStorage.setItem('toDoList', JSON.stringify(activity));
};