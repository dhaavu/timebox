<template>
  <div>
    <div class="gridCointainer">
     
      <div class="container taskList" ref="draggableContainer1">
        <taskbar></taskbar>
        <task class="task" :title="'Need to get alignment from '" :status="'new'" :desc="'This is the first task'" :due="'01/31/2023'" :priority="'P1'"></task>
        <task class="task" :title="'Need to get alignment from'" :status="'new'" :desc="'This is the first task'" :due="'01/31/2023'" :priority="'P1'"></task>
        <task class="task" :title="'Need to get alignment from'" :status="'new'" :desc="'This is the first task'" :due="'01/31/2023'" :priority="'P1'"></task>
        
      </div>
      <div class="container timeline">
         <toolbar :currentDate="currentDate"  @timelineChanged="timelineChangePlus"></toolbar>
        <div class="timeslots" v-if="pageData.length > 0">
          
          <timeslot 
          @timelineChangePlus="timelineChangePlus"
          @timelineChangeMinus="timelineChangeMinus"
           v-for="(slot, index) in pageData[0].slots"
            :key="slot.id"
            :id="slot.id"
            :start="slot.start"
            :end="slot.end"
            :class="'slotContainer ' + 'scrollToslot' + index "
            ref="scrollToslot"></timeslot>
          
          <!-- <div
            v-for="(slot, index) in pageData[0].slots"
            :key="slot.id"
            :id="slot.id"
            :class="'slotContainer ' + 'scrollToslot' + index "
            :ref="'scrollToslot' + index"
          >
            <div class="interval">
              {{ toHoursAndMinutes(slot.start) }} -
              {{ toHoursAndMinutes(slot.end) }}
            </div>
            <div class="slot">
              <div ref="draggableContainer2" class="timeslot"></div>
              <div class="controls">
                <span class="resize-minus"> - </span>
                <span class="resize-plus"> + </span>
              </div>
            </div>
          </div> -->
        </div>
        <div v-else>
          <h3>Date Not found </h3>
          
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="console"></div>
  </div> -->
</template>

