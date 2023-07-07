<template>
  <div>
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
    import Navbar from '@/components/NavBar'
    import Footer from '@/components/FooterComp.vue'
   export default {
   components: {
   Navbar,
   Footer
 }
} 
</script>

<style>
#app {
  font-family: 'Bacasime Antique', serif;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #C4D7B2;;
  color: #2c3e50;
}

</style>
