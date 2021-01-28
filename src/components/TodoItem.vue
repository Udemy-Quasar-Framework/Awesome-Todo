<template>
  <q-item v-ripple
          clickable
          @click="taskCompleteChange({...task, completed: !task.completed})"
  >
    <q-item-section side>
      <q-checkbox :value="task.completed"
                  @input="taskCompleteChange({...task, completed: !task.completed})"
      ></q-checkbox>
    </q-item-section>
    <q-item-section>
      <q-item-label :class="[{'text-strikethrough': task.completed}]">{{ task.name }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column">
          <q-icon name="event"
                  size="18px"
                  class="q-mr-xs"></q-icon>
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">{{ task.dueDate }}</q-item-label>
          <small>
            <q-item-label caption class="row justify-end">{{ task.dueTime }}</q-item-label>
          </small>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="flex">
        <q-btn flat round dense
               color="negative"
               icon="delete"
               @click.prevent.stop="promptToDelete"
        ></q-btn>
        <q-btn flat round dense
               color="secondary"
               icon="edit"
               @click.stop="promptToEdit"
        ></q-btn>
        <q-btn flat round dense
               color="primary"
               icon="add"
        ></q-btn>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

import { TASK_COMPLETE_CHANGE, TASK_DELETE_TASK } from 'src/store/store_types/actions'

export default {
  name: 'TodoItem',
  props: {
    // completed: { type: Boolean },
    // name: { type: String },
    // id: { type: Number },
    // dueDate: { type: String },
    // dueTime: { type: String }
    task: { type: Object }
  },
  methods: {
    ...mapActions({
      taskCompleteChange: TASK_COMPLETE_CHANGE,
      deleteTask: TASK_DELETE_TASK
    }),
    promptToDelete () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete this task?',
        ok: {
          push: true,
          label: 'Yes'
        },
        cancel: {
          push: true,
          label: 'No',
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask({ id: this.task.id })
      })
    },
    promptToEdit () {
      this.$router.push({ name: 'edit_task', params: { taskId: this.task.id } })
    }
  }
  // data: () => ({
  //   mounted: false,
  //   completedData: false
  // }),
  // watch: {
  /**
   * Remember the watch is triggered from the beginning. This will cause a loop if you do not manage
   * the mounted with the $nextTick
   * */
  // completedData () {
  //   if (this.mounted) {
  //     const task = {
  //       id: this.id,
  //       name: this.name,
  //       completed: this.completedData,
  //       dueDate: this.dueDate,
  //       dueTime: this.dueTime
  //     }
  //     this.$emit('complete-change', task)
  //   }
  // }
  // },
  // mounted () {
  //   this.completedData = this.completed
  //   this.$nextTick(() => {
  //     this.mounted = true
  //   })
  // }
}
</script>

<style scoped lang="scss">
.q-item {
  border: $grey-6 solid 1px;
  margin: 5px 0;
}

.text-strikethrough {
  text-decoration: line-through;
}
</style>
