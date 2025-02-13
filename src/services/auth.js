import axios from "axios"
import router from '@/router';
import VueCookies from 'vue-cookies';
import {jwtDecode} from 'jwt-decode';
function signUp(email , password){
    axios.post("http://localhost:8000/auth/register", {
        email: email,
        password: password}).then((response) => {

            console.log(response.data['token']);
            console.log(response.data['message']);
            VueCookies.set('token', response.data['token'], '1d'); // save the token in a cookie that expires in 1 day
            const decoded = jwtDecode(response.data['token']);
            VueCookies.set('user_id', decoded.id, '1d'); // save the user id in a cookie that expires in 1 day
            router.push("/"); // Redirect to the home page


        }).catch((error) => {console.log(error)});

}
function signIn(email , password){
    axios.post("http://localhost:8000/auth/login", {
        email: email,
        password: password}).then((response) => {
            console.log(response.data['token']);
            VueCookies.set('token', response.data['token'], '1d'); // save the token in a cookie that expires in 1 day
            const decoded = jwtDecode(response.data['token']);
            console.log(decoded);
            console.log(decoded.id);
            VueCookies.set('user_id', decoded.id, '1d'); // save the user id in a cookie that expires in 1 day
            router.push("/"); // Redirect to the home page
        }).catch((error) => {console.log(error)});
}



export  { signUp, signIn };