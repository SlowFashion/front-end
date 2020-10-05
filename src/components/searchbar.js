import React from 'react';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    root:{
        margin: '10px auto 40px',
        display:'flex',
        justifyContent:'left',
        width:'800px'
    },
    searchbar:{
        width:'200px',
        transition: '.5s',
        '&:hover':{
            width:'300px'
        },
        background:'white'
    }
});

const SearchBar = () => {

    const classes = useStyles();
    return(
        <form className={classes.root}>
            <TextField className={classes.searchbar} size='small' label='search' variant='outlined' />
        </form>
    )
};

export default SearchBar