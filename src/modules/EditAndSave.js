export const editItem = (item) => {
  const editSpace = document.createElement('input');
  editSpace.id = 'edit';
  editSpace.type = 'text';
  editSpace.value = item.innerHTML;
  item.innerHTML = '';
  item.parentNode.insertBefore(editSpace, item.nextSibling);
};

export const saveItem = (item) => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);
  let activity = [];
  if (get) {
    activity = get;
  }

  const newValue = document.getElementById('edit').value;
  activity.forEach((task) => {
    if (item.description === task.description) {
      task.description = newValue;
    }
  });
  localStorage.setItem('toDoList', JSON.stringify(activity));
};
