<template>
  <div class=" flex flex-col h-screen justify-between text-center">
    <div id="top" class="">
      <h2>All their music in one place</h2> 
      <router-link to="/browse" class="nav-link">
        <button id="btn" type="button" class="btn btn-primary rounded-full">View albums</button>
      </router-link>
    </div>
    <div class="bg-blue-200 flex justify-center p-8">
    <h1 class="self-center">Abbey Road has all of the Beatles albums. </h1>
    <img class="p-4 w-1/2" src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2008/09/21/beatles10b.jpg?width=700&quality=85&auto=format&fit=max&s=cfe927b7971162b69e66ee6a1b78a92f" alt="">
    </div>
    <footer class="bg-dark text-white p-4">
      <a href="https://github.com/dbowie83/creative3">View on Github </a>
    </footer>
  </div>
</template>

<style scoped>
  #top {

    background-image:
      linear-gradient(rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)),
      url("../../images/abbey.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    min-height: 500px;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    margin: 0;
    font-size: 2.5rem;
  }
</style>