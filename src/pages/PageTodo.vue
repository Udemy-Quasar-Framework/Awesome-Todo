<template>
  <q-page class="q-pa-md">
    <q-list bordered>
      <q-item v-ripple
              clickable
              v-for="task in tasks"
              :key="task.id"
              @click="task.completed = !task.completed"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed"></q-checkbox>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{task.name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
const taskList = [
  {
    id: 1,
    name: 'Buy bananas',
    completed: false
  },
  {
    id: 2,
    name: 'Buy beans',
    completed: false
  },
  {
    id: 3,
    name: 'Buy apples',
    completed: false
  }
]

export default {
  name: 'PageIndex',
  data: () => ({
    tasks: taskList
  })
}
</script>
