const { addTask, removeTask } = require('../_mocks_/addAndRemove.js');

describe('Add and remove', () => {
  test('add item', () => {
    expect(addTask({ tasks: 'go to church', completed: false, index: 1 })).not.toBe([]);
  });
  test('add item', () => {
    expect(addTask({ tasks: 'go to school', completed: true, index: 2 })).not.toBe([]);
  });
  test('add item', () => {
    expect(addTask({ tasks: 'go to school', completed: true, index: 3 })).toHaveLength(3);
  });
  test('remove Task', () => {
    expect(removeTask(0)).toBeTruthy();
  });
  test('remove Task', () => {
    expect(removeTask(0)).toHaveLength(1);
  });
});