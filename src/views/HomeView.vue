<template>
  <div class="home">
    <div class="info">
      <img src="https://i.postimg.cc/7Lg8z6CZ/kindpng-2583224-removebg-preview.png" alt="MEMOJI" loading="lazy" class="img">
      <h1>Hi Im <span class="name">Ganiefah Majiet</span></h1>
      <br />
      <h1>An Aspiring Full Stack <span class="job">Web Developer</span></h1>
    </div>
    <div class="btn">
      <a href="/src/views/AboutView.vue" class="button">For More Information</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

h1{
  color:#BA94D1;
}
.name {
  color: #FBFACD !important;
}
.job{
  color: #FBFACD !important;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  padding: 10px ;
  background-color: #7F669D;
  color: #fbfacd;
  border: none;
  text-decoration: none;
  border-radius: 8px;
  width: 12rem;
  height:3rem;
  transition: .3s;
}

.button:hover {
  background-color: #BA94D1;
  box-shadow: 0 0 0 5px #DEBACE;
  color: #FBFACD;
}

.img{
  width: 15%;
  margin-bottom: 10px;
}

.home{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
