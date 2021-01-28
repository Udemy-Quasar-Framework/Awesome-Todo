import _ from 'lodash'
import { uid } from 'quasar'

export function taskCompleteChange (state, payload) {
  const {
    id,
    completed
  } = payload

  const index = _.findIndex(state.tasks, (t) => t.id === id)
  state.tasks[index].completed = completed
}

export function deleteTask (state, payload) {
  const index = _.findIndex(state.tasks, (t) => t.id === payload.id)
  state.tasks.splice(index, 1)
}

export function addEditTask (state, payload) {
  const {
    id,
    name,
    dueDate,
    dueTime
  } = payload

  if (id) {
    const idx = _.findIndex(state.tasks, (t) => t.id === id)
    const task = state.tasks[idx]
    task.name = name
    task.dueDate = dueDate
    task.dueTime = dueTime
  } else {
    const id = uid()
    state.tasks.push({
      id,
      name,
      dueDate,
      dueTime,
      completed: false
    })
  }
}