<script>
import Sortable from "sortablejs";
import timeline from "../components/timeline.vue";
import { createClient } from "@supabase/supabase-js";
import timeslot from '../components/timeslot.vue';
export default {
  components: { timeline, timeslot },
  name: "IndexPage",
setup(){
console.log('setup')
}, 
  async mounted() {
   // console.log('in fetch')
    var id = ""

    if(this.$route.params.id){
      id = this.$route.params.id;
    }
    else{
      var dt = new Date(); 
    var mon = dt.getMonth() +1; 
    var d = dt.getDate()
     mon < 10 ? mon = '0' + mon : mon
     d < 10  ? d = '0' + d : d
    
    console.log(mon, d); 
    id = mon  + '' + d + '' + dt.getFullYear()
    }

    if (id.length != 8 || id.match(/^[0-9]+$/) == null) {
      console.log("error");
      this.dateNotFound = true;
    }

    var currentDt =
      id.substring(0, 2) + "/" + id.substring(2, 4) + "/" + id.substring(4, 8);
    //  var currentDt = this.getformattedDt(new Date());
    //  console.log(currentDt)
    const supabase = createClient(
      "https://ssviefrcxhjtuosoevlf.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzdmllZnJjeGhqdHVvc29ldmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMzAxMzQsImV4cCI6MTk4OTgwNjEzNH0.eeQUivtYPSd__AgkywoS18N8KiDAD1Jr3jq_P8xIXTc"
    );
    const { data: day, error } = await supabase
      .from("day")
      .select("*, slots(*)")
      .eq("name", currentDt)
      .order("start", { foreignTable: "slots", asc: true });
       console.log(JSON.stringify(day), error);

    this.pageData = day;
    if(this.pageData.length > 0)
    this.currentDate = this.pageData[0].name
  },

  updated() {
    console.log('in updated')
    if (this.dateNotFound == true) {
      this.$router.push("/notfound/404");
    } else {
      var el = this.$refs.draggableContainer1;
      console.log(el); 
      var sortable = Sortable.create(el, { group: "hello" });
      var el3 = this.$refs.scrollToslot[16].$el;
      console.log(el3); 
      
      
        el3.scrollIntoView({ block: "start", inline: "start" });
        console.log(el3);
        window.scrollTo(0, 0);
    }
  },
  data() {
    return {
      id: "",
      data: [{}],
      currentDate: "01/01/1970",
      pageData: [{}],
      dateNotFound: false,
      slots: [
        {
          id: "1",
          start: "8:00",
          end: "9:00",
        },
        {
          id: "2",
          start: "9:00",
          end: "10:00",
        },
        {
          id: "3",
          start: "10:00",
          end: "11:00",
        },
        {
          id: "4",
          start: "11:00",
          end: "12:00",
        },
      ],
    };
  },
  methods: {

    timelineChangePlus(data) {
      console.log(data);
      var result = this.pageData[0].slots.findIndex(item => item.id === data.id );
      if(result){
        for(var i=result; i< this.pageData[0].slots.length; i++){
          if(i==result){
            this.pageData[0].slots[i].end+=30; 
          }
          else if(i== this.pageData[0].slots.length){
            this.pageData[0].slots[i].start+=30;
          }
          else if(this.pageData[0].slots[i].end == 1440 ){
            this.pageData[0].slots.pop(); 
          break; 
          }
          
          else{
          this.pageData[0].slots[i].start+=30; 
          
          this.pageData[0].slots[i].end+=30; 
          }
  
        }
      }
     // console.log(result)
      console.log(this.pageData); 
    },
    timelineChangeMinus(data) {
      if(data.end - data.start >30){
         var result = this.pageData[0].slots.findIndex(item => item.id === data.id );
        
        for(var i=result; i< this.pageData[0].slots.length; i++){
            if(i==result){
              this.pageData[0].slots[i].end-=30; 
            }
            else {
              this.pageData[0].slots[i].start-=30; 
              this.pageData[0].slots[i].end-=30; 
             
            }
            
            
        }
        var newSlot = { id: '1', start:1410, end:1440}
        this.pageData[0].slots.push(newSlot); 
      }
      var result = this.pageData[0].slots.findIndex(item => item.id === data.id );
      // if(result){
      //   for(var i=result; i>=0 ; i--){
      //     if(i==result){
      //       this.pageData[0].slots[i].end-=30; 
      //     }
      //     else if(i== this.pageData[0].slots.length){
      //       this.pageData[0].slots[i].start-=30;
      //     }
      //     else if(this.pageData[0].slots[i].start == 0 )
      //     break; 
      //     else{
      //     this.pageData[0].slots[i].start-=30; 
          
      //     this.pageData[0].slots[i].end-=30; 
      //     }
  
      //   }
      // }
    

    },
    toHoursAndMinutes(totalMinutes) {
      var hours = Math.floor(totalMinutes / 60);
      var minutes = totalMinutes % 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hours > 12) {
        hours = Math.floor(hours / 12);
        return hours + ":" + minutes + " PM";
      }
      if (hours < 10) {
        return "0" + hours + ":" + minutes + " AM";
      }
      return hours + ":" + minutes + " AM";
    },
    getformattedDt(dt) {
      if (dt == null) {
        dt = new Date();
      }
      var dtMonth;
      dt.getMonth() < 9
        ? (dtMonth = "0" + (dt.getMonth() + 1))
        : (dtMonth = dt.getMonth());
      return dtMonth + "/" + dt.getDate() + "/" + dt.getFullYear();
    },
  },
};
</script>

<style scoped>
.gridCointainer {
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 5px;
  box-shadow: -2rem 0 3rem -2rem #000;
}
.timeslot {
  background: #236486eb;
  padding: 10px;
  margin: 5px 0px;
  flex-grow: 1;
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

.timeslots {
  height: 90vh;
  overflow: scroll;
  padding:10px; 
  margin:10px 0px; 
}

.taskList {
  box-shadow: -2rem 0 3rem -2rem #000;
}

.interval{
  padding-top:5px; 
}

.timeslot.task{
  background:rgba(35,100,134,0.92157)
}
</style>
