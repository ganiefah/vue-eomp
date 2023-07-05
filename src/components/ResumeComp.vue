<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in education" :key="item?.id">
                    <div class="card" style="width: 18rem;">
                        <img :src="item?.image" class="card-img-top" :alt="item?.name">
                        <div class="card-body">
                          <p class="card-text">{{ item?.name }}</p>
                          <p class="card-text">{{ item?.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in technical" :key="item?.id">
                    <div class="card">
                        <div class="card-body">
                         {{ item?.skills }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in skills" :key="item?.id">
                    <div class="card">
                        <div class="card-body">
                            <div class="card" style="width: 18rem;">
                                <img :src="item?.image" class="card-img-top" :alt="item?.name">
                                <div class="card-body">
                                  <h5 class="card-title">{{ item?.name }}</h5>
                                </div>
                            </div>
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
            education() {
                return this.$store.state.education
            },
            technical() {
                return this.$store.state.technical
            },
            skills() {
                return this.$store.state.skills
            }
        },
        mounted() {
            this.$store.dispatch('fetchEducation'),
            this.$store.dispatch('fetchSkills'),
            this.$store.dispatch('fetchTechnical')
        }
    }
</script>

<style scoped>

</style>