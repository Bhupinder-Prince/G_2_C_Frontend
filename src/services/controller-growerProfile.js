import { publicAxios } from "./axios-config";
var UserinSession = JSON.parse(localStorage.getItem("user"));
const doSaveProfileWithAxios= (obj)=>
{
   return  publicAxios.post("/growerProfile/save-profile",obj, {

      headers: {
         'Authorization' : `Bearer ${UserinSession.access_token}`
      }

   });
}

const doSearchWithAxios=(obj)=>
{
   return publicAxios.get(`/growerProfile/search-profile?email=${obj.email}`);
}

const doUpdateProfileWithAxios= (obj)=>
{
   return  publicAxios.post("/growerProfile/update-profile",obj);
}
export {doSaveProfileWithAxios,doSearchWithAxios,doUpdateProfileWithAxios}