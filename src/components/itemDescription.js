import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Divider, Avatar, Button } from '@material-ui/core';
import {primaryBtn} from '../components/themes/components';
import Parser from 'html-react-parser';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexFlow: 'row no wrap',
        alignItems: 'flex-start'
    },
    poster: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center'
    },
    images: {
        width: '50% !important',
        height: '100vh !important',
        backgroundPosition: 'center !important',
        backgroundSize: 'cover !important'
        //     top: "50%",
        // height:'90vh',
        // position: 'relative',
        // transform: 'translateY(-50%)',

    },
    icons: {

    },
    description: {
        margin:'20px 40px',
        textAlign:'left',
        maxWidth:'40vw'
    },
    detailsContainer: {
        // margin: '20px',
        // width: '50vw',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center'
    },
    divders: {
        marginTop: '20px',
        width: '50vw'
    },
    posterDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    posterImg: {
        marginRight: '10px',
        height: '75px',
        minWidth: '75px'
    },
    posterContainer:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between',
        margin:'20px',
        alignItems:'center'
    },
    cartBtn:{
        ...primaryBtn,
        height:'50px'
    }


});


const ItemDescription = ({ name, category, image, price, madeBy, location, rating, numReviews, description }) => {
    console.log(image)
    const classes = useStyles();

    return (
        <Box className={classes.root}>

            <Box style={{ background: `url(${image})` }} className={classes.images}>
                {/* <img className={classes.images}  src={image} alt="" /> */}
            </Box>

            <Box className={classes.detailsContainer}>
                <Box className={classes.posterContainer}>
                    <Box className={classes.poster}>
                        <Avatar className={classes.posterImg} />
                        <Box className={classes.posterDetails}>
                            <Typography style={{ lineHeight: 1 }} variant='h6'>{madeBy}</Typography>
                            <Typography style={{ color: 'gray' }} variant='subtitle2'>{location}</Typography>
                        </Box>
                    </Box>

                    <Button className={classes.cartBtn}>Add To Cart</Button>
                </Box>
                <Divider className={classes.divders} />
                <Box className={classes.description}>
                    <Typography> {Parser(description)} </Typography>
                </Box>
            </Box>


        </Box>


    );

};

export default ItemDescription;