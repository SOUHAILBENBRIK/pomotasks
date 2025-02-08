<script setup>
import check from '../assets/check.svg'
</script>

<template>
    <div class="title_row">
        <img :src="check" alt="check" class="icons"/>
        <h1 class="title">PomoTaks</h1>
    </div>
    <p class="subClass">Create Account</p>
    <div class="form">
        <input type="text" placeholder="Name" class="input"/>
        <input type="email" placeholder="Email"  class="input"/>
        <input type="password" placeholder="Password"  class="input"/>
        <button class="signUpButton">Sign Up</button>
    </div>
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
}
.subClass {
    font-size: 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    text-align: center;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    color: white;
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
</style>