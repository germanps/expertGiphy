import React from 'react'

const GifGridItem = ( { id, title, url } ) => {

    
    return (
        <div className="gifGridItem animate__animated animate__fadeIn animate__delay-1s" id={id}>
            <h4>{title}</h4>
            <img src={url} alt={title} />
        </div>
    )
}

export default GifGridItem
