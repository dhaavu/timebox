<template>

        <div class="toolbar">
            <div class="pageDate">
                <span @click="getDay('previous')" class="material-symbols-outlined">arrow_back_ios</span>
                <h4>
                    {{dateInWords}}
                </h4> 
                <span @click="getDay('next')" class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
            <!-- <div class="select">
                <select v-model="selectedValue" @change="valueChanged" class="select" name="timelineOption" id="options">
                    <option value="Hourly">Hourly</option>
                    <option selected  value="30Min">30 Minutes</option>
                    <option value="15Min">15 Minutes</option>
                </select>
            </div> -->
        </div>
   
</template>
<script>    
export default {
    name:"toolbar", 
    props: {
        currentDate: String
    }, 
    data() {
        return {
            selectedValue: "30Min"
        }
    },
    methods: {
        getDay(direction){
           if(direction == 'next' ) {
    
            var nextDay = this.currentDate.substring(3,5); 
            nextDay++; 
            nextDay < 10 ? nextDay= '0' + nextDay : nextDay = nextDay
            var dt = this.currentDate.substring(0,2) + nextDay + this.currentDate.substring(6,this.currentDate.length)
         
            this.$router.push('/' + dt); 
           }
           else if(direction == 'previous' ) {
          
            var nextDay = this.currentDate.substring(3,5); 
            nextDay--; 
            nextDay < 10 ? nextDay= '0' + nextDay : nextDay = nextDay
            var dt = this.currentDate.substring(0,2) + nextDay + this.currentDate.substring(6,this.currentDate.length)
      
            this.$router.push('/' + dt); 
           }
        }
    },
    computed:{
        dateInWords(){
          var arr=  this.currentDate.split('/'); 
          var dt = new Date(arr[2], arr[0]-1, arr[1])
          return dt.toDateString(); 
        }
    }
}
</script>
<style scoped>
    .toolbar{
        display: flex;
        justify-content: space-between;
         box-shadow: -2rem 0 3rem -2rem #000;
         background:rgb(0 0 0 / 20%); 
         margin:5px; 
         padding:5px 25px; 
         gap:10px; 
    }
    .select{
        padding:10px; 
        justify-self: right; 

    }

    .pageDate{
        display: flex; 
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        flex-grow: 2;
    }
  
</style>