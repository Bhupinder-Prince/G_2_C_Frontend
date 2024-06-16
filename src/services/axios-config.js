import axios from "axios";

// const baseURL="http://localhost:2004";
const baseURL="https://g-2-c-backend-1.onrender.com";

const publicAxios=axios.create({baseURL});

export {publicAxios,baseURL};
