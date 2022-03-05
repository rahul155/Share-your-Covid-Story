
import { Grid } from '@material-ui/core';
import Banner from "./Banner.jsx";
import Categories from "./Categories.jsx";
import Posts from "./Posts.jsx";

const Home = () => {
    return (
        <>
        
        <Banner />

        <Grid container>

            <Grid item lg={2} xs={12} sm={2}>
                <Categories/>
            </Grid>                

            <Grid item container lg={10} xs={12} sm={10}>
                <Posts/>
            </Grid>

        </Grid>     
              
                
               
        </>

    )
}


export default Home;