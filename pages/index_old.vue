<template>
  <div>
    {{currentDate }}
  </div>
</template>

<script>
import Sortable from "sortablejs";
import timeline from "../components/timeline.vue";
export default {
  components: { timeline },
  name: "IndexPage",
  mounted() {

    var dt = new Date(); 
    var mon = dt.getMonth() +1; 
    var day = dt.getDate()
     mon < 10 ? mon = '0' + mon : mon
     day < 10  ? day = '0' + day : day
    
    console.log(mon, day); 
    this.currentDate = mon  + '' + day + '' + dt.getFullYear()
    this.$router.push('/' + this.currentDate)
   
  }, 
  data() {
    return {
      currentDate: ''
    }
  },
};
</script>

<style scoped>
.gridCointainer {
  display: grid;
  grid-template-columns: 30% 70%;
}
.timeslot {
  background: brown;
  padding: 10px;
  margin: 5px 0px;
  flex-grow: 1;
}

.task {
  background: green;
  padding: 10px;
  margin: 5px 0px;
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 4px 0px;
}

.controls span {
  margin: 1px;
  background: brown;
  padding: 10px;
}

.slot {
  display: flex;
}
</style>
