import React from 'react';

import Card from './Card';

const CardList = ({animalList}) => {
    
    return (
        <div  className="flex justify-center flex-wrap">
            {
                Object.keys(animalList).map(
                    function ( item ) {
                        return (
                            <Card animal={animalList[item] } key= { `${'cardList'}-${animalList[item].id }`  } /> 
                        ); 
                    }
                )
            }
        </div>       
    )
}

export default CardList;