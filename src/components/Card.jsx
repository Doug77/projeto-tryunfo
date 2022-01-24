import React from 'react';
import PropType from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <div>
          <h3 data-testid="name-card">{ cardName }</h3>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
          <h5 data-testid="attr1-card">
            { `Atributo 1..........${cardAttr1}` }
          </h5>
          <h5 data-testid="attr2-card">
            { `Atributo 2..........${cardAttr2}` }
          </h5>
          <h5 data-testid="attr3-card">
            { `Atributo 3..........${cardAttr3}` }
          </h5>
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo && <h5 data-testid="trunfo-card">Super Trunfo</h5> }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default Card;
