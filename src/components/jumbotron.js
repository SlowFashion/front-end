import React from 'react';
import { Box, Typography, Button, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {primaryBgColor, btnColor} from './themes/color';

const useStyles = makeStyles({
    root: {
        margin: "20px",
        display: 'flex',
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: 'space-around',
        maxWidth: '1000px',
        margin: '50px auto',
        background: primaryBgColor
    },
    title: {
        textAlign: 'left'
    },
    description: {
        textAlign: 'left'
    },
    accountBtn: {

    },
    left: {
        width: '50%'
    },
    right: {

    },
    btn: {
        background: "white",
        color: btnColor,
        border: `solid 2px ${btnColor}`,
        '&:hover': {
            background: btnColor,
            color: 'white'
        }
    }
});

const Jumbotron = () => {

    const classes = useStyles();

    return (
        
        <Box className={classes.root}>
            <Box className={classes.left}>
                <Typography gutterBottom variant='h4' className={classes.title}>Be Unique.</Typography>
                <Typography variant='body1' className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor autem, molestias at distinctio minima dolores temporibus voluptatum aspernatur ipsum perspiciatis sint cum tenetur culpa fugiat in accusantium cumque quisquam excepturi.</Typography>
            </Box>
            <Box className={classes.right}>
                <Button className={classes.btn} variant='outlined' size='medium'>Create Account</Button>
            </Box>

        </Box>

    )
}

export default Jumbotron;