import React from 'react';
import Nav from '../components/nav';
import SignIn from '../components/signInForm';

const CreateAccount = () => {
    return(
        <>
        <Nav login={true}/>
        <SignIn  />
        </>
    );
   
};

export default CreateAccount;