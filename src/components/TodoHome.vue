<template>
   <div class="todo__wrapper">
      <TodoForm
         @add-task="addNewTask"
      />
      <TodoList
         v-if="tasks.length"
         :tasks="tasks"
         @delete-selected-task="handleDeleteTask"
         @completed-selected-task="completedSelectTask"
      />
      <TodoCompliteList
         v-if="completedTasks.length"
         :completed-tasks="completedTasks"
      />
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoForm from './todo/TodoForm.vue';
import TodoList from './todo/TodoList.vue';
import TodoCompliteList from './todo/TodoCompliteList.vue';
import { Task } from './types';

@Component({
   components: {
      TodoForm,
      TodoList,
      TodoCompliteList,
   },
})
export default class TodoHome extends Vue {
   // props

   // fields
   tasks: Task[] = [];

   completedTasks: Task[] = [];

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

   completedSelectTask(taskId: number, taskCompleted: boolean) {
      this.tasks = this.tasks.filter((task) => {
         if (task.id === taskId) {
            const completedTask = { ...task, completed: taskCompleted };
            this.completedTasks.push(completedTask);
            return false;
         }
         return true;
      });
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
