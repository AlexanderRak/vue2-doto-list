<template>
   <button
      class="todo__checkbox-button"
   >
   </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CheckBoxButton extends Vue {
   // props

   // fields

   // watchers

   // emits

   // hooks

   // computed

   // methods

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
</style>
