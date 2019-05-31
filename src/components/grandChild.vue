<template>
    <div>
        我是孙元素
       
        <button @click="dispatch">dispatch</button>
        {{msg}}
        
    </div>
    
</template>
<script>
export default {

    data(){
        return{
            msg:''
        }
    },
    mounted(){
        this.$on('boardcast',msg=>{
           
            this.msg=msg
        })
    },
     methods: {
         dispatch(){
            
             this.$dispatch('dispatch','哈喽 我是GrandGrandChild1')
         }

   
  }
     
}
</script>
