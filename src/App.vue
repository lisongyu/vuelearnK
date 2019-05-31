<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li> <router-link to="tochild">父传子组件</router-link></li>
       <li> <router-link to="toparent">子传父组件</router-link></li>
        <li> <router-link to="todownmore">传给子孙节点</router-link></li>
        <li> <router-link to="toupfn">不停向上传递</router-link></li>
    </ul>
    
     <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
