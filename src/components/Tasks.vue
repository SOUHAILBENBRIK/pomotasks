<script setup>
import settings from '../assets/settings.svg';
import more from '../assets/more.png';
import dots from '../assets/dots.svg';
import { ref } from 'vue';
const currentTask = ref("Time to focus!");
const tasks = ref(["hi","hello","bye"]);    
</script >

<template>
    <div class="taskContainer">
        <p class="currentTaskStyle">#1</p>
        <p class="currentTaskStyle">{{ currentTask }} </p>
        <diV class="tasksBar">  
            <h2>Tasks</h2>
            <img :src="settings" class="icons" >
        </div>
        
        <div >
            <div v-for="(task,index) in tasks" :key="index" class="fullTask">
                <p class="textAddText">{{ task }}</p>
                <img :src="dots" alt=""  class="dotsIcons">
            </div>
        </div>
        <div class="emptyTask" >
            <img :src="more" alt=""  class="icon">
            <p class="textAddText">Add Task </p>
        </div>

    </div>
</template>

<style scoped>
.taskContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    color: white;
   
}
.currentTaskStyle{
    font-size: 1.5rem;
    margin: 0;
    font-family :'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.tasksBar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3px 0 6px 0;
    border-bottom: 1px solid white;
    
    
}
.icons{
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 30px;
    background-color: rgba(255,255,255,0.4);
    padding: 6px;
    cursor: pointer;
}
.dotsIcons{
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
}
.icon{
    width: 30px;
    height: 30px;
    border: none;
    padding: 6px;
    cursor: pointer;
}
h2{
    font-size: 1.5rem;
    margin: 0;
    font-weight: normal;
    font-family :'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
.emptyTask{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    border: 1px dashed  rgba(255,255,255,0.6);
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    background-color: rgba(0,0,0,0.2);
    gap: 30px;
}
.textAddText{
    font-size: 1.2rem;
    font-family :'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
}
.fullTask{
    display: flex;
    width: 30vw;
    background-color: rgba(255,255,255,0.6);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 10px 0;

}

</style>