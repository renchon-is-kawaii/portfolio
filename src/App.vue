<template>
  <div id="app">
    <Header />
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <SideComp />
        </div>
        <div class="col-sm">
          <div class="row">
            test
          </div>
          <div class="row">
            dayo
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import Header from './components/Header'
import SideComp from './components/SideComp'
import './font/css/open-iconic-bootstrap.css'

export default {
  name: 'App',
  components: {
    Header,
    SideComp
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
