
import { AppBar, Toolbar , Typography , makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";


const usestyles =makeStyles({
components:{
    background:'#FFDAB9',
    color:'black'
},

container:{
    justifyContent: 'center',

    '&>*':{
        padding:20
    }
},
link:{

    textDecoration:'none',
    color:'inherit',
}

})

const Header=()=>{
    const classes = usestyles();
return(
    <AppBar className= {classes.components}>
        <Toolbar className={classes.container}>

        <Link className={classes.link} to='/'>  <Typography>HOME</Typography> </Link>
        
        
        

        </Toolbar>
    </AppBar>
)
};

export default Header;