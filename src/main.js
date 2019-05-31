import Vue from 'vue'
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false

class 
Vue.prototype.$dispatch=function(eventName,data){
  //向上传递一直获取$parent;
  let parent=this.$parent;
 
  while(parent){
    parent.$emit(eventName,data);
   
    parent=parent.$parent
  }
}
Vue.prototype.$boardcast=function(eventName,data){
  //递归通知所有子元素
  boardcast.call(this,eventName,data)

}
function boardcast(eventName, data){
  this.$children.forEach(child => {
    // 子元素触发$emit
    child.$emit(eventName, data)
    if(child.$children.length){
      // 递归调用，通过call修改this指向 child
      boardcast.call(child, eventName, data)
    }
  });
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
