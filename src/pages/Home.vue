<script setup>
import { ref, provide, onMounted } from 'vue'
import Timer  from '../components/Timer.vue';
import Navbar from '../components/Navbar.vue';
import Tasks from '../components/Tasks.vue';
import axios from 'axios';
const counter  = ref(0);
const taskIndex = ref(null);
const tasks = ref([]);
import VueCookies from 'vue-cookies';
const increment = () => {
  console.log(taskIndex.value);
  console.log(tasks.value);
  tasks.value[taskIndex.value]['donecycle']++;
};
function changeIndex(index){
  taskIndex.value = index;
}
function getall(){
  if(VueCookies.get('token') === undefined){
    alert("You need to login first");
  }else{
    const userId = VueCookies.get('user_id');
    axios.get('http://localhost:8000/taskP/user/'+userId,{
    headers: {
      'Authorization': 'Bearer ' + VueCookies.get('token')
    }
  }).then((response) => {
    tasks.value = response.data
    tasks.value.forEach(element => {
      element['edit'] = false;
    });
  });
  }
  
}
provide('counter' , counter);
provide('increment' , increment);
provide('tasks' , tasks);
provide('taskIndex' , taskIndex);
provide('changeIndex' , changeIndex);
provide('getall' , getall);
onMounted(() => {
  getall();
});
</script>

<template >
      <Navbar />
      <main>
        <Timer />
        <Tasks/>
      </main>
 

</template>

<style scoped>


</style>