<template>
  <div id="app">
    <h1>HelloWorld</h1>
    <foo/>
    <bar/>
  </div>
</template>

<script>
import Foo from './components/Foo'
import Bar from './components/Bar'
export default {
  name: 'app',
  components: {
    Foo,
    Bar
  }
}
</script>

<style>
</style>
