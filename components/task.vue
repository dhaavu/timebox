<template>
    <div>
        <div class="card">
            <div class="title pointer"  @click="showDesc">
                <h3>{{title}}</h3>
                <span class="material-symbols-outlined pointer"> add</span>
            </div>
            <div class="holder" :class="{expand:expand}">
                <div class="status">
                    <p>{{status}}</p>
                 </div>
                <div class="priority">
                  <p>{{priority}}</p>
                </div>
                 <div class="due">
                <p>{{due}}</p>
            </div>
            </div>
            
            <div class="desc" :class="{expand: expand}">
                <p>{{desc}}</p>
            </div>
           
          
        </div>
     
    </div>
</template>

<script>
export default {
    props:{
        title:String, 
        status:String, 
        desc:String, 
        due:String, 
        priority:String
    }, 
    data() {
        return {
            expand:true
        }
    },
    methods: {
        showDesc(){
            this.expand = !this.expand
        }
    },
}
</script>

<style scoped>
.card {
    background:rgb(31 32 38);   
    padding:5px; 
    margin:1.5px; 
}


h3{
    margin:0; 
}

p{
    margin:0; 
}

.title, .desc, .holder{
    margin:5px;
    background: #2c2b2b;
    padding:5px; 
}

.task {
  background: #474748;
  padding: 3px;
  margin: 5px 0px;
}

.holder{
    display: flex;
    gap:5px; 
    justify-content: center;
    background: rgb(31 32 38);

}

.status, .priority , .due{
    background: #2c2b2b;
    padding:5px; 
  
}

.title{
    display: flex; 
    justify-content: space-between;
    justify-items: center;
    
}

.expand{
    display: none;
}
.pointer{
    cursor: pointer;
}
</style>