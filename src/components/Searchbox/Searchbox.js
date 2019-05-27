import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (

        //  class="db w-100 pa2 mt2 br2 b--black-20 ba f6"
        <div className="pa2"> 
            <input type="search"
                className="pa3 br2 ba b--pink bg-lightest-blue f4 shadow-5" 
                onChange={searchChange}
                placeholder=" search animals"
                 />

        </div>

        
        
    )
}

export default Searchbox;

