<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="myNavBar">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Isaac Shaw</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects"
                >Projects</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <footer>
      <router-link to="/admin">Admin</router-link>
      <a target="_blank" href="https://github.com/ikasshaw/Creative4.git">
        <img
          src="../src/assets/images/GitHub-Mark-Light-64px.png"
          alt="Github icon" />
      </a>
      <div class="empty"></div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  overflow: hidden;
}
#app {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    #102e4a,
    #071013 25%,
    #102e4a 90%
  );
  background-repeat: repeat-y;
  background-size: contain;
  height: 100vh;
  font-family: 'Montserrat', 'Open Sans', 'Roboto', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: #e6e8e6;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

::-webkit-scrollbar {
  width: 0;
}

h2 {
  width: 65%;
  text-align: center;
  margin: 0 auto;
  border-bottom: 2px solid #e6e8e6;
  font-size: 2.5em;
  padding-top: 10px;
}

hr {
  width: 65%;
}

#app > footer {
  position: sticky;
  top: 100vh;
}

footer {
  background-color: #071013;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

footer a {
  text-decoration: none;
}

footer a img {
  max-width: 30px;
}

/************************               Navbar styles                **************************/

#myNavBar,
.bg-dark,
router-link,
.navbar-brand {
  font-family: 'Open Sans', 'Roboto', 'Helvetica Neue', sans-serif !important;
  background-color: #071013 !important;
  color: #e6e8e6 !important;
}

.nav-link {
  color: #e6e8e6 !important;
}

.navbar-brand:hover,
.nav-link:hover {
  color: #0c7c59 !important;
}
.navbar-toggler:hover {
  box-shadow: 0 0 0 0.105rem;
  color: #e6e8e6 !important;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.105rem;
  color: #e6e8e6 !important;
}

.navbar-collapse {
  margin-top: 5px;
}

.navbar {
  position: sticky !important;
  top: 0;
  width: 100%;
}
</style>
