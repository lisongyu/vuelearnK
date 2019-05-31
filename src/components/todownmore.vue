<template>
  <div>
      <Child2></Child2>    
  </div>
</template>

<script>
import Child2 from '@/components/Child2'
export default {
  name: "app",
  provide:{
    title:'我是祖先标题'
  },
  components:{Child2}
}

</script>
<style>