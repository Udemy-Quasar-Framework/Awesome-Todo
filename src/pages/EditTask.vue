<template>
  <h1>Edit task</h1>
</template>

<script>
export default {
  name: 'EditTask',
  props: {
    taskId: { type: Number }
  },
  mounted () {
    console.log(this.taskId)
  }
}
</script>

<style scoped>

</style>
