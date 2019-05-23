import React from 'react';
import './contents/external_libs/tachyons.min.css';
import './Card.css';

class Card extends React.Component {
    renderImage(imageSrc) {
        return (
            <div>
                <img src={ require(`${imageSrc}`) }
                    alt='animal img' className='h4'/>
            </div>
        )
    }

    render ()
    {
        return (         
            <div className="bg-light-green br3 pa3 ma2 grow bw2 shadow-5">
            
                <div className="tc">
                    <h2>{this.props.animal.animalType}</h2>
                    {/* <h2 className="di">{this.props.animal.id}:&nbsp;</h2><p className="di f3">{this.props.animal.name}</p> */}
                    {/* <br/> */}
                    {/* <br/> */}
                    {
                        this.renderImage(this.props.animal.src)
                    }                   
                </div>
            </div>

        )
    }


































// const Card = function(props) {


//     renderImage(imageUrl){

//     }





//     return (
   

//         <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          
//             <div className="">
//                 <h2>{props.type}</h2>
//                 <h2 className="di">{props.id}:&nbsp;</h2><p className="di f3">{props.name}</p>
//                 <br/>
//                 <br/>
//                 {/*
//                     ==> DEU CERTO
//                  <img src={require('./contents/imgs/animals/coelho.png')} alt='trest'/> */}

//                  <img src={require('./contents/imgs/animals/coelho.png')} alt='trest'/>

//                 {/* <img src= { require(animalSrc) } alt='trest'/> */}
//             </div>

//             {/* {console.log (props.src)} */}
//             {console.log(animals[props.id].src)}
//              {/* <img src={ new Image( animals[props.id].src)  } /> */}

//         </div>



//     );
// }

}




export default Card;