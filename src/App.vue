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
            <Comp1 />
          </div>
          <div class="row">
            <Comp2 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import SideComp from './components/SideComp'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import './font/css/open-iconic-bootstrap.css'

export default {
  name: 'App',
  components: {
    Header,
    SideComp,
    Comp1,
    Comp2
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
