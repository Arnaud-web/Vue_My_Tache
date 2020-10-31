import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                title: "todo title 1",
                completed: false
            },{
                title: "todo title 2",
                completed: false
            }
        ]
    },
    getters: {
        completedTodosLength(state){
            return state.todos.filter(todo => {
                return todo.completed === true;
            }).length;
        },
        pendingTodosLength(state){
            return state.todos.filter(todo => {
                return todo.completed === false;
            }).length;
        },
        pendingTodos(state){
            return state.todos.filter(todo => {
                return todo.completed === false;
            });
        },
    
        

    },
    mutations:{
        NEW_TODO(state,newTodo){
            state.todos.push({
                title:newTodo,
                completed: false
            })
        }, 
         DELETE_TODO(state,todo){
           let index = state.todos.indexOf(todo)
           state.todos.splice(index,1)
        },
        COMPLETED_STATU_TODO(state,todo){
            todo.completed = !todo.completed
        },
        DELETE_COMPLETED_TODO(state){
            state.todos = state.todos.filter(todo => !todo.completed)
        }
    },
    actions:{
        addNewTodo({commit},newTodo){
            if(newTodo !=""){
            commit('NEW_TODO',newTodo)
            }
        },
        deleteTodo({commit},todo){
            commit('DELETE_TODO',todo)
        },
        completedStatuTodo({commit},todo){
            commit('COMPLETED_STATU_TODO',todo)
        },
        deletAllTodoCompleted({commit}){
            commit ('DELETE_COMPLETED_TODO')
        }
    }
})