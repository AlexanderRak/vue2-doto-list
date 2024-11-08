<template>
   <button
      type="submit"
      class="todo__add-button"
   >
   </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AddButton extends Vue {
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
      &__add-button
         background: #9E78CF
         border-radius: 10px
         border: 0
         position: relative
         cursor: pointer
         &::before
            content: ""
            background-image: url('~@/assets/icon-plus.svg')
            background-repeat: no-repeat
            width: 22px
            height: 22px
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
</style>
