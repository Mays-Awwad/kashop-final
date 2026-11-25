import React from 'react'
import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useProductDetails(id) {

    const getProductDetails=async ()=>{

        const response=await axios.get(`https://knowledgeshop.runasp.net/api/Products/${id}`,
            {
                headers:{
                    "Accept-Language":"en"
                }
            }
        )
        return response.data.response;
    }
    
    const query=useQuery({
        queryKey:['productDetails',id],
        queryFn:getProductDetails,
        staleTime:1000 * 60  * 5,
    })
  return query;
}