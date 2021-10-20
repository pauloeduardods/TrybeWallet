import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteAndEditButton from './DeleteAndEditButton';
import formatPrice from '../utils/formatPrice';

class ExpenseTable extends React.Component {
  constructor() {
    super();
    this.renderTableRow = this.renderTableRow.bind(this);
  }

  renderTableRow(expense) {
    const { id, value, description, currency, method, tag, exchangeRates } = expense;
    return (
      <tr key={ id }>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900 truncate sm:max-w-xss xl:max-w-mdd">
              {description || '-'}
            </div>
          </div>
        </td>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900">
              {tag}
            </div>
          </div>
        </td>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900">
              {method}
            </div>
          </div>
        </td>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900">
              {`${currency} ${formatPrice(Number(value))}`}
            </div>
          </div>
        </td>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900">
              { exchangeRates[currency].name.replace('/Real Brasileiro', '') }
            </div>
          </div>
        </td>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900">
              {formatPrice(Number(exchangeRates[currency].ask))}
            </div>
          </div>
        </td>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900">
              {formatPrice(Number(exchangeRates[currency].ask) * Number(value))}
            </div>
          </div>
        </td>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900">
              Real
            </div>
          </div>
        </td>
        <td className="sm:px-1 md:px-2 lg:px-3 py-4 whitespace-nowrap">
          <div className="flex items-center place-content-center">
            <div className="text-sm font-medium text-gray-900">
              <DeleteAndEditButton id={id} />
            </div>
          </div>
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="flex flex-col mt-10">
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-t border-gray-300 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Método de pagamento</th>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Moeda</th>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Câmbio utilizado</th>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Valor convertido</th>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Moeda de conversão</th>
                    <th className="sm:px-1 md:px-2 lg:px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Editar/Excluir</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {expenses.map(this.renderTableRow)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
