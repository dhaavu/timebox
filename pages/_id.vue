<template>
  <div>
    <div class="gridCointainer">
      <div class="container taskList" ref="draggableContainer1">
        <div class="task">task 1</div>
        <div class="task">task 2</div>
        <div class="task">task 3</div>
      </div>
      <div class="container timeline">
        <div class="timeslots" v-if="pageData.length > 0">
          <div
            v-for="(slot, index) in pageData[0].slots"
            :key="slot.id"
            :id="slot.id"
            class="slotContainer"
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
          </div>
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
export default {
  components: { timeline },
  name: "IndexPage",

  async fetch() {
    var id = this.$route.params.id;

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
    //   console.log(JSON.stringify(day), error);

    this.pageData = day;
  },

  mounted() {
    if (this.dateNotFound == true) {
      this.$router.push("/notfound/404");
    } else {
      var el = this.$refs.draggableContainer1;
      var sortable = Sortable.create(el, { group: "hello" });
      var el2 = this.$refs.draggableContainer2;
      //console.log(el2);
      if (el2) {
        el2.forEach((item) => {
          Sortable.create(item, { group: "hello" });
        });
        var el3 = this.$refs.scrollToslot20[0];
        el3.scrollIntoView({ block: "nearest", inline: "start" });
        console.log(el3);
        window.scrollTo(0, 0);
      }
    }
  },
  data() {
    return {
      id: "",
      data: [{}],
      today: "",
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
    timelineChange() {
      console.log("Coming from the index page " + this.$store.state.timeslot);
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

.timeslots {
  height: 90vh;
  overflow: scroll;
  box-shadow: -2rem 0 3rem -2rem #000;
}

.taskList {
  box-shadow: -2rem 0 3rem -2rem #000;
}
</style>
