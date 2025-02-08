<script setup>
import { ref , inject} from 'vue';
import settings from '../assets/settings.svg';
import more from '../assets/more.png';
import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg' ;
import arrow_down from '../assets/arrow-down.svg'; 
import arrow_up from '../assets/arrow-up.svg';
import axios from 'axios';
const currentTaskIndex = inject('taskIndex');
const currentTaskName = ref("");
const tasks = inject('tasks');
const getallTasks = inject('getall');
const changeTask = inject('changeIndex');
const cycleNumber = ref(0);
const sumOfCycle = ref(0);
const isOpen = ref(false) ; 

function increment(){
    cycleNumber.value+=1 ;
}
function incrementTask(task){
    task['cyleNumber'] += 1 ; 
}
function decremenTask(task){
    if(task['cyleNumber'] >0){
        task['cyleNumber'] -= 1 ; 
    }
}
function decrement(){
    if(cycleNumber.value >0){
        cycleNumber.value -= 1 ; 
    }
    
}

function openAddTask(){
    isOpen.value = true;
}
function closeAddTask(){
    isOpen.value = false;
}
function editTask(task){
    console.log("edit"+task);
    task['edit'] = true;
}
function cancelEdit(task){
    
    task['edit'] = false;
}
function saveEditTask(task){
    task['edit'] = false;
    axios.put('http://localhost:8000/taskP/'+task['id'], 
    {name: task['name'], cyleNumber: task['cyleNumber'] , finishedCycle : task['finishedCycle']}).then(async (response) => {
        console.log(response.data);
        if(response.data.status === "success"){
            await getallTasks();
        }
        
      });
}
function deleteTask(task){
    axios.delete('http://localhost:8000/taskP/'+task['id'],).then(async (response) => {
        console.log(response.data);
        if(response.data.status === "success"){
            await getallTasks();
        }
        
      });}
function addTask(){
    if(currentTaskName.value === "" || cycleNumber.value === 0){
        return;
    }
   
    
    axios.post('http://localhost:8000/taskP', 
    {name: currentTaskName.value, cyleNumber: cycleNumber.value , finishedCycle : 0}).then(async (response) => {
        console.log(response.data);
        if(response.data.status === "success"){
            await getallTasks();
        }
        
      });
    
    currentTaskName.value = "";
    sumOfCycle.value += cycleNumber.value;
    cycleNumber.value = 0;
    isOpen.value = false;
}


</script >

<template>
    <div class="taskContainer">
        <p class="currentTaskStyle">#1</p>
        <p class="currentTaskStyle" v-if="currentTaskIndex != null">{{ tasks[currentTaskIndex]['name'] }} </p>
        <p class="currentTaskStyle" v-else>Time to focus! </p>
        <div class="tasksBar">  
            <h2>Tasks</h2>
            <img :src="settings" class="icons" >
        </div>
        
        <div >
            <div v-for="(task,index) in tasks" :key="index"  >
                <div class="fullTask" @click="changeTask(index)" v-if="task['edit'] === false">
                    <p class="textAddText">{{ task['name'] }}</p>
                <div style="display: flex; gap: 10px; align-items: center; justify-content: center;">
                    <p class="textAddText">{{ task['finishedCycle'] }} / {{ task['cyleNumber'] }}</p>
                <img :src="editIcon" alt=""  class="dotsIcons" @click="editTask(task)">
                <img :src="deleteIcon" alt=""  class="dotsIcons" @click="deleteTask(task)">
                </div>
                </div>
                <div v-else class="addTask">
                    <input type="text" class="addTaskInput" v-model="task['name']">
                    <div class="addTaskRow">
                        <p class="titleAddTask">Cycle Number</p>
                        <p class="titleAddTask">{{ task['cyleNumber'] }}</p>
                        <img :src="arrow_up" alt="" class="iconsTask" @click="incrementTask(task)">
                        <img :src="arrow_down" alt="" class="iconsTask" @click="decremenTask(task)">
                    </div>
                    <div class="buttonAddTask" >
                        <button class="cancelButton" @click="cancelEdit(task)" >Cancel</button>
                        <button class="saveButton" @click="saveEditTask(task)" >Save</button>
                    </div>
                </div>
                   
                
                
            </div>
        </div>
        <div class="addTask" v-if="isOpen">
          <input type="text" class="addTaskInput" placeholder="Add Task" v-model="currentTaskName">
         
          <div class="addTaskRow">
            <p class="titleAddTask">Cycle Number</p>
            <p class="titleAddTask">{{ cycleNumber }}</p>
            <img :src="arrow_up" alt="" class="iconsTask" @click="increment">
            <img :src="arrow_down" alt="" class="iconsTask" @click="decrement">
          </div>
          <div class="buttonAddTask" >
            <button class="cancelButton" @click="closeAddTask" >Cancel</button>
            <button class="saveButton" @click = "addTask" >Save</button>
          </div>
        </div>
        <div class="emptyTask" @click="openAddTask">
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
    cursor: pointer;
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
    cursor: pointer;

}
.addTask {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 30vw;
    justify-content: center;
    align-items: center;
    padding: 6px 5px;
    border-radius: 10px;
    margin-top: 10px;
    

}
.addTaskRow{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0;
    padding: 0;
    
}
.addTaskInput{
    width: 25vw;
    height: 35px;
    border-radius: 10px;
    border: none;
    background-color: rgba(0,0,0,0.1);
    margin: 0;
    padding: 2px 6px;
}
.titleAddTask{
    font-size: 1rem;
    color: black;
}
.iconsTask{
    color: black;
    background-color: black;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    cursor: pointer;
}
.buttonAddTask{
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 30px;
    
   

}
.cancelButton{
    background-color: black;
    padding: 10px 5px;
    color: white;
    width: 150px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.saveButton{
    background-color: wheat;
    padding: 10px 5px;
    color: black;
    width: 150px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

</style>