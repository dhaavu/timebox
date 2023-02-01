<template>
    <div>
        <div class="taskbar">
          <div class="title">
            <h3>Task List</h3> 
          </div>
         <span class="material-symbols-outlined pointer add" @click="addTask"> add</span>
        </div>
        <addTask :modal="modal" @closeModal="modal=true"></addTask>
    </div>
</template>
<script>
import addTask from './addTask.vue';
export default {
  components: { addTask },
    data() {
        return {
            modal:true
        }
    },  
    methods: {
        addTask(){
            this.modal=false; 

        }
    },
}
</script>
<style scoped>
.taskbar{
    display: flex; 
    justify-content: space-between;
    margin-bottom:10px; 
}
.title{
    display: flex; 
    justify-content: center;
}
h3{
    margin: 0px; 
}
.pointer{
    cursor: pointer;
}
.add{
    border:1px solid rgb(185, 183, 183); 
}

</style>