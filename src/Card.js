import React from 'react';

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
                               
            <div className="bg-light-green br3 pa3 ma2 grow bw2 shadow-5 w5">
                
                <div className="tc">                    
                    <h2 className="">{animal.animalType}</h2>
                {this.renderImage( animal.src ) }
                    {/* <h3>{animal.name}</h3> */}
                </div>
            </div> 

        )
    }
}

export default Card;