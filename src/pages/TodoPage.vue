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
import _ from 'lodash'
import { mapGetters, mapState } from 'vuex'
import TodoItem from 'components/TodoItem'
import { TASK_COMPLETED_TASKS, TASK_TODO_TASKS } from 'src/store/store_types/getters'

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
    todoItemCompletedChange (event) {
      const {
        id,
        completed
      } = event
      const index = _.findIndex(this.tasks, (x) => x.id === id)
      this.tasks[index].completed = completed
    }
  }
}
</script>
