import { publicAxios } from "./axios-config";


function doSearchAxiosGet(email)
{
    return publicAxios.get("/growerProfile/fetch-growerdata?email="+email);
}

function fetchCity()
{
    return publicAxios.get("/growerProfile/fetch-city");
}

function findGrower(obj)
{
    return publicAxios.post("/growerProfile/find-grower",obj);
}

// function doValidateTokenWithAxios()
// {
//     return privateReq.get("/growerprofile/validate-token");
// }

// function doPublishValidatetoken(obj)
// {
//     return privateReq.post("/growerprofile/avail-product",obj)
// }

function fullGrowerDetails(gemail)
{
    return publicAxios.get("/growerprofile/get-full-details?email="+gemail);
}

export {doSearchAxiosGet,fetchCity,findGrower,fullGrowerDetails};