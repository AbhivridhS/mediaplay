import commonAPI from "./commonAPI";
import serverUrl from "./baseURL";
//upload video
export const uploadVideoAPI=async (uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)
}
//get 
export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${serverUrl}/allVideos`,"")
}
//store watch history api must called buy video card
export const storeHistoryAPI =async (videoDetails)=>{
    return await  commonAPI("POST",`${serverUrl}/history`,videoDetails)
}
//gethistory api must called history component
export const getHistoryAPI =async()=>{
    return await commonAPI("GET",`${serverUrl}/history`,"")
}
//removehistory api called history component
export const removeHistoryAPI =async(historyId)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${historyId} `,{})
}
//remove video api called by video card
export const removeVideoAPI =async(videoId)=>{
    return await commonAPI("DELETE",`${serverUrl}/allVideos/${videoId} `,{})

}
//add category api
export const addCategoryAPI=async (categoryDetails)=>{
    return await commonAPI("POST",`${serverUrl}/categories`,categoryDetails)
}
// get category api
export const getCategoryAPI =async()=>{
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}
//remove category api
// REMOVE API
export const removeCategoryAPI = async (categoryId) => {
    return await commonAPI("DELETE", `${serverUrl}/categories/${categoryId}`, {}); 
};