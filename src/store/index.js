import { createStore } from 'vuex'

const dataURL = 'https://ganiefah.github.io/Data.json/Data.json'

export default createStore({
  state: {
    projects : null,
    testimonials : null,
    skills : null,
    technical : null,
    education : null
  },
  getters: {
  },
  mutations: {
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setTechnical(state, value) {
      state.technical = value
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
    async fetchTestimonials(context) {
      try{
        let res = await fetch(dataURL);
        let {testimonials} = await res.json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials)
        }else {
          context.commit("setTestimonials", testimonials)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    },
    async fetchEducation(context) {
      try{
        let res = await fetch(dataURL);
        let {education} = await res.json();
        if (education) {
          context.commit("setEducation", education)
        }else {
          context.commit("setEducation", education)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    },
    async fetchTechnical(context) {
      try{
        let res = await fetch(dataURL);
        let {technical} = await res.json();
        if (technical) {
          context.commit("setTechnical", technical)
        }else {
          context.commit("setTechnical", technical)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    },
    async fetchSkills(context) {
      try{
        let res = await fetch(dataURL);
        let {skills} = await res.json();
        if (skills) {
          context.commit("setSkills", skills)
        }else {
          context.commit("setSkills", skills)
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
