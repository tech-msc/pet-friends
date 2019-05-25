import React from 'react';

import './Card.css'

class Card extends React.Component {
    
    renderImage (imageSrc) {
        return (
            <div>
                <img src={ require(`${imageSrc}`) } alt='animal img' className='h4'/>
            </div>
        )
    }

    render ()
    {        
        let animal = this.props.animal;
        return (    
                               
            <div className="br3 pa4 ma2 grow bw2 shadow-5 w5 card-images">
                
                <div className="tc">                    
                    <h2 className="">{animal.animalType}</h2>
                    {this.renderImage( animal.src ) }        
                </div>
            </div> 

        )
    }
}

export default Card;