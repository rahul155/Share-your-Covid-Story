import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";
import { useState } from "react";
import { createPost } from "../../../service/api";
import { useNavigate } from "react-router-dom";


const usestyles=makeStyles((theme) =>({

    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    container:{
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding:0
        }
    },
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:'10px'
    },
    textfield:{
        flex:1,
        margin:'0 30px',
        fontSize:26,

    },
    TextArea:{
        width:'100%',
        marginTop:50,
        border:'none',
        fontSize:18,
        '&:focus-visible':{
            outline:'none'
        }
    }
}))



const initialvalue={
    title:'',
    description:'',
    picture:'',
    username:'AEI',
    categories:'all',
    createdDate:new Date()


}



const CreateView=()=>{
    const classes=usestyles();
    const url='https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_960_720.jpg';
    const navigate = useNavigate();

    const[post,setPost]=useState(initialvalue);

    const handleChange= (e)=>{

        setPost({...post,[e.target.name]:e.target.value})

    }

    const savePost =async()=>{
        await createPost(post);
        navigate("/");
    }

        return(

            <Box className={classes.container}>
                <img src={url} alt='banner' className={classes.image} />

                <FormControl className={classes.form}>
                    <AddCircle  fontSize="large" color="action" />
                    <InputBase onChange={(e)=>handleChange(e)} 
                    placeholder="Your Name"
                    className={classes.textfield}
                    name='title'
                     />
                    <Button onClick={()=> savePost()} variant='contained' color='primary'>Share</Button>                  
                   
                </FormControl>

                <TextareaAutosize
                    onChange={(e)=>handleChange(e)}
                    minRows={6}
                    className={classes.TextArea}
                    placeholder="Jot Down Your Covid Story in One Line"
                    name='description'  



                    />

            </Box>
        )

}

export default CreateView;