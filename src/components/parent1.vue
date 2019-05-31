<template>
    <div>
        <h2>Child2</h2>
        <p>{{title}}</p>
        <button @click="toParent">传递到父元素</button>
    </div>
</template>
<script>
export default {
    props:['title'],
    methods:{
        toParent(){
            //emit 方法
            this.$emit('getmsg','爸爸,我知道错了')
        }
    }
    
}
</script>