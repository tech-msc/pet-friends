import React from 'react';

import Card from './Card';

const CardList = ({animalList}) => {
    // const cardArray = animalList.map( (animal, id ) => {
        //     console.log('------->' + id);
        //     console.log('---animal ---->' + typeof(animalList) );
        //     return <Card animal={animal} />
        // });
        
        const cardArray = Object.keys(animalList).map(
            function ( item ) {
                return <Card animal={animalList[item] }  
                //bug id key duplicated
                key= { `${'cardList'}-${animalList[item].id }`  }      /> 
            }
            
            )
            
            // {debugger}
    return (

        <div  className="flex justify-center flex-wrap">
               
            {cardArray}
        </div>       
    )
}

export default CardList;