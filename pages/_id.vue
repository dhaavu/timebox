<template>
  <div>
    <div class="gridCointainer">
      <div class="container taskList" ref="draggableContainer1">
        <div class="task">task 1</div>
        <div class="task">task 2</div>
        <div class="task">task 3</div>
      </div>
      <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <div class="container timeline">
        <toolbar @timelineChanged="timelineChange"></toolbar>
        <div class="timeslots">
          <div
            v-for="slot in pageData[0].slots"
            :key="slot.id"
            :id="slot.id"
            class="slotContainer"
          >
            <div class="interval">{{ slot.start }} - {{ slot.end }} am</div>
            <div class="slot">
              <div ref="draggableContainer2" class="timeslot"></div>
              <div class="controls">
                <span class="resize-minus"> - </span>
                <span class="resize-plus"> + </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="console">
    
   </div>
   <div>{{pageData}}</div>
  </div>
</template>

<script>
import Sortable from "sortablejs";
import timeline from "../components/timeline.vue";
export default {
  components: { timeline },
  name: "IndexPage",
  mounted() {
    var el = this.$refs.draggableContainer1;
    var sortable = Sortable.create(el, { group: "hello" });
    var el2 = this.$refs.draggableContainer2;
    console.log(el2);
    el2.forEach((item) => {
      Sortable.create(item, { group: "hello" });
    });
 //   this.getData()
 //  this.getPageData()
  
  },
  async fetch(){
    const loadData = await new Promise(function(resolve, reject ){
      try{
         this.getData(); 
      this.getPageData(); 
      console.log(this.pageData)
      resolve("OK"); 
      }
      catch(e){
        reject(e);  
      }
     

    })
  }, 
  data() {
    return {
      id:'', 
      data:[{}], 
      today: "", 
      pageData: {}, 
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
    timelineChange() {
      console.log("Coming from the index page " + this.$store.state.timeslot);
    },
    getDatesBetween(startDate, endDate){
    const dates = [];

    // Strip hours minutes seconds etc.
    let currentDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );

    while (currentDate <= endDate) {
        dates.push(currentDate);

        currentDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + 1, // Will increase month if over range
        );
    }

    return dates;
    }, 
    getPageData(){
      var date = this.$route.params.id; 
      date = date.substring(0,2) + '/' + date.substring(2,4) + '/' + date.substring(4,8); 
      this.id = date; 
      this.pageData = this.data.filter(day => day.day == date); 
    
    }, 
     toHoursAndMinutes(totalMinutes) {
        var hours = Math.floor(totalMinutes / 60);
        var minutes = totalMinutes % 60;
        if(hours > 12){
          hours = Math.floor(hours/12)
          return hours + ':' + minutes + "PM";
        }
        if(hours <10){
          return '0' + hours + ':' + minutes + "AM";
        }
         
        
    }, 
    getData(){
    const dates = this.getDatesBetween(new Date(2023,0,1), new Date(2023,11,31))
    console.log(dates); 
    var todaysDate = new Date(); 
    var todayDay = todaysDate.getDate(); 
    if (todayDay <10) 
    todayDay = "0" + todayDay 
    var todayMonth = todaysDate.getMonth() +1; 
    if (todayMonth <10) 
    todayMonth = "0" + todayMonth 
    this.today = todayMonth + '/' + todayDay + '/' + todaysDate.getFullYear();  
    var slotsArr=[]
    var start = 0; 
    for (var i=0; i<48; i++)
    {
        var slot = {"id": i+1, "start":start , "end": start+30}; 
        slotsArr.push(slot); 
        start = start+30; 
    }
    dates.forEach((date)=> {
      var month= date.getMonth() +1; 
      if(month <10) 
      month = "0" + month;  
      var day= date.getDate() +1; 
      if(day <10) 
      day = "0" + day; 
      var slot = {"day": month + "/" + date.getDate() +  "/" + date.getFullYear() , "slots": slotsArr}
      this.data.push(slot)
    })
    this.id = this.$route.params.id; 
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
