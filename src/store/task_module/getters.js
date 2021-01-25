import _ from 'lodash'

export function todoTasks (state) {
  const tasks = state.tasks
  return _.filter(tasks, (t) => !t.completed)
}

export function completedTasks (state) {
  const tasks = state.tasks
  return _.filter(tasks, (t) => t.completed)
}
