<template>
  <div class="movie pt-3" style="color:white;">
    <h1 style="color:white; text-decoration: underline; text-decoration-color:034454">MOVIES ON OUR DECK</h1>

    <div class="row gy-3 pt-4" style="padding-left:40px; margin-right:30px " >
  
    <div class="col-6 col-sm-3" >
     <div class="card card-hover" style="border:none;">
  <img src="../assets/1.jpg" class="card-img-top" alt="...">
  <div class="card-body" style="background-color:black">
    <h5 class="card-title" style="text-decoration: underline; text-decoration-color:034454">PUSHPA: THE RISE</h5>
    <p class="card-text" >Violence erupts between red sandalwood smugglers and the police charged with bringing down their organisation in the Seshachalam forests of South India.</p>
    <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>
     
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
      <div class="card" style="border:none;">
  <img src="../assets/2.jpg" class="card-img-top" alt="...">
  <div class="card-body" style="background-color:black">
    <h5 class="card-title" style="text-decoration: underline; text-decoration-color:034454"> Spider-man: No Way Home</h5>
    <p class="card-text">With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his.he finds villains from other universe </p>
    
     <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
           <div class="card" style="border:none;">
  <img src="../assets/3.jpg" class="card-img-top" alt="...">
  <div class="card-body" style="background-color:black">
    <h5 class="card-title"  style="text-decoration: underline; text-decoration-color:034454"> 83 THE MOVIE</h5>
    <p class="card-text">On June 25, 1983, the Lord's Cricket Ground witnessed 14 men beat the twice over World Champions West Indies, putting India back to cricket. with kapil leading in front</p>
       <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
            <div class="card" style="border:none;">
  <img src="../assets/4.jpg" class="card-img-top" alt="...">
  <div class="card-body" style="background-color:black">
    <h5 class="card-title"  style="text-decoration: underline; text-decoration-color:034454; ">BEAST</h5>
    <p class="card-text">Beast is an upcoming Indian Tamil-language black comedy action-thriller film written and directed by Nelson Dilipkumar and produced by Sun Pictures.</p>
     <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
     <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>

  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
           <div class="card" style="border:none;">
  <img src="../assets/5.jpg" class="card-img-top" alt="...">
  <div class="card-body" style="background-color:black; ">
    <h5 class="card-title"  style="text-decoration: underline; text-decoration-color:034454">ROCKY</h5>
    <p class="card-text">Rocky is a 2021 Indian Tamil-language revenge drama film written and directed by debutant Arun Matheswaran.known as a good gangster film</p>
     <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
           <div class="card" style="border:none;">
  <img src="../assets/6.jpg" class="card-img-top" alt="...">
  <div class="card-body" style="background-color:black">
    <h5 class="card-title"  style="text-decoration: underline; text-decoration-color:034454">ANNATHE</h5>
    <p class="card-text" style="color:white;">Kaalaiyan loves his younger sister dearly and does everything to make her happy. When she elopes with her lover to Kolkata.</p>
     <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
           <div class="card" style="border:none;">
  <img src="../assets/7.jpg" class="card-img-top" alt="...">
  <div class="card-body" style="background-color:black">
    <h5 class="card-title"  style="text-decoration: underline; text-decoration-color:034454">VINNAI THANDI VARUVAIYA</h5>
    <p class="card-text">A Hindu assistant director, Karthik, falls in love with Jessie, a Christian from a traditional family A Hindu assistant director, Karthik, falls in..</p>
     <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
           <div class="card" style="background-color:black">
  <img src="../assets/8.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"  style="text-decoration: underline; text-decoration-color:034454">vaarnam aayiram</h5>
    <p class="card-text">Surya, an NSG official, is on a mission to rescue someone when he gets the news of his father's demise. He starts reminiscing .</p>
     <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>
  </div>
</div>
    </div>
    
   
  </div>
  </div>
</template>
<style scoped>
#card-text{
     overflow: hidden;

}
img{
height: 300px;
}

#card-body{
     padding-top:30px ;
}
#card{
     border-color: black;
}
#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #000;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>