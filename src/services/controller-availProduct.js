import { publicAxios } from "./axios-config";

const doSaveProductWithAxios= (obj)=>
{
   return  publicAxios.post("/growerProfile/avail-product",obj);
}

export {doSaveProductWithAxios}