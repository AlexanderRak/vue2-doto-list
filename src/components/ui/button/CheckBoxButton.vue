<template>
   <button
      class="todo__checkbox-button"
      @click="completedSelectedTask"
   >
   </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Task } from '../../types';

@Component
export default class CheckBoxButton extends Vue {
   // props
   @Prop({ required: true }) readonly task!: Task

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods
   completedSelectedTask() {
      this.$emit('completed-selected-task', this.task.id, true);
   }

   // handlers
}
</script>

<style lang="sass">
   .todo
      &__checkbox-button
         position: relative
         cursor: pointer
         background: transparent
         border: 0
         width: 22px
         height: 22px
         padding: 0
         transition: .3s
         &::before
            content: ""
            background-image: url('~@/assets/icon-check.svg')
            background-repeat: no-repeat
            width: 22px
            height: 22px
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
         &:hover
            &::before
            -webkit-filter: drop-shadow(2px 4px 5px #9E78CF)
            filter: drop-shadow(2px 4px 5px #9E78CF)
</style>
