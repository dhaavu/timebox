<template>
    <div>
        <div class="container">
            <div class="query">
                <textarea v-model="query" name="query" id="query" cols="80%" rows="10"></textarea>
                <button @click="getData">submit</button>
            </div>
            <div class="queryResults">
                <textarea name="results" id="results" cols="80%" rows="30" :value="JSON.stringify(result, null, 4)"></textarea>
            </div>
        </div>
        
    </div>
</template>
<script>
import { createClient } from "@supabase/supabase-js";
export default {
    name:'query', 
    data() {
        return {
            result:[], 
            query:"", 
            error:[]
        } 
        
    },
    methods: {
      async  getData(){
            const supabase = createClient(
              "https://ssviefrcxhjtuosoevlf.supabase.co",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzdmllZnJjeGhqdHVvc29ldmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMzAxMzQsImV4cCI6MTk4OTgwNjEzNH0.eeQUivtYPSd__AgkywoS18N8KiDAD1Jr3jq_P8xIXTc"
            );
        
       var query = this.query + `.then((data, error)=>{
            parentThis.result = data; 
         })`

       var parentThis = this; 
        console.log(query); 
        console.log(this.result.data); 
        eval(query); 
        console.log(this.result.data); 
        // supabase
        //  .from("day")
        //  .select('*, slots(*)')
        //  .order('id', {"asc": true}).then((data, error)=>{
        //     self.result = data; 
        //  })

        }
    },
}
</script>
<style scoped>
    textarea{
        width:100%; 
    }
</style>