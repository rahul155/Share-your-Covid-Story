import axios from 'axios';

const URL ='';

export const createPost =async(post)=>{
    try {

        return await axios.post(`${URL}/create`,post);
        
    } catch (error) {

        console.log("Error while calling CreatePost Api",error);
        
    }
    
} 

export const getAllPosts=async()=>{
    try {
        let response= await axios.get(`${URL}/posts`);
        return response.data;
        
    } catch (error) {
        console.log('Error while Calling getAllPosts API ',error);
        
    }
}

