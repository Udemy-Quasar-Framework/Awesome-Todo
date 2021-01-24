<template>
  <q-page class="q-pa-md">
    <h4>Tasks Todo</h4>
    <q-list>
      <TodoItem v-for="t in tasks"
                v-bind="t"
                :key="t.id"
                @complete-change="todoItemChecked"
      ></TodoItem>
    </q-list>
    <q-list>
      <h4>Tasks Completed</h4>
      <TodoItem v-for="t in completedTasks"
                v-bind="t"
                :key="t.id"
                @complete-change="todoItemUnchecked"
      ></TodoItem>
    </q-list>
  </q-page>
</template>

<script>
import TodoItem from 'components/TodoItem'
import _ from 'lodash/array'

const taskList = [
  {
    id: 1,
    name: 'Buy bananas',
    completed: false,
    dueDate: '01-22-2021',
    dueTime: '10:20'
  },
  {
    id: 2,
    name: 'Buy beans',
    completed: false,
    dueDate: '01-22-2021',
    dueTime: '10:20'
  },
  {
    id: 3,
    name: 'Buy apples',
    completed: false,
    dueDate: '01-22-2021',
    dueTime: '10:20'
  }
]

export default {
  name: 'PageIndex',
  components: {
    TodoItem
  },
  data: () => ({
    tasks: taskList,
    completedTasks: []
  }),
  methods: {
    todoItemChecked (event) {
      const { id } = event

      // delete from todos
      const index = _.findIndex(this.tasks, (x) => x.id === id)
      const tArray = this.tasks.splice(index, 1)

      // add in completed
      if (tArray.length > 0) {
        this.completedTasks.push({ ...event })
      }
    },
    todoItemUnchecked (event) {
      const { id } = event

      // delete from completed
      const index = _.findIndex(this.completedTasks, (x) => x.id === id)
      const tArray = this.completedTasks.splice(index, 1)

      // add in todos
      if (tArray.length > 0) {
        this.tasks.push({ ...event })
      }
    }
  }
}
</script>
