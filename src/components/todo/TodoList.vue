<template>
   <div class="todo__list">
      <div class="todo__list-title">
         All tasks - {{ tasks.length }}
      </div>
      <div class="todo__list-flex">
         <TodoItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @delete-selected-task="deleteSelectedTask"
            @completed-selected-task="completedSelectedTask"
         />
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from '../types';
import TodoItem from './TodoItem.vue';

@Component({
   components: {
      TodoItem,
   },
})
export default class TodoList extends Vue {
   // props
   @Prop({ required: true }) readonly tasks!: Task[]

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods
   deleteSelectedTask(taskId: number, taskRemoved: boolean, uiComponentTask: boolean) {
      this.$emit('delete-selected-task', taskId, taskRemoved, uiComponentTask);
   }

   completedSelectedTask(taskId: number, taskCompleted: boolean, uiComponentTask: boolean) {
      this.$emit('completed-selected-task', taskId, taskCompleted, uiComponentTask);
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__list-title
         font-size: 1.5rem
         color: #fff
         padding-bottom: 16px
      &__list-flex
         display: flex
         flex-direction: column
         gap: 15px
</style>
