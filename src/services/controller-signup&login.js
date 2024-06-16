import { publicAxios } from "./axios-config";

const doSignupWithAxios= (obj)=>
{
   return  publicAxios.post("/Signup/save-user",obj);
}

const doLoginWithAxios=(obj)=>
{
   return publicAxios.get(`/Login/login-user?email=${obj.email}&password=${obj.password}`);
}

export {doSignupWithAxios,doLoginWithAxios}