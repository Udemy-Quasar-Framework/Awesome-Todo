// TodoPage

<template>
  <q-page class="q-pa-md">
    <h4>Tasks Todo</h4>
    <q-list>
      <TodoItem v-for="t in todoTasks"
                :task="t"
                :key="t.id"
      ></TodoItem>
    </q-list>
    <q-list>
      <h4>Tasks Completed</h4>
      <TodoItem v-for="t in completedTasks"
                :task="t"
                :key="t.id"
      ></TodoItem>
    </q-list>

    <div class="absolute-bottom text-center">
      <q-btn round
             dense
             color="primary"
             icon="add"
             size="24px"
             class="q-mb-sm"
             @click="showAddTaskModal"
      ></q-btn>
    </div>

    <TaskEditor :visible="addTaskModalVisible"
                @editorSaved="hideAddTaskModal"
                @editorCanceled="hideAddTaskModal"
    ></TaskEditor>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoItem from 'components/TodoItem'
import { TASK_COMPLETED_TASKS, TASK_TODO_TASKS } from 'src/store/store_types/getters'
import TaskEditor from 'pages/TaskEditor'

export default {
  name: 'PageIndex',
  components: {
    TaskEditor,
    TodoItem
  },
  data: () => ({
    addTaskModalVisible: true
  }),
  computed: {
    ...mapGetters({
      todoTasks: TASK_TODO_TASKS,
      completedTasks: TASK_COMPLETED_TASKS
    })
  },
  methods: {
    showAddTaskModal () {
      this.addTaskModalVisible = true
    },
    hideAddTaskModal () {
      this.addTaskModalVisible = false
    }
  }
}
</script>
