<template>
  <q-dialog v-model="visible">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form>
          <q-input outlined label="Task" v-model="task.name" :rules="[val=>!!val]"></q-input>

          <q-input outlined v-model="task.dueDate" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="task.dueDate" landscape>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input outlined v-model="task.dueTime" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="task.dueTime" landscape>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat/>
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" color="negative" @click="cancelEditor"/>
        <q-btn flat label="Save" @click="saveTask"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { TASK_ADD_EDIT_TASK } from 'src/store/store_types/actions'
import { TASK_GET_TASK_BY_ID } from 'src/store/store_types/getters'

export default {
  name: 'TaskEditor',
  props: {
    visible: { type: Boolean },
    id: { type: String }
  },
  emits: ['editorCanceled', 'editorSaved'],
  data: () => ({
    title: 'Add Task',
    task: {
      id: '',
      name: 'Task',
      completed: false,
      dueDate: '01-01-1999',
      dueTime: '01:01'
    }
  }),
  computed: {
    ...mapGetters({
      getTaskById: TASK_GET_TASK_BY_ID
    })
  },
  methods: {
    ...mapActions({
      addEditTask: TASK_ADD_EDIT_TASK
    }),
    saveTask () {
      // save task into store
      this.addEditTask(this.task)

      // emit event
      this.$emit('editorSaved')
    },
    cancelEditor () {
      this.$emit('editorCanceled')
    }
  },
  watch: {
    visible (newVal) {
      if (newVal && this.id) {
        console.log('TaskId: ', this.id)
        this.title = 'Edit Task'

        // find the task
        this.task = { ...this.getTaskById({ id: this.id }) }
      } else if (newVal) {
        this.title = 'Add Task'
        this.task = {
          id: null,
          name: '',
          completed: false,
          dueDate: '',
          dueTime: ''
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
