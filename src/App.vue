<template>
  <div id="nav">
<nav class="navbar navbar-expand-lg navbar-light" style="background-color:#FE8801; boder-radius:30px" >
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#" style="text-decoration: underline; text-decoration-color:034454">MK CINEMAS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/movie">Movie</router-link></a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/series">series</router-link></a>
        </li>
     
        </ul>
     
       <input type="checkbox" style="height:30px;" >
       <span class="check"></span>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </div>
  
</nav>

    <!-- 
     -->
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}



#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #000;
}
#navbar{
  background-color:#034454;
}

input[type="checkbox"]
{
  -webkit-appearance: none;
  visibility:none;
  display: none;
}
.check{
  position: relative;
  display: block;
  width:40px;
  height:20px;
  background: #034454;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  transition: ease-in 0.5s;

}
input[type="checkbox"]:checked ~ .check
{
   background: #fff;
   box-shadow:0 0 0 1200px #000;
   
}
</style>
