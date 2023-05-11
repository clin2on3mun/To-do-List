const { editTask } = require('../_mocks_/testing.js');

describe('Add and remove', () => {
  
  test('edit task description', () => {
    const expand = document.createElement('span');
    expand.textContent = 'hello';
    document.body.append(expand);
    expect(editTask(expand)).toBeTruthy();
  });
  
});