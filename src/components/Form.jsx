import React from 'react';
import PropType from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    const inputTag = (
      <div>
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          id="check-trunfo"
        />
        Super Trybe Trunfo
      </div>);

    const warningMessage = (
      <p data-testid="trunfo-input">
        Você já tem um Super Trunfo em seu baralho
      </p>
    );

    return (
      <form>
        <div>
          <label htmlFor="name">
            Nome
            <input
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              name="cardName"
              id="name"
              data-testid="name-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Descrição
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
              id="description"
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="atribute-1">
            Attr01
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
              type="number"
              id="atribute-1"
              data-testid="attr1-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="atribute-2">
            Attr02
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
              type="number"
              id="atribute-2"
              data-testid="attr2-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="atribute-3">
            Attr03
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
              type="number"
              id="atribute-3"
              data-testid="attr3-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="input-img">
            Imagem
            <input
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
              data-testid="image-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="select-rarity">
            Raridade
            <select
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="check-trunfo">
            {
              hasTrunfo ? warningMessage : inputTag
            }
          </label>
        </div>
        <div>
          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
  hasTrunfo: PropType.bool.isRequired,
};

export default Form;
