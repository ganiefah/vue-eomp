<template>
  <div class="about">
<div class="row d-flex justify-content-center">
  <div class="card ">
    <div class="row ">
      <div class="col">
      <img src="https://i.postimg.cc/TYVmHgFq/Screenshot-2023-05-03-100656.png" class="img-fluid img" alt="image of me" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">ABOUT ME ...</h1>
        <p class="card-text">
          <span>I am Ganiefah Majiet, an 18 year old from Parow, CapeTown.</span>
              <br/>
              <span>I've always had a passion for IT and technology</span>
              <br/>
              <span>I joined Life Choices' Coding Academy to pursue my passion and
                further my knowledge.</span>
                <span>I possess exceptional qualities, including unwavering determination, strong work ethic, and openness to new opportunities.My commitment to coding and my drive to succeed consistently allows me to deliver outstanding results.I strive to learn and build my understanding to not just coding but for everything in life.</span>
              <br/>     
        </p>
      </div>
    </div>
  </div>
</div>
</div>
<div class="interest">
  <h1>Interest</h1>
  <div class="container">
  <div class="row">
    <div class="col">
      <div class=" card card-grid1">
    <a href="#" class="card1">
      <div class="card__bg1" style="background-image: url(https://i.postimg.cc/XJm9JCdN/safar-safarov-MSN8-TFh-J0is-unsplash.jpg)"></div>
      <div class="card__content1">
        <h3 class="card__heading1 text-white">Coding</h3>
      </div>
    </a>
    <a href="#" class="card1">
      <div class="card__bg1" style="background-image: url(https://i.postimg.cc/bv3JYD4G/lilly-rum-L6-W9-ZIQ5sa-M-unsplash.jpg)"></div>
      <div class="card__content1">
        <h3 class="card__heading1 text-white">Photography</h3>
      </div>
    </a>
    <a href="#" class="card1">
      <div class="card__bg1" style="background-image: url(https://i.postimg.cc/V6FLZSWs/daria-nepriakhina-wcomi-Vt0w1c-unsplash.jpg)"></div>
      <div class="card__content1">
        <h3 class="card__heading1 text-white">Writing</h3>
      </div>
    </a>
    <a href="#" class="card1">
      <div class="card__bg1" style="background-image: url(https://i.postimg.cc/qRYQYGX4/boston-public-library-4y-PHCb1-SPR4-unsplash.jpg)"></div>
      <div class="card__content1">
        <h3 class="card__heading1 text-white">Art</h3>
      </div>
    </a>
</div>
<br>
</div>
</div>
</div>
</div>


<div class="hobbies">
  <h1>Hobbies</h1>
  <div class="container">
    <div class="row ">
      <div class="col">
  <div class="card card-grid1">
    <a href="#" class="card1">
      <div class="card__bg1" style="background-image: url(https://i.postimg.cc/90kdzXN2/toomas-tartes-Yizrl9-N-e-DA-unsplash.jpg)"></div>
      <div class="card__content1">
        <h3 class="card__heading1 text-white">Hiking</h3>
      </div>
    </a>
    <a href="#" class="card1">
      <div class="card__bg1" style="background-image: url(https://i.postimg.cc/t4F2YPd4/jeshoots-com-e-Cktz-Gj-C-i-U-unsplash-1.jpg)"></div>
      <div class="card__content1">
        <h3 class="card__heading1 text-white">Gaming</h3>
      </div>
    </a>
    <a href="#" class="card1">
      <div class="card__bg1" style="background-image: url(https://i.postimg.cc/63nVTNx4/alyson-mcphee-y-WG-ndhxvq-Y-unsplash.jpg)"></div>
      <div class="card__content1">
        <h3 class="card__heading1 text-white">Cooking</h3>
      </div>
    </a>
    <a href="#" class="card1">
      <div class="card__bg1" style="background-image: url(https://i.postimg.cc/3NwwVg1r/aaron-burden-4e-Ww-Sxa-Dhe4-unsplash.jpg)"></div>
      <div class="card__content1">
        <h3 class="card__heading1 text-white">Reading</h3>
      </div>
    </a>
</div>
</div>
</div>
</div>
</div>

</div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.card1 {
  list-style: none;
  position: relative;
  transition: all 0.5s ease-out;
}

.interest{
  margin-top: 5rem;
 
}
.card-grid1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  width: 100%;
}
.card__bg1 {
  position: relative;
  height: 50vh;
  min-width: 250px;
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.5s ease-out;
}

.card__content1 {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}
.card__category1 {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #ACACAC;
}
.card1:hover {
  transform: scale(1.02);
  filter: drop-shadow(0px 0px 100px #ACACAC);
}
.card-grid1:hover > .card1:not(:hover).card1 {
  filter: brightness(0.8) grayscale(0.6) contrast(1.2) blur(10px);
}

h1{
  color: white;
    text-shadow:4px 4px #A0C49D;
  padding: 7px ;
}
.about{
  height: max-content;
}

.card{
  width: 100%;
  border: none;
  margin-top: 3rem;
}

.card{
  background-color: transparent;
}
.img{
  border-radius: 10px;
  width: 50%;
}

span{
  font-weight: bold;
}


@media (max-width:1200px) {
  .card-grid1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    width: 100%;
  }
}
@media (max-width:600px) {
  .card-grid1 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    width: 100%;
  }
}


</style>