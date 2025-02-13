<script setup>
import check from '../assets/check.svg'
import google from '../assets/google.svg';
import {signIn} from "../services/auth.js";
import { ref } from 'vue';
const email = ref("");
const password = ref("");
</script>

<template>
    <div class="title_row">
        <img :src="check" alt="check" class="icons"/>
        <h1 class="title">PomoTaks</h1>
    </div>
    <p class="subClass">Log In</p>
    <div class="form">
        
        <input type="email" placeholder="Email"  class="input" v-model="email" />
        <input type="password" placeholder="Password"  class="input"  v-model="password"/>
        <button class="signUpButton" @click="() => signIn(email,password)">Log in</button>
        <div class="orDiv">
            <div class="vi"></div>
            <p>Or</p>
            <div class="vi"></div>
        </div>
        <button class="googleButton">
            <img :src="google"  class="iconG">
            Login with Google
        </button>
    </div>
    <p class="subClass">Do not have an account?</p>
    <router-link to="/signup" class="navigatorButton">Create Account</router-link>
</template>

<style scoped>
.title_row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    gap: 5px;
}
.icons {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
.title {
    font-size: 3rem;
    color: white;
}
.subClass {
    font-size: 1.5rem;
    color: white;
    text-align: center;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    padding: 0;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
}
.input {
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 7px 10px;
    color: black;
    width: 20vw;
    border-radius: 5px;
    height: 30px;  
}
.signUpButton{
    background-color: #BA4949;
    height: 35px;
    color: white;
    border: none;
    border-radius: 10px;
    width: 15vw;
}
.googleButton{
    background-color: rgba(0, 0, 0, 0.2);
    height: 35px;
    color: black;
    border: none;
    border-radius: 10px;
    width: 15vw;
    display : flex;
    justify-content: center;
    align-items: center;

}
.iconG{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.vi{
    width: 10vw;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.4);
    margin: 0;
    padding: 0;
}
.orDiv{
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
}
.navigatorButton{
    color: white;
    cursor: pointer;
    text-decoration: underline;
    font-size: 1rem;
    font-weight: bold;
}
.navigatorButton:hover{
    color: white;
}
.navigatorButton:visited{
    color:white;
}
</style>