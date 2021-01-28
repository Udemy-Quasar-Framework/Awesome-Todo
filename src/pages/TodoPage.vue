// TodoPage

<template>
  <q-page class="q-pa-md">
    <h4>Tasks Todo</h4>
    <q-list>
      <TodoItem v-for="t in todoTasks"
                :task="t"
                :key="t.id"
                @edit-task="showTaskEditor(t.id)"
      ></TodoItem>
    </q-list>
    <q-list>
      <h4>Tasks Completed</h4>
      <TodoItem v-for="t in completedTasks"
                :task="t"
                :key="t.id"
                @edit-task="showTaskEditor(t.id)"
      ></TodoItem>
    </q-list>

    <div class="absolute-bottom text-center">
      <q-btn round
             dense
             color="primary"
             icon="add"
             size="24px"
             class="q-mb-sm"
             @click="showTaskEditor(null)"
      ></q-btn>
    </div>

    <TaskEditor :visible="addTaskModalVisible"
                :id="currentTaskId"
                @editorSaved="hideTaskEditor"
                @editorCanceled="hideTaskEditor"
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
    addTaskModalVisible: false,
    currentTaskId: null
  }),
  computed: {
    ...mapGetters({
      todoTasks: TASK_TODO_TASKS,
      completedTasks: TASK_COMPLETED_TASKS
    })
  },
  methods: {
    showTaskEditor (id) {
      this.currentTaskId = id
      this.addTaskModalVisible = true
    },
    hideTaskEditor () {
      this.addTaskModalVisible = false
    }
  }
}
</script>
