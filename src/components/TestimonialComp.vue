<template>
  <div >
    <div class="container">
      <div class="row d-flex justify-content-center">
            <div class="card mb-3" v-for="item in testimonials" :key="item?.id" data-aos="fade-up-right">
              <div class="row g-0">
                <div class="col-md-4 colS">
                <img :src="item.image" class="img-fluid img" :alt="item.name" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name}}</h5>
                  <p class="card-text">
                    {{ item.quote }}
                  </p>
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
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
.colS{
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card{
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img{
  height: 15rem;
  width: 12rem;
  border-radius: 1rem;
  padding: 7px;
}
</style>