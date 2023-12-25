<template>
    <div>
        <div class="taskbar">
          <div class="title">
            <h3>Task List</h3> 
          </div>
         <span class="material-symbols-outlined pointer add" @click="addTask"> add</span>
        </div>
        <addTask :data="newTaskData" :modal="newModal" @close="newModal=true"></addTask>
     
    </div>
</template>
<script>
import addTask from './addTask.vue';
export default {
  components: { addTask },
  data() {
    return {
        newModal: true, 
        newTaskData: {title: "", 
      description: "", 
      due: "", 
      priority: "", 
      status:"", 
      id: "" }
    }
  }, 
    methods: {
        addTask(){
            this.newModal = false; 
            // this.$store.commit('updateTaskData', {id:'', title:'', description:'', due:'', status:'new', priority:'P4'} )
            // this.$store.commit('updateModal', false)

        }
    },
    computed: {

    }
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