<template>
<div>
  <div class="gridCointainer">
      <div class="container" ref="draggableContainer1">
  <div class="task" >
    Task 1
  </div>
    <div class="task" >
    Task 2
  </div>
    <div class="task" >
    Task 3
  </div>
</div>

<div class="container" ref="draggableContainer2">
  <timeline></timeline> 
  <div class="timeline">
  <div class="task" >
    Task 4
  </div>
  </div>

</div>
  </div>

</div>
</template>

<script>
import Sortable from 'sortablejs';
import timeline from '../components/timeline.vue';
export default {
  components: { timeline },
  name: 'IndexPage', 
  mounted(){
  var el =   this.$refs.draggableContainer1; 
  var sortable = Sortable.create(el, {group:"hello"});
  var el2 =   this.$refs.draggableContainer2; 
  var sortable = Sortable.create(el2, {group:"hello"});
  
  }
}
</script>

<style scoped>

.gridCointainer{

  display: grid; 
  grid-template-columns: 30% 70%;

}
.timeline{
  background-color: brown;
}
</style>
