import _ from 'lodash'

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
