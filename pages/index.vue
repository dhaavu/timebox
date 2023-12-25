<template>
<div>
   <div v-if="errorOnPage" class="flash">
    <div class="message">
      <h3>{{error}}</h3>
    </div>
         <span @click="closeFlash" class="material-symbols-outlined">close</span>     
    </div> 
    <div class="container minvh70">
         Loading........
  
  </div>
</div>


</template>

<script>
export default {
    mounted(){
        try{
              var dt = new Date(); 
              var mon = dt.getMonth() +1; 
              var d = dt.getDate()
              mon < 10 ? mon = '0' + mon : mon
              d < 10  ? d = '0' + d : d
              var id = mon  + '' + d + '' + dt.getFullYear()

              this.$router.push('/' + id) 
        }
        catch(e){
            this.errorOnPage = true; 
            this.error = "Error On page: " + e; 
        }
    
    }, 
    data() {
      return {
        error: "", 
        errorOnPage: false
      }
    },
    methods: {
      closeFlash(){
        this.errorOnPage = false; 
      }
    },
}
</script>