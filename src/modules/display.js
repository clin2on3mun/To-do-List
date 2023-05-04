import { removeTask } from './addAndRemove.js';
import { editItem, saveItem } from './EditAndSave.js';

const activityToDo = document.getElementById('activity-to-do');

export const display = () => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);
  let activity = [];
  if (get) {
    activityToDo.innerHTML = '';
    activity = get;
    activity.forEach((item, indexNo) => {
      item.index = indexNo;
      const list = document.createElement('li');
      list.id = indexNo;
      list.className = 'task';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checked';

      const description = document.createElement('span');
      description.className = 'tasks';
      description.textContent = item.description;

      const saveBtn = document.createElement('button');
      saveBtn.className = 'save-btn';
      saveBtn.textContent = 'save';
      saveBtn.style.display = 'none';

      const edit = document.createElement('button');
      edit.className = 'edit';
      edit.textContent = 'edit';

      edit.addEventListener('click', (e) => {
        const item = e.currentTarget.parentNode.children[1];
        edit.style.display = 'none';
        saveBtn.style.display = '';
        editItem(item);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'delete';
      deleteBtn.addEventListener('click', () => {
        removeTask(indexNo);
        display();
      });

      saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        saveBtn.style.display = 'none';
        edit.style.display = 'none';
        saveItem(item);
        display();
      });

      list.appendChild(checkbox);
      list.appendChild(description);
      list.appendChild(saveBtn);
      list.appendChild(edit);
      list.appendChild(deleteBtn);
      activityToDo.appendChild(list);
    });
    localStorage.setItem('toDoList', JSON.stringify(activity));
  }
};

export default display;