import React, { useState } from 'react';

const GreatNovels = () => {
    
    return(
        <div className='title'>
            <h2 className= 'title-name'> Great Novels</h2>
            <input type="text" name="search" onChange= {(event) => setSearchTerm(event.target.value)}/>
            
        </div>
    )
}

export default GreatNovels;