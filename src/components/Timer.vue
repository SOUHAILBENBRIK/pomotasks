<script setup>

import { ref , computed ,inject} from 'vue';
import restart from '../assets/restart.svg';
import setting from '../assets/settings.svg';
const timeLeft = ref(30 * 60); // Default: 30 min in seconds
const timer = ref(null);
const isRunning = ref(false);
const increment = inject('increment');
const currentTaskIndex = inject('taskIndex');
const formatTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});
const status = ref(0);
const startTimer = () => {
  if (!isRunning.value && currentTaskIndex.value != null) {
    isRunning.value = true;
    timer.value = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        stopTimer();
        if(status.value === 0){
            increment();
        }

      }
    }, 1000);
  }
};
const pauseTimer = () => {
  isRunning.value = false;
  clearInterval(timer.value);
};

const resetTimer = () => {
  pauseTimer();
  if(status.value === 0){
    timeLeft.value = 30 * 60;}
    else if (status.value === 1 ){
        timeLeft.value = 15 * 60;
    }
    else {
        timeLeft.value = 5 * 60;
    }
  
};
const stopTimer = () => {
  isRunning.value = false;
  clearInterval(timer.value);
};
const setDuration = (minutes,value) => {
    status.value = value;
  pauseTimer();
  timeLeft.value = minutes * 60;
};
function changeDate(value ){
    status.value = value;
    if(status.value == 0){
        timer.value = "30:00";
}
else if (status.value === 1 ){
    timer.value = "15:00";
}
else {
    timer.value = "5:00";
}
}
function restartTimer(){
    console.log("status", status.value);
    if(status.value === 0){
        timer.value = "30:00";
}
else if (status.value === 1 ){
    timer.value = "15:00";
}
else {
    timer.value = "5:00";
}
}

</script>

<template>
    <div class="TimerContainer">
        <div class="TimerHeader">
            <h1 :class="{title : status != 0 , titleActive : status === 0}" @click="setDuration(30,0)">Focus</h1>
            <h1 :class="{title : status != 1 , titleActive : status ===1}" @click="setDuration(15,1)">Break</h1>
            <h1 :class="{title : status != 2 , titleActive : status === 2}" @click="setDuration(5,2)">Rest</h1>
        </div>
        <div class="TimerDisplay">
            <h1 class="TimeDisplay">{{ formatTime }}</h1>
            <div class="TimerControls">
                <img :src="restart" class="icons" @click="resetTimer()" >
                <button class="buttonStart" :disabled="isRunning"  @click="startTimer">Start</button>
                <img :src="setting" class="icons">
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.TimerContainer{
    margin-top: 50px;
}
.TimerHeader {
   display: flex;
   flex-direction: row;
   width: 30vw;
   background-color: rgba(255, 255, 255, 0.6);
   color: white;
   justify-content: space-around;
   border-radius: 10px 10px 0 0;
}
.TimerDisplay{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 20vh;
    background-color: rgba(255, 255, 255, 0.6);
    color: white;
    border-radius: 0 0 10px 10px;
    padding-bottom: 30px;
}
.title{
    font-size: 2rem;
    color: white;
    padding-top: 10px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;

}
.titleActive{
    font-size: 2rem;
    color: white;
    background-color: #BA4949ba;
    border-radius: 10px;
    padding: 5px  10px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
}
.TimeDisplay{
    font-size: 4rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
.TimerControls{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
}
.icons{
    width: 50px;
    height: 50px;
    cursor: pointer;
}
.buttonStart{
    height: 50px;
    width: 150px;
    background-color: #BA4949bb ;
    box-shadow: none;
    border: none;
    border-radius: 10px;
}

</style>