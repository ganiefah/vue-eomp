<template>
    <div>
<h1> My Projects</h1>
<Projects/>
    </div>
</template>

<script>
import Projects from '../components/ProjectsComp.vue'
    export default {
        components : {
            Projects
        }
    }
</script>

<style scoped>
h1{
    color: white;
    text-shadow:4px 4px #A0C49D;
    padding: 10px ;
}
</style>