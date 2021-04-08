import React from "react";
import api from 'modules/api/api';
import { useEffect } from  'react';
import { JOBS } from "modules/api/endpoints";


export default function Jobs() {
    useEffect( async () =>{
      const response =  await api.fetch(JOBS)

        console.log(response)
    },[])
    return (
        <div>
            Jobs Component
        </div>
    );
};