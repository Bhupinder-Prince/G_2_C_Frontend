import React, { useState } from "react";
import '../index.css';
import axios from "axios";
import {doSaveProfileWithAxios,doSearchWithAxios,doUpdateProfileWithAxios}from "../services/controller-growerProfile"


export default function Profile() {

    // console.log("rendered");

   
  // alert(UserinSession.access_token)
    const [obj,setObj]=useState({
      email:"",
      pname:"",
      mobile:"",
      address:"",
      city:"",
      state:"",
      category:"",
      adhaarno:0,
      adhaarpic:"",
    });
    const [path,setprev]=useState("");

    function doUpdate(event){
        var{name,value}=event.target;
        setObj({...obj,[name]:value});
    }
    function doUpdatePic(event)
    {
        setObj({...obj,["adhaarpic"]:event.target.files[0]});
    }
    async function doSaveProfile()
    {
        // alert("hello");
        
        var formdata= new FormData();
        for(var prop in obj)
        {
            formdata.append(prop,obj[prop]);
            
        }
        const servermsg=await doSaveProfileWithAxios(formdata,{headers:{'Content-Type':'multipart/form-data'}});
        console.log(JSON.stringify(servermsg));
        if(servermsg.data.status==true)
            alert("Saved Successfully");
        else
            alert(servermsg.data.msg+"  "+servermsg.data.err);
    }

    async function doSearch()
    {
        const servermsg=await doSearchWithAxios(obj);
        // alert(servermsg.data.obj.pic);
        if(servermsg.data.status==true)
        {
          if(servermsg.data.result!=null)
          {
                alert(JSON.stringify(servermsg));
              setObj(servermsg.data.result);
              setprev(`https://mern-project-g-2-c-1.onrender.com/uploads/${servermsg.data.result.adhaarpic}`);
          }
          else{
            alert("Profile Not Saved!!!!");
          }
        }
        else{
          alert(servermsg.data.msg+"  "+servermsg.data.err);
        }

    }
    async function doUpdateProfile()
    {
        // alert("hello");
        
        var formdata= new FormData();
        for(var prop in obj)
        {
            formdata.append(prop,obj[prop]);
            
        }
        const servermsg=await doUpdateProfileWithAxios(formdata,{headers:{'Content-Type':'multipart/form-data'}});
        alert(JSON.stringify(servermsg));
        if(servermsg.data.success==true)
            alert("Updated Successfully");
        else
            alert("Something went wrong  "+servermsg.data.err);
    }



  return (
   
      <div className="space-y-12 p-8">
        <div className="border-b border-gray-900/10 pb-4">
          <img
              className=" h-20 w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EK5Ol288fR1BkUD-Yr4I7vxbcsZf-YywtQ&usqp=CAU"
              alt="Your Company"
            />
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          
        </div>

        <div className="border-b border-gray-900/10 pb-4">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <div className="flex-auto flex space-x-4">
          <div className="sm:col-span-3 mt-4">
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
                  className="block w-[715px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-12 ">
            <input
              type="button"
              value=" Search"
              className="rounded-md w-[150px] bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={doSearch}
            />
            </div>
            </div>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pname"
                  value={obj.pname}
                  onChange={doUpdate}
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="mobile"
                  value={obj.mobile}
                  onChange={doUpdate}
                  id="mobile"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </div>
            

            
           
            <div className="sm:col-span-6 mt-4">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                 Address(Shop/Home)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  value={obj.address}
                  onChange={doUpdate}
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-4 flex-auto flex grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  value={obj.city}
                  onChange={doUpdate}
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                State
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  value={obj.state}
                  onChange={doUpdate}
                  id="state"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
              <div className="mt-2">
                <select
                  type="text"
                  name="category"
                  value={obj.category}
                  onChange={doUpdate}
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                  <option value="Select">Select</option>
                  <option value="Milk Products">Milk Products</option>
                  <option value="Vegetable">Vegetable</option>
                  <option value="Fruit">Fruit</option>
                  <option value="Others">Others</option>
                  </select>
              </div>
            </div>
          </div>
          <div className="mt-4 flex-auto flex grid grid-cols-2 gap-x-6 gap-y-8 ">
          <div className=" mt-4 ">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Adhaar Card Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="adhaarno"
                  value={obj.adhaarno}
                  onChange={doUpdate}
                  
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        </div>
        <div className="sm:col-span-2">
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a Picture</span>
                      <input id="file-upload" name="pic" onChange={doUpdatePic}type="file" className="sr-only" />
                    </label>
                    <img src={path} width ="100" height="100"></img>

                  </div>
                  </div>
          <div className=" flex items-center px-12 gap-x-6">
        <input
          type="button"
          value=" Save"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={doSaveProfile}
        />
        
        <input
          type="button"
          value=" Update"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={doUpdateProfile}
        />
         
      </div>

      
      </div>
      </div>
      
    
  )
}
