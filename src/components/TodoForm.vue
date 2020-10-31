<template>
    <div>
        <input  class = "form-control" type = 'text' placeholder = ' ajouter une tache' v-model="newTodo" @keyup.enter = "addTodo(newTodo)" >
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            newTodo : ""
        };
    },
    methods: {
        ...mapActions({
            addNewTodo:'addNewTodo'
        }),
        addTodo(todo){
            this.addNewTodo(todo)
            this.newTodo = ""
        }
    },

    
}
</script>