/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector,  } from "react-redux";
import { Redirect } from 'react-router-dom'
import LandingPage from "../components/views/LandingPage/LandingPage"


export default function (SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {

        let user = useSelector(state => state.user);
        let reState = useSelector(state =>state );
        console.log(reState)

        
  
        return (
            <SpecificComponent {...props} user={user} />
        )
    }
    return AuthenticationCheck
}


