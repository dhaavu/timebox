export const state = () => ({
    timeslot: "30Minutes", 
    tasks: [{}]
   // taskData:{id:"", description:"", title:"", due:null, status:"", priority:""}, 
  //  modal: true
  })
  
export const getters = {
    getTimeslot(state) {
      return state.timeslot
    }, 
    getTasks(state){
      return state.tasks; 
    }
  }
  
export const mutations = {
    changeTimeslot(state, slot) {
      state.timeslot = slot; 
    }, 
    editTask(state, taskEdited){
      var taskid = state.tasks.find((task)=>task.id = taskEdited.id); 
      
    }, 
    setTasks(state, tasks){
      state.tasks = tasks; 
      
    }
    // , 
    // updateTaskData(state, taskData){
    //   state.taskData=taskData; 
    // }, 
    // updateModal(state, val){
    //   state.modal = val; 
    // }
  }
  
export const actions = {
    async fetchTimeSlot({ state }) {
      // make request
      const res = { data: "30Minutes" };
      state.counter = res.data;
      return res.data;
    }
  }





  