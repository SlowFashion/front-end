import React from 'react';
import ItemDescription from '../components/itemDescription';
import { data } from '../data/testData1';
import {Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Nav from '../components/nav';

const useStyles = makeStyles({
    root:{

    },
    sectionDivider:{
        margin:'10px 40px'
    }
});

const Product = (props) => {

    const classes = useStyles();

    // need to query database by ID and render properties
    const product = data.find(el => el._id === parseInt(props.match.params.id));

    return (
        <>
        <Nav />
        <ItemDescription {...product} />
        <Divider className={classes.sectionDivider} />
        </>
    );
};

export default Product;