import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import { data } from '../data/testData1';

const useStyles = makeStyles({
    root:{

    }
});


 const ItemDescription = ({name}) => {
    
    const classes = useStyles();

     return(
        <Box>
            <h1>{name}</h1>
        </Box>
     );

 };

 export default ItemDescription;