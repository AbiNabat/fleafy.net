import React from 'react';
import {SignIn} from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className='h-screen w-full grid place-content-center'>
            <SignIn></SignIn>
        </div>
    );
};

export default SignInPage;