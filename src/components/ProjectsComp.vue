<template>
    <div>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            <div class="col d-flex justify-content-center" v-for="item in projects" :key="item.id">
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
a{
    margin-right: 0.7rem;

}
.btn {
    background-color: #C4D7B2;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px dashed #C4D7B2;
    box-shadow: grey 0px 2px 5px -1px, black 0px 1px 3px -1px;
    transition: .4s;
    width: 7.2rem;
    padding: 0.9rem;
    margin-top: 1rem;
   }

   .card-text{
    height: 100px;
    overflow: auto;
   }
   
   
   .btn:hover {
    transition: .5s;
    border: 2px dashed #A0C49D;
    background-color: white;
    color: #A0C49D;
   }

   img{
    height: 10rem;
    padding: .5rem;
   }
   
   .btn:active {
    background-color: #A0C49D;
   }
   

.card{
    background-color: #A0C49D;
    color: white;
    font-weight: bold;
    
}

::-webkit-scrollbar {
    width: 1px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #84A7A1;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  

</style>