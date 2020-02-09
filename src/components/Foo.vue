<template>
  <div>
      <h2>Foo组件</h2>
      <p>{{count}}</p>
      <p>{{message}}</p>
      <p>剩余任务数量：{{remaining}}</p>
      <p>{{getTodoById(2).text}}</p>
      <button @click="increment">自增</button>
      <button @click="changeMessage">改变message</button>
      <button @click="asycIncrment">异步自增</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    // data() {
    //     return {
    //         count: 0
    //     }
    // },
    methods: {
        increment() {
            this.$store.commit('increment', {
                num: 2
            })
        },
        // ...mapMutations(['SOME_MUTATIONS'])
        ...mapMutations({
            changeMessage: 'SOME_MUTATIONS'
        }),
        asycIncrment() {
            this.$store.dispatch('increment', {
                num: 3
            })
        }
    },
    computed: {
        // count() {
        //     return this.$store.state.count
        // },
        // message() {
        //     return this.$store.state.message
        // },
        ...mapState({
            count: state => state.count,
            message: 'message',
            // remaining: state => {
            //     return state.todos
            //         .filter(item => !item.done)
            //         .length
            // }
        }),
        ...mapGetters([
            'remaining',
            'getTodoById'
        ])

    }
}
</script>

<style>

</style>