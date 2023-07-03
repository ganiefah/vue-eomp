<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link" >About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/resume" class="nav-link">Resume</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonial" class="nav-link">Testimonial</router-link>
                   </li>
                   <li class="nav-item">
                    <router-link to="/projects" class="nav-link">Projects</router-link>
                    </li>
                    <li class="nav-item">
                     <router-link to="/contact" class="nav-link">Contact Us</router-link>
                     </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
ul li a{
   margin: 5px; 
}
</style>