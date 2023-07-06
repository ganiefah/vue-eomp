<template>
    <div>
        <div class="container">
            <h1 class="education">Education</h1>
            <div class="row">
                <div class="col" v-for="item in education" :key="item?.id">
                    <div class="card" >
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
            <h1 class="soft">Soft Skills</h1>
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
            <h1 class="tech">Technical Skills</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                <div class="col d-flex justify-content-center" v-for="item in skills" :key="item?.id">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
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
.card {
    position: relative;
    transition: 0.5s;
    cursor: pointer;
    border: none;
  }
  
  .card:hover {
    transform: translateY(-20px);
  }
  
  .card::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    filter: blur(30px);
  }
  
  .card span {
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    border-radius: 1em;
  }
  
  .card span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .card .content {
    position: relative;
    padding: 10px;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.5em;
  }

.education{
    margin-top: 1rem;
}

.soft{
    margin-top: 1rem;
}

.tech{
    margin-top: 1rem;
}
</style>