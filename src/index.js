import './style.css';

const listOfActivity = document.querySelector('ul');
const activities = [
  {
    index: 1,
    description: 'go shopping',
    state: true,
  },
  {
    index: 2,
    description: 'go to the gym',
    state: false,
  },
  {
    index: 3,
    description: 'go to school',
    state: true,
  },
];

const display = () => {
  activities.forEach((activity) => {
    listOfActivity.innerHTML
  += `<li id="${activity.index}"><input type="checkbox" required>
  <span>${activity.description}</span></li>`;
  });
};

display();
