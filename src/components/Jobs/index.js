import React from "react";
import api from 'modules/api/api';
import { useEffect } from  'react';
import { JOBS } from "modules/api/endpoints";
import { useSelector } from "react-redux";


export default function Jobs() {

    const state = useSelector(state => state)
    console.log(state)

    return (
        <div>
            Jobs Component
        </div>
    );
};