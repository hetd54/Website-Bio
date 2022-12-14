<template>
  <div id="nav">
    <nav>
      <div id="navbarSupportedContent">
        <div>
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/blender" class="nav-link">
            Blender Samples
          </router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #e56a49;
}

a:hover {
  color: #de9a87;
}

#nav {
  padding: 20px;
  text-align: center;
  background-color: #243443;
}

#nav a {
  font-weight: bold;
  color: whitesmoke;
  text-decoration: none;
  padding: 5px;
  margin: 5px;
}

#nav a.router-link-exact-active {
  background: #e56a49;
  border-radius: 0.5rem;
}
</style>
