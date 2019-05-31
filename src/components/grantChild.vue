<template>
    <div>
        我是孙元素
        <p>{{title}}</p>
        
    </div>
    
</template>
<script>
export default {
     inject:['title']
}
</script>
