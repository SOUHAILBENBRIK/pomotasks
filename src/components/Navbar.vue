<script setup>
import check from '../assets/check.svg';
</script>

<template>
    <nav class="navBar">
        <div class="navBarElment">
            <div class="titleNavBar">
                <img :src="check" >
            <h1 class="title">PomoTasks</h1>
            </div>
        <div>
            <button class="buttonNav">Report</button>
        <button class="buttonNav">Settings</button>
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
</style>