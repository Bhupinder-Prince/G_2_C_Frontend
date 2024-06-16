import React,{ useState } from "react";
import  axios from "axios";
import { baseURL } from "../services/axios-config";
import { doLoginWithAxios } from "../services/controller-signup&login";
import { Route,Routes,json,useNavigate } from "react-router-dom";
import GrowerDashboard from "../Grower/GrowerDashboard";

export default function Login() {
    const [user,setUser]=useState({
        email:"",
        password:"",
      })
      let Navigate=useNavigate();

      function doUpdate(event)
      {
        var {name,value}=event.target;
        setUser({...user,[name]:value});
      }
      // function doUpdateemail(event)
      // {
      //   setemail({emailid:event.target.value})
      // }
      // function doUpdatepass(event)
      // {
      //   setpass({pass:event.target.value})
      // }
      async function doLogin()
      {
        const servermsg=await doLoginWithAxios(user);
        console.log(JSON.stringify(servermsg.data));
        if(servermsg.data.status==true&&servermsg.data.result!=null)
    {
      alert("Login Success"+JSON.stringify(servermsg.data.result.utype));
      localStorage.setItem("user", JSON.stringify(servermsg.data.result));
      Navigate("/GrowerDashboard");
    }
    else
      alert("Wrong Email or Password "+JSON.stringify(servermsg.data.err));
      }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  background-color:'#13ce66'">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-28 w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EK5Ol288fR1BkUD-Yr4I7vxbcsZf-YywtQ&usqp=CAU"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    onChange={doUpdate}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    onChange={doUpdate}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <input
                  type="button"
                  value="Login"
                  onClick={doLogin}
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  
                </input>
              </div>
            </form>
  
          </div>
        </div>
        <Routes>
          <Route path="/GrowerDashboard" element={<GrowerDashboard></GrowerDashboard>}></Route>
        </Routes>
      </>
    )
  }
  