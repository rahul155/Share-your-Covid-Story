import { Box, Typography ,makeStyles } from "@material-ui/core";


const useStyles=makeStyles({
container:{
    height:350,
    margin:10,
    borderRadius:10,
    border:'1px solid d3cede',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    '&>*':{
        padding:'0 5px 5px 5px',
    }

},

text:{

        color:'#878787',
        fontSize:13
},

heading:{

    fontSize:19,
    fontWeight:600

},

detail:{
    fontsize:14,
    wordBreak:'break-word',
},

image:{

    height:150,
    width:'100%',
    objectFit:'cover',
    borderRadius:'10px 10 px 0 0'
}


}



)


const Post = ({post})=>{

    const classes=useStyles();
    const url= 'https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    return(

        

        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
            
            <Typography className={classes.heading}>Storyteller :- {post.title}</Typography>
            
            <Typography className={classes.detail}>{post.description}</Typography>

        </Box>

        

    )

}

export default Post;