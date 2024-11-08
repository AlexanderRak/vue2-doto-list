<template>
   <div class="todo__list-item">
      <div class="todo__list-grid">
         <div class="todo__list-grid-item">
            <div class="todo__list-item-text">
               {{ task.title }}
            </div>
         </div>
         <div class="todo__list-grid-item">
            <CheckBoxButton/>
         </div>
         <div class="todo__list-grid-item">
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
      this.$emit('delete-selected-task', this.task.id);
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
      &__list-grid
         display: grid
         grid-template-columns: 1fr 22px 22px
         gap: 12px
      &__list-item-text
         color: #9E78CF
         font-size: 18px
</style>
