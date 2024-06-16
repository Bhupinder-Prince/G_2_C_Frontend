import axios from "axios";

// const baseURL="http://localhost:2004";
const baseURL="https://mern-project-g-2-c-1.onrender.com";

const publicAxios=axios.create({baseURL});

export {publicAxios,baseURL};
