<template>
    <div class="contact">
        <h1>Contact Us</h1>
        <form action="https://formspree.io/f/mzbqoqkr" method="POST" class="row g-3 btm mb-0" target="_blank">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Enter Your First Name">
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Enter Your Last Name">
            </div>
            <div class="col-12">
              <input type="text" class="form-control"  placeholder="Enter Your Email">
            </div>
            <div class="col-12">
              <input type="number" class="form-control" placeholder="Enter You Contact Number">
            </div>
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Feedback"></textarea>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-primary">Clear</button>
            </div>
          </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
h1{
    color: #FBFACD;
    text-decoration: underline solid #FBFACD;
}

button{
    margin: 1rem;
    width: 5rem;
}

input{
    margin-bottom: 2rem;
}

form{
    margin-right: 10px;
    margin-left: 10px;
}
.contact{
    background: rgb(52,36,101);
    background: linear-gradient(0deg, rgba(52,36,101,1) 0%, rgba(127,102,157,1) 71%);
    height: 80vh;    
}

.btm {
    margin-top: 4rem;
}

@media (max-width:800px) {
    .contact {
        height: max-content;
    }
}
</style>