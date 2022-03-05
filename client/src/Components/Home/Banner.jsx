
import { makeStyles , Box, Typography} from "@material-ui/core";

const usestyles = makeStyles({

    image:{
        background: `url(${'https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg'}) center/52% repeat-x #000`,
        width :'100%',
        height : '50vh',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        '& :first-child':{
                fontSize:70,
                color: '#F7F9F9',
                lineHeight:1,
                
        },
        '& :last-child':{
            fontSize:20,
                color: '#F7F9F9',
                
        },
    }

});



const Banner = ()=>{
    const classes = usestyles();
return(
    <Box className={classes.image}>
        <Typography>Share your Covid Story in One Line</Typography>
        <Typography>An Engineer's Intellect</Typography>

    </Box>
)
}

export default Banner;