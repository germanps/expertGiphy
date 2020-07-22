import { useState, useEffect } from "react";
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifts(category)
            .then( imgs => {          
                setState({
                    data: imgs,
                    loading: false
                });               
            });
    }, [category]);//si cambia la categoria se disparará otra vez el useEffect

    

    return state; // { data: [], loding: true }
}