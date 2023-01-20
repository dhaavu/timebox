<template>

        <div class="toolbar">
            <h3>Timeline</h3>
            <div class="select">
                <select v-model="selectedValue" @change="valueChanged" class="select" name="timelineOption" id="options">
                    <option value="Hourly">Hourly</option>
                    <option selected  value="30Min">30 Minutes</option>
                    <option value="15Min">15 Minutes</option>
                </select>
            </div>
        </div>
   
</template>
<script>
export default {
    name:"toolbar", 
    data() {
        return {
            selectedValue: "30Min"
        }
    },
    methods: {
        valueChanged(){
            console.log(this.selectedValue); 
            console.log(this.$store.state.timeslot)
            this.$store.commit('changeTimeslot', this.selectedValue); 
            console.log(this.$store.state.timeslot)
            this.$emit('timelineChanged'); 
        }
    },
}
</script>
<style scoped>
    .toolbar{
        display: flex;
        justify-content: space-between;
    }
    .select{
        padding:10px; 
        justify-self: right;
        background: black; 
        color:white;    
    }
  
</style>