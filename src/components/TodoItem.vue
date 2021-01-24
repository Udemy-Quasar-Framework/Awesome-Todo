<template>
  <q-item v-ripple
          clickable
          @click=" completedData = ! completedData"
  >
    <q-item-section side>
      <q-checkbox v-model=" completedData"></q-checkbox>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column">
          <q-icon name="event"
                  size="18px"
                  class="q-mr-xs"></q-icon>
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">{{ dueDate }}</q-item-label>
          <small>
            <q-item-label caption class="row justify-end">{{ dueTime }}</q-item-label>
          </small>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    completed: { type: Boolean },
    name: { type: String },
    id: { type: Number },
    dueDate: { type: String },
    dueTime: { type: String }
  },
  data: () => ({
    mounted: false,
    completedData: false
  }),
  watch: {
    /**
     * Remember the watch is triggered from the beginning. This will cause a loop if you do not manage
     * the mounted with the $nextTick
     * */
    completedData () {
      if (this.mounted) {
        console.log(this.mounted)

        const task = {
          id: this.id,
          name: this.name,
          completed: this.completedData,
          dueDate: this.dueDate,
          dueTime: this.dueTime
        }
        this.$emit('complete-change', task)
      }
    }
  },
  mounted () {
    this.completedData = this.completed
    this.$nextTick(() => {
      this.mounted = true
    })
  }
}
</script>

<style scoped lang="scss">
.q-item {
  border: $grey-6 solid 1px;
  margin: 5px 0;
}
</style>
