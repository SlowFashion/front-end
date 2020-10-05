import React from 'react';
import Nav from '../components/nav';
import Jumbotron from '../components/jumbotron';
import GridList from '../components/items';
import SearchBar from '../components/searchbar';

const Home = () => {
    return(
    <>
        <Nav />
        <Jumbotron />
        <SearchBar />
        <GridList />
    </> 
    )
}

export default Home;