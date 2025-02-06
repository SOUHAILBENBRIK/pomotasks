<script setup>
import { ref, provide, onMounted } from 'vue'
import Timer  from './components/Timer.vue';
import Navbar from './components/Navbar.vue';
import Tasks from './components/Tasks.vue';
import axios from 'axios';
const counter  = ref(0);
const taskIndex = ref(null);
const tasks = ref([]);
const increment = () => {
  console.log(taskIndex.value);
  console.log(tasks.value);
  tasks.value[taskIndex.value]['donecycle']++;
};
function changeIndex(index){
  taskIndex.value = index;
}
function getall(){
  axios.get('http://localhost:8000/taskP').then((response) => {
    console.log(response.data);
    tasks.value = response.data;
    console.log(tasks.value);
  });
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