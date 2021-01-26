// TodoPage

<template>
  <q-page class="q-pa-md">
    <h4>Tasks Todo</h4>
    <q-list>
      <TodoItem v-for="t in todoTasks"
                v-bind="t"
                :key="t.id"
                @complete-change="todoItemCompletedChange"
      ></TodoItem>
    </q-list>
    <q-list>
      <h4>Tasks Completed</h4>
      <TodoItem v-for="t in completedTasks"
                v-bind="t"
                :key="t.id"
                @complete-change="todoItemCompletedChange"
      ></TodoItem>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import TodoItem from 'components/TodoItem'
import { TASK_COMPLETED_TASKS, TASK_TODO_TASKS } from 'src/store/store_types/getters'
import { TASK_COMPLETE_CHANGE } from 'src/store/store_types/actions'

export default {
  name: 'PageIndex',
  components: {
    TodoItem
  },
  data: () => ({}),
  computed: {
    ...mapState({
      tasks: (s) => s.task.tasks
    }),
    ...mapGetters({
      todoTasks: TASK_TODO_TASKS,
      completedTasks: TASK_COMPLETED_TASKS
    })
  },
  methods: {
    ...mapActions({
      taskCompleteChange: TASK_COMPLETE_CHANGE
    }),
    todoItemCompletedChange (event) {
      const {
        id,
        completed
      } = event
      this.taskCompleteChange({
        id,
        completed
      })
    }
  }
}
</script>
