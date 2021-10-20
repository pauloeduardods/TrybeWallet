import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setExpenditure as setExpenditureAction,
  editExpenditure as editExpenditureAction } from '../actions';
import { PencilAltIcon } from '@heroicons/react/outline'
import { PlusCircleIcon } from '@heroicons/react/solid';

const INITIAL_FORM = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class ExpenditureForm extends React.Component {
  constructor() {
    super();
    this.state = {
      forms: INITIAL_FORM,
      isEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.submit = this.submit.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  static getDerivedStateFromProps(nextProps, state) {
    const { isEditing, curExpenditure } = nextProps;
    if (isEditing && isEditing !== state.isEditing) {
      return {
        forms: curExpenditure,
        isEditing,
      };
    } if (!isEditing && isEditing !== state.isEditing) {
      return {
        forms: INITIAL_FORM,
        isEditing,
      };
    }
    return null;
  }

  handleChange({ target: { id, value } }) {
    this.setState((prev) => ({ forms: { ...prev.forms, [id]: value } }));
  }

  handleNumberChange({ target: { id, value } }) {
    if (!isNaN(value)) {
      this.setState((prev) => ({ forms: { ...prev.forms, [id]: value } }));
    }
  }

  async submit(event) {
    event.preventDefault();
    const { setExpenditure, editExpenditure } = this.props;
    const { forms, isEditing } = this.state;
    if (isEditing) return editExpenditure(forms);
    setExpenditure(forms);
    this.setState({ forms: INITIAL_FORM });
  }

  renderInputs() {
    const { forms: { value, description, currency, method, tag } } = this.state;
    const { coins } = this.props;
    return (
      <>
        <div className="col-span-12 md:col-span-4">
          <label htmlFor="value" className="ml-2 block text-sm font-medium text-gray-700">
            Valor
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              id="value"
              value={value}
              placeholder="Valor"
              onChange={this.handleNumberChange}
              className="py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-5 pr-12 sm:text-sm border-gray-300 rounded-md border-2"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Moeda
              </label>
              <select
                id="currency"
                name="currency"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-4 mr-1 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                value={ currency }
                onChange={this.handleChange}
              >
                {coins.map((cur) => <option key={cur}>{cur}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label htmlFor="method" className="ml-2 block text-sm font-medium text-gray-700">
            Método de pagamento
          </label>
          <select onChange={this.handleChange} id="method" value={method} className="py-2 px-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2">
            {['Dinheiro', 'Cartão de crédito', 'Cartão de débito'].map((cur) =>
              (<option key={cur}>{cur}</option>))}
          </select>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label htmlFor="tag" className="ml-2 block text-sm font-medium text-gray-700">
            Tag
          </label>
          <select onChange={this.handleChange} id="tag" value={tag} className="py-2 px-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2">
            {['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'].map((cur) => <option key={cur}>{cur}</option>)}
          </select>
        </div>
        <div className="col-span-12">
          <label htmlFor="description" className="ml-2 block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <input
            type="text"
            id="description"
            value={description}
            placeholder="Descrição"
            onChange={this.handleChange}
            className="py-2 px-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2"
          />
        </div>
      </>
    );
  }

  renderSubmitButton() {
    const { isEditing } = this.state;
    if (!isEditing) return (
      <button type="submit" className="mt-2 col-span-12 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600">
        <PlusCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
        Adicionar despesa
      </button>
    );
    return (
      <button type="submit" className="mt-2 col-span-12 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600">
        <PencilAltIcon className="h-6 w-6 mr-2" aria-hidden="true" />
        Editar despesa
      </button>
    );
  }

  render() {
    const { isEditing } = this.state;
    const bgColor = isEditing ? 'bg-green-100' : 'bg-white'
    return (
      <form onSubmit={this.submit} className="max-w-7xl mx-auto px-4 sm:px-6 mt-5 md:col-span-2">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className={`${bgColor} px-4 py-5 sm:p-6`}>
            <div className="grid grid-cols-12 gap-2">
              {this.renderInputs()}
              {this.renderSubmitButton()}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.currencies,
  isEditing: wallet.isEditing,
  curExpenditure: wallet.curExpenditure,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenditure: (expenditure) => dispatch(setExpenditureAction(expenditure)),
  editExpenditure: (expenditure) => dispatch(editExpenditureAction(expenditure)),
});

ExpenditureForm.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  isEditing: PropTypes.bool,
  curExpenditure: PropTypes.objectOf(PropTypes.any),
  setExpenditure: PropTypes.func.isRequired,
  editExpenditure: PropTypes.func.isRequired,
};

ExpenditureForm.defaultProps = {
  isEditing: false,
  curExpenditure: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenditureForm);
