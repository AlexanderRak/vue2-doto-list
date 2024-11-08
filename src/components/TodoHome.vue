<template>
   <div class="todo__wrapper">
      <TodoForm
         @add-task="addNewTask"
      />
      <TodoList
         :tasks="tasks"
         @delete-selected-task="handleDeleteTask"
      />
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoForm from './todo/TodoForm.vue';
import TodoList from './todo/TodoList.vue';

@Component({
   components: {
      TodoForm,
      TodoList,
   },
})
export default class TodoHome extends Vue {
   // props

   // fields
   tasks = [
      {
         id: 1,
         title: 'Таска 1',
         completed: false,
      },
      {
         id: 2,
         title: 'Таска 2',
         completed: false,
      },
      {
         id: 3,
         title: 'Таска 3',
         completed: false,
      },
   ]

   // watchers

   // emits

   // hooks

   // computed

   // methods
   addNewTask(title: string) {
      const newTask = {
         id: Date.now(),
         title,
         completed: false,
      };
      this.tasks.push(newTask);
   }

   handleDeleteTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__wrapper
         max-width: 700px
         margin: 0 auto
         padding: 3rem 0
         display: flex
         flex-direction: column
         gap: 60px
</style>
