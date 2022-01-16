<template>
  <div class="movie pt-3" style="color:white;">
    <h1 style="color:white; text-decoration: underline; text-decoration-color:034454">MOVIES ON OUR DECK</h1>

    <div class="row gy-3 pt-4" style="padding-left:40px; margin-right:30px " >
  
    <div class="col-6 col-sm-3" >
     <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/1.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
   
    </div>
    <div class="col-6 col-sm-3">
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/2.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
   
    </div>
    <div class="col-6 col-sm-3">
           <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/3.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
   
    </div>
    <div class="col-6 col-sm-3">
            <div class="flip-card" >
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/4.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
          <div class="flip-card" style="padding-top:300px ;">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/5.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
          <div class="flip-card" style="padding-top:200px ;">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/6.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3">
           <div class="flip-card" style="padding-top:100px ;">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/7.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3 ">
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/1.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </div>

    <div class="col-6 col-sm-3 ">
            <div class="flip-card" style="padding-top:200px">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/1.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </div>
    <div class="col-6 col-sm-3 ">
            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="../assets/1.jpg" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back" style="width:300px;height:300px;" >
      <h1>John Doe</h1>
      <p>Architect  Engineer</p>
      <p>We love that guy</p>
    </div>
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
#col-6{
 
}
</style>
// <a href="#"  > <router-link to="/push" class="btn btn-dark">play trailer</router-link></a>