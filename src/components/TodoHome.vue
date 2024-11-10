<template>
   <div class="todo__wrapper">
      <TodoForm
         @add-task="addNewTask"
      />
      <TodoList
         v-if="tasks.length"
         :tasks="tasks"
         @delete-selected-task="removedSelectTask"
         @completed-selected-task="completedSelectTask"
      />
      <TodoCompliteList
         v-if="completedTasks.length"
         :completed-tasks="completedTasks"
      />
      <TodoDeleteList
         v-if="removedTasks.length"
         :delete-tasks="removedTasks"
      />
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoForm from './todo/TodoForm.vue';
import TodoList from './todo/TodoList.vue';
import TodoCompliteList from './todo/TodoCompliteList.vue';
import TodoDeleteList from './todo/TodoDeleteList.vue';
import { Task } from './types';

@Component({
   components: {
      TodoForm,
      TodoList,
      TodoCompliteList,
      TodoDeleteList,
   },
})
export default class TodoHome extends Vue {
   // props

   // fields
   tasks: Task[] = [];

   completedTasks: Task[] = [];

   removedTasks: Task[] = [];

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
         removed: false,
         uiComponent: true,
      };
      this.tasks.push(newTask);
   }

   removedSelectTask(taskId: number, taskRemoved: boolean, uiComponentTask: boolean) {
      this.tasks = this.tasks.filter((task) => {
         if (task.id === taskId) {
            const removedTasks = {
               ...task,
               removed: taskRemoved,
               uiComponent: uiComponentTask,
            };
            this.removedTasks.push(removedTasks);
            return false;
         }
         return true;
      });
   }

   completedSelectTask(taskId: number, taskCompleted: boolean, uiComponentTask: boolean) {
      this.tasks = this.tasks.filter((task) => {
         if (task.id === taskId) {
            const completedTask = {
               ...task,
               completed: taskCompleted,
               uiComponent: uiComponentTask,
            };
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
