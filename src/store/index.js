import Vue from 'vue'
import Vuex from 'vuex'
import {SOME_MUTATIONS} from './mutation-types'

Vue.use(Vuex)

const store =  new Vuex.Store({
    state: {
        count:10,
        message: '',
        todos: [
            {id: 1, text: '吃饭', done: true},
            {id: 2, text: '睡觉', done: true},
            {id: 3, text: '打豆豆', done: false},
            {id: 4, text: '写代码', done: false},
        ]
    },
    mutations: {
        increment(state, payload = 1) {
            state.count += payload.num
        },
        [SOME_MUTATIONS] (state) {
            state.message = 'hello World!'
        }
    },
    getters: {
        remaining: state => {
            return state.todos
                .filter(item => !item.done)
                .length
        },
        getTodoById(state) {
            return id => {
                return state.todos.find(item => item.id === id)
            }
        }
    },
    actions: {
        increment({commit}, {num = 1}) {
            setTimeout(function() {
                commit('increment', {
                    num
                })
            }, 2000)
        }
    }
})

export default store