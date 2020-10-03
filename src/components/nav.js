import React from 'react';
import { AppBar, Typography, Toolbar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    nav:{
        minHeight:"50px",
        background:"#F6FAFF"
    },
    logo:{
        color:"black",
        fontFamily:"'Roboto', sans-serif",
    },
    toolbarButton: {
        marginLeft:'auto',
        background:"white",
        color:'#5DE75A',
        border:'solid 2px #5DE75A',
        '&:hover':{
            background:'#5DE75A',
            color:'white'
        }
    }
    

});

const Nav = () => {

    const classes = useStyles();

    return (
        <nav >
            <AppBar position='static' className={classes.nav}>
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>SloFashion</Typography>
                    <Button size="large" variant='outlined' className={classes.toolbarButton}>Login</Button>
                </Toolbar>
            </AppBar>
        </nav>
    );

};

export default Nav;