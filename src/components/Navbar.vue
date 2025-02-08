<script setup>
import { RouterLink } from 'vue-router';
import check from '../assets/check.svg';
import person from '../assets/person.svg';
import router from '@/router';
function navigateToSignUp(){
    router.push('/signup');
}
</script>

<template>
    <nav class="navBar">
        <div class="navBarElment">
            <div class="titleNavBar">
                <img :src="check" >
            <h1 class="title">PomoTasks</h1>
            </div>
        <div class="rightNavBar">
            <button class="buttonNav">Report</button>
        <button class="buttonNav">Settings</button>
        <img :src="person" class="icons" @click="navigateToSignUp">

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
</style>