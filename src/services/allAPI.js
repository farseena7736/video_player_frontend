import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"



//upload videos 
export const uploadAllVideo= async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/video`,reqBody)
}

//get all video from json server

export const getAllVideos = async()=>{
    return await commonAPI('GET',`${serverURL}/video`,"")
}

//api to delete a video
export const deleteAVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
}

//api to add data to watch history
export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//api to get history from json-server
export const getAllHistory= async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}
//api to delete history
export const deleteAHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add categories
export const addToCategory = async(body)=>{
    return await commonAPI('POST',`${serverURL}/cstegories`,body)
}

//api to get category
export const getAllCategory= async()=>{
    return await commonAPI('GET',`${serverURL}/cstegories`,"")
}
export const deleteACategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/cstegories/${id}`,{})
}


//api to get a particular video
export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/video/${id}`,"")
}

//api to update  category 
export const updateCategory = async(id , body)=>{
return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
 
}