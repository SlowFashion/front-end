import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, IconButton, Button, Typography, Box } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { data } from '../data/testData1';
import { primaryBgColor } from './themes/color';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: primaryBgColor,
    },
    gridList: {
        width: 800,
        height:'100%',

        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        background: primaryBgColor,
        justifyContent:'center'
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
    cartBtn: {
        color: 'white',
        border: '1px solid white'
    },
    itemName: {
        color: 'white'
    },
    bar: {
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'space-between',
        alignItems:'center'
    },
    tile:{
        cursor:'pointer'
    }
}));

const Items = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={300} spacing={1} className={classes.gridList}>
                {data.map((tile) => (
                    <GridListTile className={classes.tile} key={tile.img} cols={tile.featured ? 1 : .6} rows={tile.featured ? 1 : 1}>
                        <img src={tile.image} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionIcon={
                                <Box className={classes.bar}>
                                    <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                        <StarBorderIcon/>
                                    </IconButton>
                                    <Typography className={classes.itemName} variant='p'>{tile.name}</Typography>
                                </Box>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
};

export default Items;