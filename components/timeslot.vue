<template>
    <div>
         <div class="slotContainer" >
            <div class="interval">
              {{ toHoursAndMinutes(start) }} ({{start}}) -
              {{ toHoursAndMinutes(end) }} ({{end}})
            </div>
            <div class="slot">
              <div ref="draggableContainer2" class="timeslot"  :class="outsideOfWorkHours"></div>
              <div class="controls">
                <span class="resize-minus"> - </span>
                <span class="resize-plus" @click="plus"> + </span>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
import Sortable from "sortablejs";

export default {
    name:'timeslot', 
    props: {
            start:Number, 
            end:Number, 
            id:String
        }, 
    computed:{
      outsideOfWorkHours(){
        return this.start < 480 || this.end > 1020 ? 'offWork' : ''
      }

    }, 
    mounted(){
      var el2 = this.$refs.draggableContainer2;
      //console.log(el2);
      if (el2) {
       
          Sortable.create(el2, { group: "hello" });
        }
    }, 
    methods: {
       toHoursAndMinutes(totalMinutes) {
      var hours = Math.floor(totalMinutes / 60);
      var minutes = totalMinutes % 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hours > 12) {
        hours = hours-12;
        return hours + ":" + minutes + " PM";
      }
      if (hours < 10) {
        return "0" + hours + ":" + minutes + " AM";
      }
      return hours + ":" + minutes + " AM";
    },
    plus(){
      var data = {id: this.id, start: this.start, end: this.end}
      this.$emit('timelineChange', data); 
    }
    }
}
</script>

<style scoped>
.timeslot {
  background: #236486eb;
  padding: 10px;
  margin: 5px 0px;
  flex-grow: 1;
}
.slot {
  display: flex;
}

.timeslots {
  height: 90vh;
  overflow: scroll;
  padding:10px; 
  margin:10px 0px; 
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
.offWork{
  background: grey;
}
</style>