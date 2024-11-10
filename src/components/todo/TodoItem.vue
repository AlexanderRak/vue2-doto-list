<template>
   <div
      class="todo__list-item"
      :class="{
         completed: task.completed,
         removed: task.removed,
      }"
   >
      <div class="todo__list-grid">
         <div class="todo__list-grid-item">
            <div
               class="todo__list-item-text"
               :class="{
                  completed: task.completed,
                  removed: task.removed,
               }"
            >
               {{ task.title }}
            </div>
         </div>
         <div v-if="task.uiComponent" class="todo__list-grid-item">
            <CheckBoxButton
               :task="task"
               @completed-selected-task="completedSelectedTask"
            />
         </div>
         <div v-if="task.uiComponent" class="todo__list-grid-item">
            <DeleteButton
               :task="task"
               @delete-selected-task="deleteSelectedTask"
            />
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from '../types';
import DeleteButton from '../ui/button/DeleteButton.vue';
import CheckBoxButton from '../ui/button/CheckBoxButton.vue';

@Component({
   components: {
      DeleteButton,
      CheckBoxButton,
   },
})
export default class TodoItem extends Vue {
   // props
   @Prop({ required: true }) readonly task!: Task

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods
   deleteSelectedTask() {
      this.$emit('delete-selected-task', this.task.id, true, false);
   }

   completedSelectedTask() {
      this.$emit('completed-selected-task', this.task.id, true, false);
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__list-item
         background: #15101C
         border-radius: 10px
         padding: 22px
         &.completed
            box-shadow: inset 0 0 0px 1px #78CFB0
         &.removed
            box-shadow: inset 0 0 0px 1px red
      &__list-grid
         display: grid
         grid-template-columns: 1fr 22px 22px
         gap: 12px
      &__list-item-text
         color: #9E78CF
         font-size: 18px
         &.completed
            color: #78CFB0
            text-decoration: line-through
         &.removed
            color: red
</style>
