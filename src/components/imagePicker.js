import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        width:'80px',
        display:'flex',
        flexFlow:'column nowrap',
        padding: ' 0 20px 20px',
    background: 'rgba(0,0,0,.5)',
    alignItems: 'center'


    },
    images:{
        maxWidth:'60px',
        marginTop:'10px',
        '&:hover':{
            border:'2px solid white'
        }
    }
});

const ImagePicker = ({ image, imageLib }) => {

    const classes = useStyles();

    //loop through image libe creating multiple images with the elemnt in imagelib as their background

    const [currentImage, setCurrentImage] = useState(image);

    /**
     * changes current image to selected image 
     * @param {*} e 
     */
    const changeImage = (e) => {
        e.preventDefault();
        console.log(e.target.src);
        // setCurrentImage(e)
    };

    return (
        <>
            <Box className={classes.root}>
                {
                    imageLib.map(el => <img className={classes.images} onClick={(e) =>changeImage(e)} src={el} alt={el} />)
                }
            </Box>
        </>
    );
};

export default ImagePicker;