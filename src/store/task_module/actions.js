import { TASK_COMPLETE_CHANGE } from 'src/store/store_types/mutations'

export function taskCompleteChange (context, payload) {
  const { commit } = context

  commit(TASK_COMPLETE_CHANGE, payload)
}
