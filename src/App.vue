<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg  bg-dark">

      <router-link to="/" class="navbar-brand">
        <h1 class="text-white">ABBEY ROAD</h1>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto text-white">

          <li class="nav-item">
            <router-link to="/all" class="nav-link">
              <h2>All albums</h2>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/best" class="nav-link">
              <h2>Best albums</h2>
            </router-link>
          </li>

           <li class="nav-item">
            <router-link to="/about" class="nav-link">
              <h2>About</h2>
            </router-link>
          </li>

        </ul>

      </div>
    </nav>

    <router-view />
  </div>
</template>
