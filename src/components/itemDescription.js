import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Divider, Avatar, Button } from '@material-ui/core';
import {primaryBtn} from '../components/themes/components';
import Parser from 'html-react-parser';
import {Rating} from '@material-ui/lab';
import ImageRollover from  './imagePicker';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexFlow: 'row no wrap',
        alignItems: 'flex-start',
        margin: '100px'
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
    },
    icons: {

    },
    description: {
        margin:'20px 40px',
        textAlign:'left',
        maxWidth:'40vw'
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
    },
    ratings:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    price:{
        borderBottom:'1px solid grey',
        margin:'20px 40px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    buyNowBtn:{
        width:'100%',
        margin:'20px 40px',
        border:'1px solid black',
        transition:'.5',
        '&:hover':{
            background:'black',
            color:'white'
        }
    }

});


const ItemDescription = ({ name, category, image, price, madeBy, location, rating, numReviews, description, size, imageLib}) => {
    console.log(image)
    const classes = useStyles();

    return (
        <Box className={classes.root}>

            <Box style={{ background: `url(${image})` }} className={classes.images}>
                {/* <img className={classes.images}  src={image} alt="" /> */}
                <ImageRollover image={image} imageLib={imageLib} />
            </Box>

            <Box className={classes.detailsContainer}>
                <Box className={classes.posterContainer}>
                    <Box className={classes.poster}>
                        <Avatar className={classes.posterImg} />
                        <Box className={classes.posterDetails}>
                            <Typography style={{ lineHeight: 1 }} variant='h6'>{madeBy}</Typography>
                            <Typography style={{ color: 'gray' }} variant='subtitle2'>{location}</Typography>
                            <Box className={classes.ratings}>
                                <Rating name="read-only" value={rating} readOnly />
                                <Typography variant='subtitle2'>({numReviews})</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Button className={classes.cartBtn}>Add To Cart</Button>
                </Box>
                <Divider className={classes.divders} />
                <Box className={classes.description}>
                    <Typography> {Parser(description)} </Typography>
                </Box>
                <Box className={classes.price}>
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography style={{color:'#B12704'}} variant='subtitle1'>{price}</Typography>
                </Box>
                <Box className={classes.price}>
                    <Typography variant='subtitle1'>Size</Typography>
                    <Typography variant='subtitle1'>{size}</Typography>
                </Box>
                <Button size='large' className={classes.buyNowBtn}>Buy Now</Button>
            </Box>


        </Box>


    );

};

export default ItemDescription;