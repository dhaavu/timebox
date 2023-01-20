export const state = () => ({
    timeslot: "30Minutes"
  })
  
export const getters = {
    getTimeslot(state) {
      return state.timeslot
    }
  }
  
export const mutations = {
    changeTimeslot(state, slot) {
      state.timeslot = slot; 
    }
  }
  
export const actions = {
    async fetchTimeSlot({ state }) {
      // make request
      const res = { data: "30Minutes" };
      state.counter = res.data;
      return res.data;
    }
  }





  