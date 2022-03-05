import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../../service/api.js';

import Post from './Post.jsx'

const Posts = () => {

    const [posts,setPosts]=useState([]);

    useEffect(() =>{

        const fetchData = async()=>{

            let data= await getAllPosts();
            console.log(data);
            setPosts(data);

        }
        fetchData();

    }, []);

    


    
    return (

        posts.map(post => (
            <Grid item lg={3} sm={4} xs={12}>


               

                <Post post={post} />

                                
            </Grid>
        ))






    )


}

export default Posts;