<template>
    <div>
        <h2>Child2</h2>
        <div>
            <p>{{title}}</p>

            <grantChild></grantChild>  
            </div>
    </div>
</template>
<script>
import grantChild from '@/components/grantChild'
export default {

     props:['title'],
     components:{
         grantChild
     }

   
    
}
</script>