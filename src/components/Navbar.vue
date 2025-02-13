<script setup>
import { ref,inject } from 'vue';
import check from '../assets/check.svg';
import person from '../assets/person.svg';
import router from '@/router';
import { onMounted } from 'vue';
import VueCookies from 'vue-cookies';
import {jwtDecode} from 'jwt-decode';
import { useWindowSize } from '@vueuse/core';

const userName = ref("");
const showDropDown = ref(false);
const { width } = useWindowSize();
const tasks = inject('tasks');
function showDropDownMenu(){
    showDropDown.value = !showDropDown.value;
}
function logout(){
    VueCookies.remove('token');
    showDropDown.value = false;
    userName.value = "";
    tasks.value = [];
    router.push('/login');
}
function navigateElement(path){
    router.push(path);
}
function navigateToSignUp(){
    router.push('/signup');
}
onMounted(() => {
    const token = VueCookies.get('token'); 
    if (token) {
        const decoded = jwtDecode(token);
        userName.value = decoded['username'];
    }else{
        userName.value = "";
    }
});
</script>

<template>
    <nav class="navBar">
        <div class="navBarElment">
            <div class="titleNavBar">
                <img :src="check" >
            <h1 class="title">PomoTasks</h1>
            
            </div>
        <div class="rightNavBar" v-if="width > 1400">
            <button class="buttonNav">Report</button>
        <button class="buttonNav">Settings</button>
        <img :src="person" class="icons" @click="navigateToSignUp" v-if="userName === ''">
        <div style="position: relative;">
            <p v-if="userName !== ''" class="userName" @click="showDropDownMenu">{{userName}}</p>
            <div class="dropDown" v-if="userName !== '' && showDropDown">
                <p class="elementOfDropDown" @click="navigateElement('/profile')">Profile</p>
                <p class="elementOfDropDown" @click="navigateElement('/help')">Help</p>
                <p class="elementOfDropDown" @click="logout">Logout</p>

                
            </div>
        </div>

        </div>
        <div v-else>
            <img :src="person" class="icons" @click="navigateToSignUp" v-if="userName === ''">
            <div style="position: relative;">
                <p v-if="userName !== ''" class="userName" @click="showDropDownMenu">{{userName}}</p>
                <div class="dropDown" v-if="userName !== '' && showDropDown">
                    <p class="elementOfDropDown" @click="navigateElement('/report')">Report</p>
                    <p class="elementOfDropDown" @click="navigateHelp('/settings')">Settings</p>
                    
                    <p class="elementOfDropDown" @click="navigateElement('/profil')">Profile</p>
                    <p class="elementOfDropDown" @click="navigateHelp('/help')">Help</p>
                    <p class="elementOfDropDown" @click="logout">Logout</p>
                </div>
            </div>

        </div>
        </div>
    </nav>
</template>

<style scoped>
    .navBar {
        width: 100vw;
        height: 10vh;
        padding: 0;
        margin-top: 30px 0 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .titleNavBar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    image{
        height: 50px;
        width: 50px;
    }
    .navBarElment {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
        width: 40vw;
        box-shadow: 0px 0.5px  2px  #753939;  
    }
    .rightNavBar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .title {
        font-size: 2rem;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        cursor: pointer;
    }
   
    .buttonNav{
        background-color: rgba(255, 255, 255, 0.4);
        padding: 10px;
        border-radius: 4px;
        border: 1px solid white;
        margin: 0px 5px;
        color: white;
    }
    .icons{
        width: 30px;
        height: 30px;
        border: none;
        cursor: pointer;
        border-radius: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        padding: 5px;
    }
    .userName{
        font-size : 1rem;
        color: white;
        background-color: rgba(255, 255, 255, 0.4);
        padding: 7px 4px;
        border-radius: 4px;
        border : white solid 1px;
        cursor: pointer;
        width: 10vw;
        text-align: center;
        text-overflow: ellipsis;
    }
    .dropDown {
        position: absolute;
    top: 100%;  
    left: 0;
    background-color: white;
    color: black;
    border-radius: 4px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 5px 10px;
    z-index: 100;
    white-space: nowrap;
    }
    .elementOfDropDown{
        width: 10vw;
        cursor: pointer;
    }
</style>