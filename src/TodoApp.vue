<template>
   <div id="TodoApp">
      <TodoHome/>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoHome from './components/TodoHome.vue';

@Component({
   components: {
      TodoHome,
   },
})
export default class TodoApp extends Vue {
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
body
   margin: 0
   background: #0D0714
*
   box-sizing: border-box
#TodoApp
   font-family: Avenir, Helvetica, Arial, sans-serif
   -webkit-font-smoothing: antialiased
   -moz-osx-font-smoothing: grayscale
   height: 100%
   width: 100%
</style>
