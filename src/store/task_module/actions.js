import { TASK_COMPLETE_CHANGE, TASK_DELETE_TASK } from 'src/store/store_types/mutations'

export function taskCompleteChange (context, payload) {
  const { commit } = context

  commit(TASK_COMPLETE_CHANGE, payload)
}

export function deleteTask (context, payload) {
  context.commit(TASK_DELETE_TASK, payload)
}
