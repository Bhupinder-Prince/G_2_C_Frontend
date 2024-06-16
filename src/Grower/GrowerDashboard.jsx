import { useNavigate,Routes,Route } from "react-router-dom"
import GrowerProfile from "../Grower/GrowerProfile";
import AvailProduct from "./AvailProduct";
import ItemManager from "../Manager/ItemsManager";
export default function GrowerDashboard()
{
    let Navigate=useNavigate();
    return(
        <>
      
        <div className=" pb-12 p-6">
            <div className="border-b border-gray-900/10 pb-4">
              <img
                  className=" h-20 w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EK5Ol288fR1BkUD-Yr4I7vxbcsZf-YywtQ&usqp=CAU"
                  alt="Your Company"
                />
                <h2 className="text-base text-lg font-semibold leading-7 text-gray-900">Grower DashBoard</h2>
              
            </div>
            </div>
            <div class="flex ">
            <div class="flex font-sans w-[450px] border shadow m-auto">
            <div class="flex-none w-56 relative">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAe1BMVEX///8AAAD29vbX19fk5OQiIiLAwMBdXV13d3fv7+/4+Pi1tbWpqamvr6/Z2dnPz89qamrh4eGEhITq6upXV1eYmJijo6MMDAxERETGxsaOjo6ZmZlJSUk6OjpOTk5+fn4zMzNwcHArKytkZGQVFRUmJiYeHh6Kioo/Pz9UmnRhAAAJAElEQVR4nO2aa3viug6FE6CFcKcByq3c2/L/f+EhiS3Jjr0gdM75crSemb0nsWPLb2RZNkmyliqqLGklqqhaigdJ8UApHijFA6V4oBQPlOKBUjxQigdK8UApHijFA6V4oBQPlOKBUjxQigdK8UApHijFA6V4oBQPlOKBUjxQigdK8UApHijFA6V4oBQPlOKBUjxQigdK8UApHijFA6V4oBQPlOKBUjxQigdK8UApHijFA6V4oBQPlOKBUjxQigdK8UApHijFA6V4oBQPlOKBUjxQigdK8UApHijFA6V4oBQPlOKBUjxQigdK8UA9iWeyuBw/05/bdNt27vfbRuPyT7uT9yMtrDfzc3pd9QYZ37MPt2fmRmaaaufmRse2ntu+xvQfujRtmZKqbJZHxjVZdI9p+r07LcdPjPsZPP1NKnRdCAKztKZz773ewkJUmFoYyc3e+jE3lvZGz9zo2hvvwb4qlcDrt6/TYYbsSM/Df4FnUOt4TWWdsMG/bgvvXvGHuc/YDfGevV6ZGp/2Rh7ty+B5CxZdOsiO9MedC6/g6QV63TzAk6YT0cJHrfSYeeYaR1/Z609jHY0D9QXwpOmW7dgEikd/xBOik6bLR3jSAWzhreU+bWpzhSr4tO1l92U86cnasQwW1yNBEzzDSKfjR3hsjWQRLD26OCp3zLm88r6Rvdy+jiddVHbEQpcfn5rgySNtpueHeL6rGuNIcRl/5vZqXtZdc3EVNQ/2cv0HPGm1FOwipZc/4JlG+1w/wmMmzBddXwfjyZyLC6MpGlzLulsuPbhDyv6CZ+q9psty+Cuq5/6gn8YjLVp28pmwf+5VOAzvWnTFA/uignCIchTMpzD63S08ceVd2Txdun3tulJ7F89+dDdk6QS8vnwTabVacdTYJnFhPL/UxrlaejNaaVMvuJrFviX8o+/gqMKLeIn3BjLXZva0CghN7WmwL0eEx6ZMIuYV9WlRtMkORer9y3gYhg20706fwmRaAc506z59+mzjxG+ymHxXe1EssKJy5fLkettIXwiPyCeKx52GXUtexcPBfl4ntomYzFnkHeCEx2sSNPaQYhw0GT8Sb20paG7lRWM87JqHIB6af2DtgnhoXRXZEzXqOTyZzIvdwMkLch9PEV5oBhT8naS2mAO0MGSv4Em+7a2T9ExKyAg+iM0QD7snb99owLeIyZTpFoaIWF7Dc0xk5E68DOlDjO8teQnPXt7ilu1YaCSdQHPP4OG4ypXoFV8jJrP3TJw8PoiHJ0BmncVU2AvQ09fw0K1fB0/aq8JgPzOKA8B4jtQib9In+2o5nXcjJnPsyZxEvobnq7ik2Hw3+af8x7b636dY5ZYenlHeyfNOp3P/S9aj2FPMJzeDO8g94at4uLnYKU4ADzE9OqzqeEq+F3s1tOFhbXy2xQ9PvL6E6Eyijoezkjypnzt8PkXon+ExuciMc/fCcrEYmVMeXvfLvRAFp4N1lvzDMqHQ14/joTXDx9NiOnNvMFbXZWxY/x5P9+Pw0bvw4M0Rl5vmyMBdZYK08q/s+7Uhc0Sh9ej3BfF83Q05TG+iThWLR4Gn00cHYo3wjEcDoajJ0iiOzXvPyOpIhwOEqfplif1S96dGeGoyO/bkFCpc4QOLRnjcExOMx0w2Hn5pZpsvzYsj92p1DQvzyLzl1XwRD59cnoLlrx9ocBtN8cwp1eIQkH6fxKGCPV6mFWVSZTlL2+03zbv2H/Cc5f4sOL/O/3s8chP8E65i1w1q0ySFa0rnaF72X8czdQfUD53NLZK4/kvec+ZMNHyiZk9j5a6sVE7Jup125lxN9LWfWl3IOWKTy08h171PvwpYvyCeb6+FJrGHp3TovJDfWMsrSWpzwCYyTx5oPOJzfyO/Pw9qPIeHNi1msAjPcbVaydVUnKLk36mngejk7JQUO7m2W9kuvk9uKn52d0uu4vmQc8zkLNsEKjyDh4/cqug42WwWpwie6o2Kw0G50XOnfNfZIp+cssJVPIeyv0U9iac6hs15FSjn8SC9luLNNeXrVfr+Ah72Fk6fnD123WQOJUvZUmtJe43DLHHkumTZkev79u0325L2KcTsKzxGvJUgD5sHmnsGD3v5LTCasMmEwVs0kmwyGI3W9cMDNzaXTjiXd75sxYY7dk5Iiys6aOAXfforHrF0UTT8cnqtm0wT8lZrrd8KhQHnCLXauDo/Zx5sxYZ42M2LwEnrw46eIDz+ixTCeKgFCiXi+C9sMu0x35yWxptd6czH+gcKMjZXOw1nd02ZTcOjeF4wy3BTZ0uTCyQ+GI90/M04y8by95EwnqFTbjRwlqeN26Vsc+eNLBUHldEfcsZBPFy9DDe8ChveU7f8FTziQKyuMB5+89TwrNaK88O//J3afLvhd+ON19MkiMc51HU88u1jOJSfRYDxP8AjFuon8fATdoWqfwDjTneZ5pjAKRKlFdVriIcZL/02Xb28qUjQr8gRPHwAZiJE+MMIEbhlbDZ+zjkJfQv0BzzVnt3fvVh9ouE//IAlCj2Ch08wqhkU8p1CIhcTc88YI9JITrCb4qFo00XvKYXf0D3Ek1295lbWocJ4+KWV7z36xZvwafoOw3yJ4PzixUlkUzwU8u0aug09HFoFG+ARv2RWymwojeChiVFaBWI7ZYi8BbUJmoDKdjTFw35re5rU9q039HnGc3iStfg0YJ/TJHbHEf4ROfb1VCFK0Hgdt4GGw9EXmxF1xBIPXdHXYDzN+aevkfO6bvjTsCfx3AewvdzbPXcXxUS1H+sm4t/tNh9gyM9xZ+24JvUn8todsQnphxopVI5gXH+CbsnEpjM6zO9Z2Pe+NwK/jjbD838rxQOleKAUD5TigVI8UIoHSvFAKR4oxQOleKAUD5TigVI8UIoHSvFAKR4oxQOleKAUD5TigVI8UIoHSvFAKR4oxQOleKAUD5TigVI8UIoHSvFAKR4oxQOleKAUD5TigVI8UIoHSvFAKR4oxQOleKAUD5TigVI8UIoHSvFAKR4oxQOleKAUD5TigVI8UIoHSvFAKR4oxQOleKAUD5TigVI8UIoHSvFAKR4oxQOleKBaSdZSRZX9B4IeY8F1CweYAAAAAElFTkSuQmCC"></img>                
            </div>
            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                <h1 class="flex-auto font-medium text-slate-800">
                    Grower Profile
                </h1>
                </div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                <div class="flex-auto flex space-x-4">
                    <button class="h-10 px-6 font-semibold rounded-full bg-green-600 text-white"  onClick={()=>Navigate("/Profile")} type="button">
                    Press Here
                    </button>
                    
                </div>
                </div>
            </form>
            </div>


            <div class="flex font-sans w-[500px] border shadow m-auto">
            <div class="flex-none w-56 relative">
                <img src="data:image/png;base64,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"></img>
            </div>
            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                <h1 class="flex-auto font-medium text-slate-800">
                    Avail Product
                </h1>
                </div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                <div class="flex-auto flex space-x-4">
                    <button class="h-10 px-6 font-semibold rounded-full bg-green-600 text-white" onClick={()=>Navigate("/Avail")} type="button">
                    Press Here
                    </button>
                </div>
                </div>
                
            </form>
            </div>
            
            </div>
            <div class="flex mt-10">
            <div class="flex font-sans  w-[500px] border shadow m-auto">
            <div class="flex-none w-56 relative">
                <img src="https://www.shutterstock.com/image-vector/im-letter-logo-icon-design-260nw-2019181664.jpg" />
            </div>
            <form class="flex-auto p-6">
                <div class="flex flex-wrap">
                <h1 class="flex-auto font-medium text-slate-800">
                    Item Manager
                </h1>
                </div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                <div class="flex-auto flex space-x-4">
                    <button class="h-10 px-6 font-semibold rounded-full bg-green-600 text-white" onClick={()=>Navigate("/Item")} type="button">
                    Press Here
                    </button>
                </div>
                </div>
            </form>
            </div>
            </div>
            <Routes>
                <Route path="/Profile" element={<GrowerProfile></GrowerProfile>}></Route>
                <Route path="/Avail" element={<AvailProduct></AvailProduct>}></Route>
                <Route path="/Item" element={<ItemManager></ItemManager>}></Route>


            </Routes>
            </>
    )
}