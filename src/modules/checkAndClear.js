/* eslint-disable */
import { display } from './display.js';

export const complete = (index) => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);
  let activity = [];
  if (get) {
    activity = get;
  }
  activity.forEach((item) => {
    if (item.index === index) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    }
  });
  localStorage.setItem('toDoList', JSON.stringify(activity));
  display();
};

export const clear = () => {
  const lists = localStorage.getItem('toDoList');
  const get = JSON.parse(lists);
  let activity = [];
  if (get) {
    activity = get;
  }
  const activities = activity.filter((item) => item.completed === false);
  localStorage.setItem('toDoList', JSON.stringify(activities));
  display();
};
