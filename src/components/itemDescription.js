import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Divider, Avatar, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import { primaryBtn } from '../components/themes/components';
import Parser from 'html-react-parser';
import { Rating } from '@material-ui/lab';
import ImageRollover from './imagePicker';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
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
        margin: '20px 40px',
        textAlign: 'left',
        maxWidth: '40vw'
    },
    divders: {
        marginTop: '20px',
        width: '100%'
    },
    posterDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    detailsContainer: {
        maxWidth: '50%'
    },
    posterImg: {
        marginRight: '10px',
        height: '75px',
        minWidth: '75px'
    },
    posterContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        margin: '20px',
        alignItems: 'center'
    },
    cartBtn: {
        ...primaryBtn,
        minWidth: '-webkit-fill-available',
        margin: '5px 40px',
    },
    ratings: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionDetails: {
        borderBottom: '1px solid grey',
        margin: '20px 40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'inherit'
    },
    buyNowBtn: {
        width: '-webkit-fill-available',
        margin: '5px 40px',
        border: '1px solid black',
        transition: '.5',
        '&:hover': {
            background: 'black',
            color: 'white'
        }
    },
    price:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    }

});


const ItemDescription = ({ name, category, image, price, madeBy, location, rating, numReviews, description, size, imageLib }) => {
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


                </Box>

                <Divider className={classes.divders} />
                <Box className={classes.optionDetails}>
                    <Box className={classes.price}>
                    <Typography variant='subtitle1'>Price &nbsp;</Typography>
                    <Typography style={{ color: '#B12704' }} variant='subtitle1'>{price}</Typography>
                    </Box>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="qty">Qty</InputLabel>
                        <Select
                            value={1}
                        >
                            <option value={1} >1 </option>
                            <option value={2}>2</option>
                            
                        </Select>
                    </FormControl>

                </Box>

                <Box className={classes.optionDetails}>
                    <Typography variant='subtitle1'>Size</Typography>
                    <Typography variant='subtitle1'>{size}</Typography>
                </Box>
                <Button className={classes.cartBtn}>Add To Cart</Button>
                <Button size='large' className={classes.buyNowBtn}>Buy Now</Button>

                <Box className={classes.description}>
                    <Typography> {Parser(description)} </Typography>
                </Box>


            </Box>
        </Box>


    );

};

export default ItemDescription;