import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenditure, setCurExpenditure as setCurExpenseAction } from '../actions';
import { PencilAltIcon } from '@heroicons/react/outline'
import { TrashIcon } from '@heroicons/react/solid';

class DeleteAndEditButton extends React.Component {
  constructor() {
    super();
    this.deleteExpense = this.deleteExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  deleteExpense() {
    const { id, deleteById } = this.props;
    deleteById(id);
  }

  editExpense() {
    const { id, setCurExpense } = this.props;
    setCurExpense(id);
  }

  render() {
    return (
      <>
        <button
          data-testid="delete-btn"
          onClick={ this.deleteExpense }
          className="mr-2 whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-700"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
        <button
          data-testid="edit-btn"
          onClick={ this.editExpense }
          className="mr-2 whitespace-nowrap inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600"
        >
          <PencilAltIcon className="h-5 w-5" />
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteById: (id) => dispatch(deleteExpenditure(id)),
  setCurExpense: (id) => dispatch(setCurExpenseAction(id)),
});

DeleteAndEditButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deleteById: PropTypes.func.isRequired,
  setCurExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DeleteAndEditButton);
