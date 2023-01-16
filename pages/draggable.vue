<template>
<div>
   <div  v-for="element in myArray" :key="element.id">
        <p class="hello" ref="items">{{element.name}}</p>
    </div>
    <button @click="updateNames">Submit</button>
</div>

</template>

<script>
import Sortable from 'sortablejs';
export default {
    name: "draggable", 
    data(){
        return {
            myArray: [{
                id:'1', 
                name:'Dhaval'
            }, 
            {
                id:'2', 
                name:'Geetu'
            }, 
            {
                id:'3', 
                name:'Krishang'
            }]
        }
    }, 
    methods: {
        updateNames(){
            this.myArray.push({id:'5', name:'Funny'})
        }
    }, 
    mounted(){
        console.log(this.$refs.items[0]); 
      var el =   this.$refs.items[0].parentElement.parentElement; 
      var sortable = Sortable.create(el);

    }
}
</script>
