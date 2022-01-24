import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkNumbers = this.checkNumbers.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cards,
      cardTrunfo,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    cards.push({
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
    return cardTrunfo && this.setState({ hasTrunfo: true });
  }

  onInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
      } = this.state;
      if (cardName && cardDescription && cardImage && cardRare && this.checkNumbers()) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  }

  checkNumbers() {
    const { cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const [attr1, attr2, attr3] = [
      Number(cardAttr1),
      Number(cardAttr2),
      Number(cardAttr3)];
    const maxAttrSum = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const sumAttr = attr1 + attr2 + attr3;
    const resultMaxLimit = (attr1 <= maxAttr) && (attr2 <= maxAttr) && (attr3 <= maxAttr);
    const resultMinLimit = (attr1 >= minAttr) && (attr2 >= minAttr) && (attr3 >= minAttr);
    const resultSum = sumAttr <= maxAttrSum;
    return (resultSum && resultMaxLimit && resultMinLimit);
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          cards.length >= 1 ? cards.map((card, index) => (
            <Card
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />))
            : <p>Sem Cartas!</p>
        }
      </div>
    );
  }
}
export default App;
