<template>
    <div class="body">
        <div class="container">
            <h1 class="education">Education</h1>
            <br>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div class="col" v-for="item in education" :key="item?.id"  data-aos="fade-up-right">
                    <div class="card l"  >
                        <img :src="item?.image" class="card-img-top img" :alt="item?.name">
                        <div class="card-body">
                          <p class="card-text">{{ item?.name }}</p>
                          <p class="card-text">{{ item?.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="container">
            <h1 class="soft">Soft Skills</h1>
            <br>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4">
                <div class="col" v-for="item in technical" :key="item?.id"  data-aos="fade-up-left">
                    <div class="card skill">
                        <div class="card-body">
                         {{ item?.skills }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="container">
            <h1 class="tech">Technical Skills</h1>
            <br>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                <div class="col d-flex justify-content-center" v-for="item in skills" :key="item?.id"  data-aos="fade-up-left">
                    <div class="card skills" style="width: 18rem;">
                        <div class="card-body">
                                <img :src="item?.image" class="card-img-top img" :alt="item?.name">
                                <div class="card-body">
                                  <h2 class="card-title">{{ item?.name }}</h2>
                                  <h5 class="card-text">{{ item.level }}</h5>
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

.skills{
    background-color: transparent;
}

h1{
    color: white;
    text-shadow:4px 4px #A0C49D;
        
}
.card {
    position: relative;
    transition: 0.5s;
    cursor: pointer;
    border: none;
  }

  .skill{
    background-color:#E1ECC8 ;
  }
  .skill:hover{
    background-color: #A0C49D;
  }
  .l{
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
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


.soft{
    margin-top: 1rem;
}

.img{
    width: 50%;
}
.tech{
    margin-top: 1rem;
}
</style>