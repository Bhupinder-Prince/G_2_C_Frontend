import React,{useState,useEffect} from "react";
import "../index.css";
import {useNavigate} from 'react-router-dom';

function ConsumerDashboard(){

    let navigate=useNavigate();

    function OpenConsumerProfile(){
        // navigate("/ConsumerProfile")
    }
    function OpenFindGrower(){
        navigate("/FindGrower")
    }
    function doLogout(){
        // localStorage.removeItem("token");
    }
    return(
        <>
        <div className="container">
        <div className="border-b border-gray-900/10 pb-4">
              <img
                  className=" h-20 w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EK5Ol288fR1BkUD-Yr4I7vxbcsZf-YywtQ&usqp=CAU"
                  alt="Your Company"
                />
              <h2 className="text-base text-lg font-semibold leading-7 text-gray-900">Consumer Dashboard</h2>
              
            </div>
          <div className="row-md-12">
            
            {/*=======================CARDS=====================================*/}
            <div class="grid gap-2 mt-8 mb-3 md:grid-cols-2">
                <div className="max-w-sm h-[520px] ml-[180px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" className="w-[400px] h-[250px] border-2 border-gray-300" src="/pics/consumer-profile.avif" alt="" />
                    </a> 
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-3 text-2xl font-bold text-gray-900 dark:text-black">Create Your Profile Here!!</h5>
                        </a>
                        <p class="mb-4 font-normal text-gray-700 dark:text-gray-500">"Let's take the lead in saving the environment by buying organic foods."</p>
                        <button type="button" onClick={OpenConsumerProfile} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Create Profile
                        </button>
                    </div>
                </div>
                <div class="max-w-sm h-[520px] ml-[60px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg"className="w-[400px] h-[250px] border-2 border-gray-300"  src="/pics/organic-groceries.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Buy Products Now!!</h5>
                        </a>
                        <p class="mb-4 font-normal text-gray-700 dark:text-gray-500">"Purchase best organic products and feel the esscence of real happiness and growth."</p>
                        <button type="button" onClick={OpenFindGrower} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Find Grower
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default ConsumerDashboard;