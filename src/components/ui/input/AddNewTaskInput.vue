<template>
   <input
      type="text"
      aria-label="Task"
      class="todo__input"
      placeholder="Add a new task..."
      :value="value"
      @input="onInput"
   >
</template>

<script lang="ts">
// eslint-disable-next-line object-curly-newline
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddNewTaskInput extends Vue {
   // props
   @Prop({ default: '' }) readonly value!: string;

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods
   onInput(event: Event) {
      const target = event.target as HTMLInputElement | null;
      if (target) {
         this.$emit('input', target.value);
      }
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__input
         border: 1px solid #3E1671
         color: #777777
         font-size: 16px
         height: 100%
         border-radius: 10px
         background: transparent
         padding: 0 0 0 1rem
</style>
