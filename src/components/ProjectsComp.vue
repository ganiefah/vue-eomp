<template>
    <div>
        <div class="container">
            <div class="col" v-for="item in projects" :key="item.id">
                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" :alt="item.name">
                        <div class="card-body">
                          <h5 class="card-title">{{ item.name }}</h5>
                          <p class="card-text">{{ item.description }}</p>
                          <a :href="item.github" class="btn btn-primary" target="_blank">Github</a>
                          <a :href="item.netlify" class="btn btn-primary" target="_blank">Netlify</a>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed : {
            projects() {
                return this.$store.state.projects
            }

        },
        mounted() {
            this.$store.dispatch('fetchProjects')
        }
    }
</script>

<style scoped>

</style>