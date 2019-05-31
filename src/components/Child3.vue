<template>
    <div>
        <h2>Child3</h2>
        <div>
            <p>我是子节点</p>

            <grandChild></grandChild>  
            </div>
    </div>
</template>
<script>
import grandChild from '@/components/grandChild'
export default {

    
     components:{
         grandChild
     }

   
    
}
</script>