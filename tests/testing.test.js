const { editTask, complete, clearAll } = require('../_mocks_/testing.js');

describe('edit', () => {
  test('edit task description', () => {
    const expand = document.createElement('span');
    expand.textContent = 'hello';
    document.body.append(expand);
    expect(editTask(expand)).toBeTruthy();
  });

  test('for update', () => {
    expect(complete(1)).toStrictEqual({ task: 'go to mall', index: 1, completed: true });
  });

  test('for update', () => {
    expect(complete(3)).toStrictEqual({ task: 'eat lunch', index: 3, completed: true });
  });

  test('clear all completed', () => {
    expect(clearAll()).toStrictEqual([{ task: 'go to gym', index: 2, completed: false }]);
  });
});