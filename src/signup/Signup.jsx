import React,{ useState } from "react";
import  axios from "axios";
import { baseURL } from "../services/axios-config";
import { doSignupWithAxios} from "../services/controller-signup&login";

export default function Signup() {

      const [user,setUser]=useState({
        email:"",
        password:"",
        utype:"",
      })

      function doUpdate(event)
      {
        var {name,value}=event.target;
        setUser({...user,[name]:value});

      }
      async function doSignUp()
      {
        // const url= `${baseURL}/Signup/save-user`;
        const servermsg=await doSignupWithAxios(user);
        console.log(JSON.stringify(servermsg.data));
        // console.log(servermsg.data.user.email);
        if(servermsg.data.status==true)
            alert("Signed Up Successfully!!!!");
        else
            alert(servermsg.data.msg+"  "+servermsg.data.err);
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
              Sign Up to your account
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
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  User Type
                </label>
                <div className="mt-2">
                  <select
                  id="utype"
                  name="utype"
                  onChange={doUpdate}
                  type="utype"
                  autoComplete="utype"
                  required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  > 
                  <option value="Select">Select</option>
                   <option value="Grower">Grower</option>
                  <option value="Consumer">Consumer</option>
                  </select>
                  
                </div>
              </div>
              
  
              <div>
                <input
                  type="button"
                  value="Sign Up"
                  onClick={doSignUp}
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  
                </input>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  