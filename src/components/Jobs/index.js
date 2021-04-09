import React from "react";
import api from 'modules/api/api';
import { useEffect } from  'react';
import { JOBS } from "modules/api/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "../../redux/actions";


export default function Jobs() {
    const dispatch = useDispatch()

    const state = useSelector(state => state.api[JOBS])
   useEffect(() =>{
    try {
        dispatch(apiActions.fetch(JOBS));
        const data = api.fetch(JOBS);
        dispatch(apiActions.fetchSuccess(JOBS, data));
    } catch (e) {
        dispatch(apiActions.fetchFailure(JOBS, e));

    }

   },[])
    console.log(state)

    return (
        <div>
            Jobs Component
        </div>
    );
};