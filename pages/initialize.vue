<template>
  <div>
    <button @click="generateSeedData">Generate Seed Data</button>
    <div class="response">
      {{ JSON.stringify(data) }}
    </div>
  </div>
</template>
<script>
import { createClient } from "@supabase/supabase-js";
export default {
  name: "init",
  data() {
    return {
      data: [{}],
      id: "",
    };
  },
  methods: {
    async generateSeedData() {
      const dates = this.getDatesBetween(
        new Date(2023, 0, 1),
        new Date(2023, 11, 31)
      );
      const supabase = createClient(
        "https://ssviefrcxhjtuosoevlf.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzdmllZnJjeGhqdHVvc29ldmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMzAxMzQsImV4cCI6MTk4OTgwNjEzNH0.eeQUivtYPSd__AgkywoS18N8KiDAD1Jr3jq_P8xIXTc"
      );
      // const supabase = createClient(
      //   "http://localhost:54321",
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
      // );
      console.log(dates);
      var todaysDate = new Date();
      var todayDay = todaysDate.getDate();
      if (todayDay < 10) todayDay = "0" + todayDay;
      var todayMonth = todaysDate.getMonth() + 1;
      if (todayMonth < 10) todayMonth = "0" + todayMonth;
      this.today = todayMonth + "/" + todayDay + "/" + todaysDate.getFullYear();
      var slotsArr = [];
      var start = 0;
      for (var i = 0; i < 48; i++) {
        var slot = { id: i + 1, start: start, end: start + 30 };
        slotsArr.push(slot);
        start = start + 30;
      }
      dates.forEach((date) => {
        var month = date.getMonth() + 1;
        if (month < 10) month = "0" + month;
        var day = date.getDate() + 1;
        if (day < 10) day = "0" + day;
        var slot = {
          day: month + "/" + date.getDate() + "/" + date.getFullYear(),
          slots: slotsArr,
        };
        this.data.push(slot);
      });
      this.id = this.$route.params.id;
      console.log(this.data); 
      for (const item in this.data) {
        console.log(this.data[item].day); 
        const { data: day, error } = await supabase
        .from("Day")
        .insert({ day: this.data[item].day })
        .select('*');
        for (var slot in this.data[item].slots) {
            const { data: slots, error } = await supabase 
        .from("slots")
        .insert({Day:day[0].id, start:this.data[item].slots[slot].start, end:this.data[item].slots[slot].end })
        }
        
        console.log(day); 
      }
      
    },
    getDatesBetween(startDate, endDate) {
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
          currentDate.getDate() + 1 // Will increase month if over range
        );
      }

      return dates;
    },
  },
};
</script>
