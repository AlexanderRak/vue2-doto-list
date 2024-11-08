<template>
   <form
      v-on:submit.prevent="addNewTask"
      class="todo__form"
   >
      <AddNewTaskInput v-model="newTask"/>
      <AddButton/>
   </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddNewTaskInput from '../ui/input/AddNewTaskInput.vue';
import AddButton from '../ui/button/AddButton.vue';

@Component({
   components: {
      AddNewTaskInput,
      AddButton,
   },
})
export default class TodoForm extends Vue {
   // props

   // fields
   newTask = '';

   // watchers

   // emits

   // hooks

   // computed

   // methods
   addNewTask() {
      if (this.newTask.trim()) {
         this.$emit('add-task', this.newTask.trim());
         this.newTask = '';
      }
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__form
         display: grid
         grid-template-columns: 1fr 40px
         grid-gap: 10px
         height: 40px
</style>
