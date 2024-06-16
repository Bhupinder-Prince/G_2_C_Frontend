import { useState } from "react";
import { doSaveProductWithAxios } from "../services/controller-availProduct";
export default function AvailProduct()
{
    const [obj,setObj]=useState(
        {
            email:"",
            category:"",
            items:"",
            selitems:"",
            city:"",
            productpic:"",
        }
        
    )

    const [ppath,setPrev]=useState("");

    const [itemsObj,setItemsObj]=useState([]);

    function doUpdate(event)
    {
        var {name,value}=event.target;
        setObj({...obj,[name]:value});
        setObj({...obj,[name]:value,"selitems":itemsObj});
    }

    function doUpdatePic(event)
  {
    
    setObj({...obj,["productpic"]:event.target.files[0]});
    setPrev(`https://mern-project-g-2-c-1.onrender.com/uploads/${event.target.files[0]}`);
    // alert(obj.productpic);
    // alert(ppath);
  }

  function doUpdateitems(event)
  {
    let arr;

      var {name,value}=event.target;
      setObj({...obj,[name]:value});

      var milkproduct=['Ghee','Milk','Curd','Cream','Cheese','Butter','Lassi','Khoyaa'];
      var vegetable=['Ladyfinger','Spinach','Pumpkin','Carrot','Raddish','Tomato','Cucumber','Potato','Beans','Cauliflower','Cabbage'];
      var fruits=['Mango','Apple','Banana','Grapes','Orange','Watermelon','Pineapple'];
      var Oil=['Mustard','Sesame','Olive','Soyabean','Sunflower'];
      var nuts=['Almond','Peanut','Walnut','Pistashio','Cashew'];

        if(value=="Milk Products")
          setObj({...obj,[name]:value,"items":milkproduct});
        if(value=="Vegetable")
          setObj({...obj,[name]:value,"items":vegetable});
        if(value=="Fruit")
          setObj({...obj,[name]:value,"items":fruits});
        if(value=="Oil")
          setObj({...obj,[name]:value,"items":Oil});
        if(value=="Nuts")
          setObj({...obj,[name]:value,"items":nuts});    
       
  }

  function doUpdateselitems(event)
  {
    let x= itemsObj+event.target.value+",";
    setItemsObj(x);
       
  }

    async function doSaveProduct()
    {
        var formdata=new FormData();
        for(var prop in obj)
        {
        formdata.append(prop,obj[prop]);
        }

        const serverMsg=await doSaveProductWithAxios(formdata,{headers:{'Content-Type':'multipart/form-data'}})
        
        ;
        if(serverMsg.data.status==true)
        {
            alert(JSON.stringify(serverMsg.data.rec));
        }
        else
        {
            alert(serverMsg.data.err);
        }
    }
        return(
            <>
            <div className="border-b border-gray-900/10 pb-12 p-12">
            <div className="border-b border-gray-900/10 pb-4">
              <img
                  className=" h-20 w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EK5Ol288fR1BkUD-Yr4I7vxbcsZf-YywtQ&usqp=CAU"
                  alt="Your Company"
                />
              <h2 className="text-base text-lg font-semibold leading-7 text-gray-900">Avail Products</h2>
              
            </div>
    
              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={doUpdate}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                    Product Category
                  </label>
                  <div className="mt-2">
                    <select
                      type="text"
                      name="category"
                      value={obj.category}
                      onChange={doUpdateitems}
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                      <option value="Select">Select</option>
                      <option value="Milk Products">Milk Products</option>
                      <option value="Vegetable">Vegetable</option>
                      <option value="Fruit">Fruit</option>
                      <option value="Oil">Oil</option>
                      <option value="Nuts">Nuts</option>

                      </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                    Product Items
                  </label>
                  <div className="mt-2">
                    <select
                      type="text"
                      name="items"
                      onChange={doUpdateselitems}
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                      <option value="Select">Select</option>
                      <option value={obj.items[0]}>{obj.items[0]}</option>
                      <option value={obj.items[1]}>{obj.items[1]}</option>
                      <option value={obj.items[2]}>{obj.items[2]}</option>
                      <option value={obj.items[3]}>{obj.items[3]}</option>
                      <option value={obj.items[4]}>{obj.items[4]}</option>
                      <option value={obj.items[5]}>{obj.items[5]}</option>
                      <option value={obj.items[6]}>{obj.items[6]}</option>
                      <option value={obj.items[7]}>{obj.items[7]}</option>

                     

                     
                      </select>
                  </div>
                </div>
    
                <div className="col-span-4">
                  <label htmlFor="items" className="block text-md font-medium leading-6 text-gray-900">
                    Items of Selected Category
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="selitems"
                      id="selitems"
                      value={itemsObj}
                      onChange={doUpdate}
                      autoComplete="items"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label htmlFor="items" className="block text-md font-medium leading-6 text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={doUpdate}
                      autoComplete="city"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                 <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label className="block text-md font-medium leading-6 text-gray-900">Product Picture</label>
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer px-4 rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a Picture</span>
                          <input id="file-upload" onChange={doUpdatePic}  name="productpic" type="file" className="sr-only" />
                        </label>
                        <img src={ppath} width ="100" height="100"></img>
                 </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center place-content-center mt-4 px-12 gap-x-6">
            <input
              type="button"
              value=" Publish"
              className="rounded-md bg-green-600 px-3 w-32 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={doSaveProduct}
            />
             
          </div>
    
            </>
        )

}