import React from 'react';

import Card from './Card';

const CardList = ({animalList}) => {
    
        
    const cardArray = Object.keys(animalList).map(
            function ( item ) {
                return (
                    <Card animal={animalList[item] } key= { `${'cardList'}-${animalList[item].id }`  } /> 
                ); 
            }
        )
            
    
    return (

        <div  className="flex justify-center flex-wrap">
               
            {cardArray}
        </div>       
    )
}

export default CardList;