import { createStore } from 'vuex'

const dataURL = 'https://ganiefah.github.io/Data.json/Data.json'

export default createStore({
  state: {
    projects : null,
  },
  getters: {
  },
  mutations: {
    setProjects(state, value) {
      state.projects = value
    },
  },
  actions: {
    async fetchProjects(context) {
      try{
        let res = await fetch(dataURL);
        let {projects} = await res.json();
        if (projects) {
          context.commit("setProjects", projects)
        }else {
          context.commit("setProjects", projects)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    },

  },
  modules: {
  }
})
