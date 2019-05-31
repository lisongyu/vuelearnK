<template>
    <div>
        我是祖先元素
        <p><Child3></Child3></p>
        <div style="color:red">{{message}}</div>
        <button @click="boardcast">广播事件</button>
    </div>
</template>
<script>
import Child3 from '@/components/Child3'
export default {
    components:{
        Child3
    },
    data(){
        return{
            message:''
        }
    },
    mounted(){
        this.$on('dispatch',message=>{
           
            this.message=message;
        })
    },
    methods:{
        boardcast(){
         
             this.$boardcast('boardcast','哈喽 我是parents 我来广播')
         
        }
    }

}
</script>
