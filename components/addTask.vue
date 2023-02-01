<template>
    <div>
          <div class="modalBlock" :class="{modal:modal}">
             <div class="closebar">
                    <div class="modalTitle flex justifyCenter">
                    <h2>New Task</h2>
                </div>
                        <span class="material-symbols-outlined pointer close" @click="closeModal">close</span>
            
                </div>
         
               
                
                <div class="flex justifyCenter">
                    <form>
                    <div class="inputSection ">
                        <div class="label">
                          <h3> Title:</h3>
                        </div>
                        <input type="text" class="input"/>
                    </div>
                     <div class="inputSection ">
                        <div class="label">
                          <h3> Description:</h3>
                        </div>
                        <textarea class="input" name="desc" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div class="inputSection ">
                        <div class="label">
                          <h3>Due</h3>
                        </div>
                        <input type="date" class="input"/>
                    </div>
                     <div class="inputSection ">
                        <div class="label">
                          <h3>Priority</h3>
                        </div>
                        <select name="priority" id="priority" class="input">
                            <option value="P1">P1</option>
                            <option value="P1">P2</option>
                            <option value="P1">P3</option>
                            <option value="P1" selected >P4</option>
                        </select>
                    </div>
                     <div class="inputSection ">
                            <div class="label">
                            <h3>Status</h3>
                            </div>
                            <select name="status" id="status" class="input">
                                <option value="P1" selected>new</option>
                                <option value="P1">in-progress</option>
                                <option value="P1">completed</option>
                                <option value="P1">on-hold</option>
                            </select>
                     </div>
                     <div class="buttonSection flex spaceAround">
                        <button class="button">Save</button>
                         <button class="button buttonCancel">Cancel</button>
                     </div>
                </form>
                </div>
                
          
            
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        modal:Boolean
    }, 
    methods: {
        closeModal(){
            this.$emit('closeModal'); 
        }
    },
    
}
</script>
<style scoped>
.modalBlock{
    display: block; 
    position:absolute; 
    top:5%; 
    left:15%; 
    min-height:90vh; 
    width:70%; 
    background:#000000e0; 
}
.modal{
    display: none;
}

.closebar {
    display: flex; 
    justify-content: space-between;
    gap:20px; 
       border-top:1px solid rgb(72 71 71); 
   
}

.close{
    border:1px solid rgb(185, 183, 183); 
    margin:20px; 
    justify-self: right;
}

.modalTitle{
 
    flex-grow: 2;
}
form{
    width:90%; 
}

.inputSection{
    margin:20px; 
    flex-wrap: wrap;
    align-content: center;
    gap:10px
}
.label{
    flex-grow: 2;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: left;
    /* background: #252121; */
    border-radius: 5px;
    margin:10px 0px; 
}
.input{
    flex-grow: 5;
    min-height:35px; 
    font-family: 'Quicksand', cursive;
    font-size: 22px;
    color:#d1c8c8; 
    border:none; 
    background: #2f2e2e;
    border-radius: 5px;
    padding: 5px 20px;
    width:100%; 
    box-sizing: border-box;
}
.input:focus{
    outline:none; 
    border: 0.5px solid #d2d2d2;  

}

.buttonSection{
    margin:20px 20px 50px 20px; 
}
</style>