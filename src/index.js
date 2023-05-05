import './style.css';

import { display } from './modules/display.js';
import { addTask } from './modules/addAndRemove.js';
import { complete, clear } from './modules/checkAndClear.js';

window.addEventListener('DOMContentLoaded', () => {
  display();
  const addButton = document.querySelector('.add');
  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const activityValue = document.getElementById('activity').value;
    const description = activityValue;
    addTask(description);
    document.getElementById('activity').value = '';
    complete();
    display();
  });
  const clearBtn = document.querySelector('.clear');
  clearBtn.addEventListener('click', clear);
});
