<template>
  <div>
      <h2>Bar组件</h2>
      <p>{{count}}</p>
      <p>剩余任务数量：{{remaining}}</p>
      <button @click="increment">自增</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    },
    computed: {
        // count() {
        //     return this.$store.state.count
        // }
        ...mapState({
            count: 'count'
        }),
        ...mapGetters({
            remaining: 'remaining'
        })
    }
}
</script>

<style>