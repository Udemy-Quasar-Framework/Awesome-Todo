import { uid } from 'quasar'

export default function () {
  return {
    tasks: [
      {
        id: uid(),
        name: 'Buy bananas',
        completed: false,
        dueDate: '01-22-2021',
        dueTime: '10:20'
      },
      {
        id: uid(),
        name: 'Buy beans',
        completed: false,
        dueDate: '01-22-2021',
        dueTime: '10:20'
      },
      {
        id: uid(),
        name: 'Buy apples',
        completed: false,
        dueDate: '01-22-2021',
        dueTime: '10:20'
      }
    ]
  }
}
