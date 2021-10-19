import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserEmail } from '../actions';
import { LockClosedIcon } from '@heroicons/react/solid';
import bitcoinLogo from '../images/bitcoin.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isEnable: false,
    };
    this.formValidator = this.formValidator.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  formValidator() {
    const { email, password } = this.state;
    const passwdLength = 6;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const isEnable = regex.test(email) && password.length >= passwdLength;
    this.setState({ isEnable });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.formValidator());
  }

  submitForm(event) {
    const { email } = this.state;
    const { history, setEmailGlobal } = this.props;
    event.preventDefault();
    setEmailGlobal(email);
    history.push('/carteira');
  }

  render() {
    const { isEnable } = this.state;
    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 md:relative md:rounded-xl md:ring-1 md:ring-black md:ring-opacity-5 md:shadow-sm w-full pt-8 pb-6 md:px-6 sm:px-0 md:bg-gray-100">
          <div>
            <img
              className="mx-auto h-40 w-auto"
              src={ bitcoinLogo }
              alt="WalletLogo"
            />
          </div>
          <form className="mt-8 space-y-6" onSubmit={this.submitForm}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  data-testid="email-input"
                  placeholder="Email"
                  required
                  autoComplete="email"
                  onChange={this.handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  data-testid="password-input"
                  autoComplete="current-password"
                  placeholder="Senha"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={!isEnable}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {isEnable ? null : <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />}
                </span>
                Entrar
              </button>
            </div>
            
            
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  setEmailGlobal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmailGlobal: (email) => dispatch(setUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
