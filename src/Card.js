import React from "react";

import "./Card.css";

class Card extends React.Component {
  renderImage(imageSrc) {
    return (
      <div>
        <img src="#" alt="animal img" className="h4" />
      </div>
    );
  }

  render() {
    let animal = this.props.animal;
    // debugger;
    return (
      <div className="br3 pa4 ma2 grow bw2 shadow-5 w5 card-images">
        <div className="tc">
          <h2>nome: {animal.name}</h2>
        </div>
      </div>
    );
  }
}

export default Card;
