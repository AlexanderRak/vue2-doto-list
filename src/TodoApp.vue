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
export default class TodoApp extends Vue { }
</script>

<style lang="sass">
body
   margin: 0
   width: 100%
   height: 100vh
*
   box-sizing: border-box
#TodoApp
   font-family: Avenir, Helvetica, Arial, sans-serif
   -webkit-font-smoothing: antialiased
   -moz-osx-font-smoothing: grayscale
   background: #0D0714
   height: 100%
   width: 100%
</style>
