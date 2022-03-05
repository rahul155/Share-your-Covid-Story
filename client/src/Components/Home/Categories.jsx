
import { Button, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

const usestyles = makeStyles({

    create: {
        margin: 20,
        background: '#CD5C5C',
        color: '#ECF0F1',
        width:'86%',

    },

    table:{
        border:'1px solid rgba(224,224,224,1)'
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
});

const Categories = () => {
    const classes = usestyles();
    return (
        <>
            <Link to='/create' className={classes.link} > <Button variant='contained' className={classes.create}>Write your Experience</Button></Link>

            
        </>
    )

}

export default Categories;
