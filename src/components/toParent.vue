<template>
  <div id="app">
    <h2>Parent</h2>
    <h3>{{msg}}</h3>
    <Child1 :title="title1" @getmsg="getmsg"></Child1>
  </div>
</template>

<script>
import Child1  from '@/components/parent1'
export default {
  name: "app",
  data(){
    return {
      msg:'',
      title1:'我是你爸爸'
    }
  },
  methods:{
     
    getmsg(msg){
      
      this.msg = msg
    }
  },
  components:{Child1}

}

</script>
<style>

div{
  border:1px red solid;
  padding:20px;
}
</style>