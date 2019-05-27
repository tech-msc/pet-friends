import React from "react";

import Card from "../Card/Card";

const CardList = ({ animalList }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {// Animal  -  Object Type
      /* Object.keys(animalList).map(
                    function ( item ) {
                        return (
                            <Card animal={animalList[item] } key= { `${'cardList'}-${animalList[item].id }`  } /> 
                        ); 
                    }
                ) */

      // Animal  -  Array Type
      animalList.map((item, i) => {
        return (
          <Card animal={animalList[i]} key={"cardList" + animalList[i].id} />
        );
      })}
    </div>
  );
};

export default CardList;
