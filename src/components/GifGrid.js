import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="animate__animated animate__flash">{category}</h3>
            { loading && <p>Loading...</p>}
            <div className="gifGrid">
                
                
                    {
                        images.map( img => {                       
                            return(
                                <GifGridItem
                                    key={img.id} 
                                    {...img}
                                /> 
                            );
                        })
                    }
            
            </div>
        </>
    )
}

export default GifGrid;