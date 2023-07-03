<template>
    <div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 ">
        <div class="col" v-for="item in testimonials" :key="item?.id">
          <div class="card mb-3" >
                  <img :src="item?.image" class="img-fluid rounded-start imgs" :alt="item?.name">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{{ item?.name }}</h5>
                      <p class="card-text">{{ item?.quote }}</p>
                      <p class="card-text"><small class="text-body-secondary">{{ item?.title }}</small></p>
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
            testimonials() {
                return this.$store.state.testimonials
            }

        },
        mounted() {
            this.$store.dispatch('fetchTestimonials')
        }
    }  
</script>

<style scoped>
</style>